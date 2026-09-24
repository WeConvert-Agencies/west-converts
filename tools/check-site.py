#!/usr/bin/env python3
"""check-site: invariants for weconvert-site/index.html that a design pass must not break.

    python3 tools/check-site.py

Structure, not taste: the page stays one deployable file, the conversion path stays intact,
and the product truths in PRODUCT.md stay true. Exit 0 = clean, 1 = one or more failures.
"""
import os
import re
import sys
from html.parser import HTMLParser

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGE = os.path.join(REPO, "weconvert-site", "index.html")

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link",
        "meta", "param", "source", "track", "wbr"}
# SVG/MathML children are self-closing in ways html.parser reports inconsistently
SKIP_BALANCE = {"path", "rect", "circle", "line", "polyline", "polygon", "ellipse",
                "stop", "use", "feGaussianBlur", "feOffset", "feMerge", "feMergeNode"}

REQUIRED_IDS = ["top", "services", "process", "why", "about", "clients", "faq", "start"]
ALLOWED_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com"]
BANNED_COPY = ["AI-powered", "AI powered", "AI-run", "AI run"]


class Structure(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.unbalanced = []
        self.h1 = 0
        self.imgs_without_alt = 0
        self.ids = set()
        self.in_svg = 0

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get("id"):
            self.ids.add(a["id"])
        if tag == "svg":
            self.in_svg += 1
        if tag == "h1":
            self.h1 += 1
        if tag == "img" and a.get("alt") is None:
            self.imgs_without_alt += 1
        if tag in VOID or tag in SKIP_BALANCE or self.in_svg:
            return
        self.stack.append((tag, self.getpos()[0]))

    def handle_endtag(self, tag):
        if tag == "svg":
            self.in_svg = max(0, self.in_svg - 1)
            return
        if tag in VOID or tag in SKIP_BALANCE or self.in_svg:
            return
        if self.stack and self.stack[-1][0] == tag:
            self.stack.pop()
        else:
            for i in range(len(self.stack) - 1, -1, -1):
                if self.stack[i][0] == tag:
                    for orphan, line in self.stack[i + 1:]:
                        self.unbalanced.append(f"<{orphan}> opened line {line} never closed")
                    del self.stack[i:]
                    break
            else:
                self.unbalanced.append(f"stray </{tag}> at line {self.getpos()[0]}")


def main():
    if not os.path.isfile(PAGE):
        sys.exit(f"missing {PAGE}")
    src = open(PAGE, encoding="utf-8").read()
    fails, notes = [], []

    p = Structure()
    p.feed(src)
    for orphan, line in p.stack:
        p.unbalanced.append(f"<{orphan}> opened line {line} never closed")

    if p.unbalanced:
        fails += [f"unbalanced markup: {u}" for u in p.unbalanced[:10]]
    if p.h1 != 1:
        fails.append(f"expected exactly one <h1>, found {p.h1}")
    if p.imgs_without_alt:
        fails.append(f"{p.imgs_without_alt} <img> without an alt attribute")

    for sid in REQUIRED_IDS:
        if sid not in p.ids:
            fails.append(f"section id #{sid} is gone (nav and CTAs link to it)")

    dupes = [i for i in set(re.findall(r'\sid="([^"]+)"', src))
             if len(re.findall(r'\sid="%s"' % re.escape(i), src)) > 1]
    if dupes:
        fails.append(f"duplicate ids: {', '.join(sorted(dupes)[:5])}")

    # single deployable file: nothing may be fetched from disk or a third-party host.
    # Comments hold example URLs for the swap-before-launch list, so scan the live markup only.
    live = re.sub(r"<!--.*?-->", "", src, flags=re.S)
    for url in set(re.findall(r'(?:src|href)="(https?://[^"]+)"', live)):
        host = url.split("/")[2]
        if host not in ALLOWED_HOSTS and not url.startswith("https://schema.org"):
            fails.append(f"external request to {host} (page must stay self-contained)")
    for rel in set(re.findall(r'(?:src|href)="(?!#|https?:|data:|mailto:|tel:)([^"]+)"', live)):
        fails.append(f"relative asset reference '{rel}' (every image must be base64-inlined)")

    # conversion path
    if src.count("Book Your Free Strategy Call") < 4:
        fails.append("primary CTA 'Book Your Free Strategy Call' appears fewer than 4 times")
    if 'name="strategy-call"' not in src:
        fails.append("contact form lost name=\"strategy-call\" (Netlify form detection)")
    if "company-website" not in src:
        fails.append("form honeypot 'company-website' is gone")
    if 'href="#start"' not in src:
        fails.append("no CTA links to #start")

    # product truths
    for phrase in BANNED_COPY:
        if phrase.lower() in src.lower():
            fails.append(f"banned copy '{phrase}' (AI is a functional label only)")
    prices = [m for m in re.findall(r'\$\s?\d[\d,]*', src)]
    if prices:
        fails.append(f"price-like text on the page: {', '.join(prices[:5])} (no public pricing)")
    if "PLACEHOLDER" not in src:
        fails.append("PLACEHOLDER comments are gone (swap-before-launch list relies on them)")
    if 'name="robots"' in src and "noindex" not in src:
        notes.append("noindex removed - fine only if the real domain is live")

    # accessibility + weight
    if "prefers-reduced-motion" not in src:
        fails.append("prefers-reduced-motion block is gone")
    if "skip" not in src or "#main" not in src:
        fails.append("skip link to #main is gone")
    kb = len(src.encode("utf-8")) / 1024
    if kb > 400:
        fails.append(f"page is {kb:.0f} KB (budget 400 KB for a single-file deploy)")
    else:
        notes.append(f"page weight {kb:.0f} KB")

    for n in notes:
        print(f"  note: {n}")
    if fails:
        print(f"\nFAIL ({len(fails)}):")
        for f in fails:
            print(f"  - {f}")
        return 1
    print(f"\nPASS: {len(REQUIRED_IDS)} sections, one h1, self-contained, CTA path intact")
    return 0


if __name__ == "__main__":
    sys.exit(main())
