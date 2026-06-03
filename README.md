# NoSuggest

**Watch what you want. Nothing else.**

NoSuggest is a free, open-source YouTube viewer that lets you watch YouTube intentionally — without the recommendation algorithm pulling you somewhere you never chose to go.

It is a distraction-free YouTube experience built around one idea: your subscriptions only. You follow the channels you care about, watch what you came for, and leave. No suggested videos. No autoplay. No Shorts spiral. No algorithm.

> **[nosuggest.com](https://nosuggest.com)**

---

## What is this?

If you have ever searched for a way to watch YouTube without recommendations, YouTube without algorithm, or YouTube subscriptions only — this is it.

NoSuggest is a YouTube without algorithm experience. It works as a distraction-free YouTube client that strips out everything except the channels you choose to follow. Think of it as an open source YouTube viewer built for intentional watching and digital wellness.

It is also the best alternative to PocketTube for users who want something simpler, with no browser extension required, and full mobile support.

For parents: NoSuggest includes a Kids Mode — YouTube for kids without recommendations — where you choose the channels and lock them with a PIN.

---

## Why

YouTube's recommendation algorithm is designed to maximise watch time, not to serve you. Even if you open YouTube with a specific video in mind, it works hard to keep you there longer with autoplay, end cards, homepage suggestions, and a sidebar full of suggestions.

NoSuggest removes all of it. Open it when you want to catch up on your channels, watch what you chose, and close it. That is the whole idea.

---

## Features

- **Follow channels** — add any YouTube channel by name, handle, or URL
- **Latest videos feed** — see the most recent uploads from your channels in one place
- **Search** — find any video by keyword or paste a YouTube URL directly to play it
- **Save for later** — bookmark videos to watch when you have time
- **No account required** — no sign-in, nothing to create
- **PWA** — installable on desktop and mobile, works like a native app without an App Store
- **Kids Mode** — PIN-protected mode that restricts navigation to approved channels only
- **Mobile-first** — works on iPhone, Android, iPad, and laptop. No browser extension needed.
- **No backend data storage** — your data stays in your browser, nothing stored on our servers

---

## Privacy

NoSuggest collects no personal data. No accounts. No sign-in. No cookies. No tracking pixels.

We use Cloudflare Web Analytics, a cookie-free, privacy-respecting tool that records only aggregate data such as page views and country. No individual visitors are tracked.

Your data lives entirely in your browser's localStorage:
- Channels you follow
- Videos you saved
- A short-lived video cache (cleared every 3 hours)
- Your Kids Mode PIN, if set

Nothing ever leaves your device. Full details at [nosuggest.com/privacy](https://nosuggest.com/privacy)

---

## How It Works

NoSuggest retrieves publicly available YouTube data — the same information visible to anyone browsing YouTube. Videos play through YouTube's official embed player, so watch time and ad revenue go to creators as normal.

---

## Source Code

The frontend source code (this repository) is made available for transparency and personal non-commercial use. You may read and inspect it.

The backend worker that handles API requests is kept private to protect service reliability and prevent abuse. This means NoSuggest is best described as **source-available** rather than fully open source — the parts you interact with are visible; the infrastructure layer is not.

You may not redistribute, rebrand, or redeploy this application commercially or publicly without explicit permission.

&copy; 2026 NoSuggest — [nosuggest.com/contact](https://nosuggest.com/contact)

---

## Support

NoSuggest is free and always will be. It is supported entirely by voluntary contributions from users who find it valuable.

If it is useful to you, consider supporting at [ko-fi.com/nosuggest](https://ko-fi.com/nosuggest)
