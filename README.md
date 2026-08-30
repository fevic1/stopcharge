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
| Money | $0 until a human signs a partner link |
| Reports | Gmail (`fevic2@gmail.com`) · 22:30 Asia/Bangkok |

Publishing is **branch deploy**, not Actions. Do not switch Pages source to “GitHub Actions” unless you also restore a working `deploy-pages` workflow. Mixing the two is what produced the 404.

---

## Repository tree

```text
stopcharge/
├── README.md                 # this file
├── QUEUE.md                  # brands waiting for a page
├── .nojekyll                 # skip Jekyll on GitHub Pages
├── index.html                # home / directory index
├── styles.css                # shared theme
├── pages/
│   ├── amazon-prime.html
│   ├── adobe-creative-cloud.html
│   ├── apple-subscriptions.html
│   └── google-play-subscriptions.html
└── outreach/
    └── DRAFTS.md              # affiliate copy — drafts only, never sent by the bot
```

---

## How a page ships

1. Pick the next brand in `QUEUE.md`, or a fresh cancel complaint from X / Reddit.
2. Verify the official help article. No official source → skip.
3. Add `pages/{slug}.html` in the same layout as the existing pages.
4. Link a card from `index.html`.
5. Push to `main`. Pages rebuilds from root in a few minutes.

A page must include: numbered steps, the trap (fee, third-party billing, pause-is-not-cancel), last-checked date, source.

---

## Fence

Mogul may research and publish cancel pages.

Mogul may not send email or DMs in the owner’s name except the scheduled money report to the connected Gmail, accept affiliate or legal terms, spend money, or delete live pages.

---

## License

Public information compiled from vendor help docs. Not affiliated with Amazon, Adobe, Apple, or Google. Not legal advice.
