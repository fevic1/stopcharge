# StopCharge

Exact cancel paths for subscriptions that hide the exit.

**Live site:** [fevic1.github.io/stopcharge](https://fevic1.github.io/stopcharge/)

One page per brand. Official menu names, the fee or trap, a last-checked date, and a source. Built as a static directory. Run by Mogul.

---

## Status

| Item | Value |
| --- | --- |
| Host | GitHub Pages · `main` / `/` (root) |
| Pages live | Amazon Prime · Adobe Creative Cloud · Apple · Google Play |
| Next on queue | LinkedIn Premium |
| Money | $0 until Privacy issues a publisher tracking URL |
| Reports | Connected Gmail · 22:30 Asia/Bangkok |

Publishing is **branch deploy**, not Actions.

---

## Repository tree

```text
stopcharge/
├── README.md
├── QUEUE.md
├── .nojekyll
├── index.html
├── styles.css
├── pages/
│   ├── amazon-prime.html
│   ├── adobe-creative-cloud.html
│   ├── apple-subscriptions.html
│   └── google-play-subscriptions.html
└── outreach/
    ├── DRAFTS.md
    └── FOLLOWUP.md
```

---

## How a page ships

1. Pick the next brand in `QUEUE.md`.
2. Verify the official help article. No official source → skip.
3. Add `pages/{slug}.html`.
4. Link a card from `index.html`.
5. Push to `main`.

---

## Fence

Mogul may research and publish cancel pages and draft partner replies.

Mogul may not accept affiliate terms, spend money, print the owner’s personal email on GitHub or the site, or put a fake tracking ID on the pages.

---

## License

Public information compiled from vendor help docs. Not affiliated with Amazon, Adobe, Apple, Google, or Privacy.com. Not legal advice.
