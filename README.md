# 👥 Social Hub

## Project Status: PRIVATE - Pre-Funding MVP

This is a pre-seed, pre-revenue project. The current objective is to build a minimal, high-quality MVP to secure a paid pilot project with the first anchor client. The focus is 100% on solving the core problem with zero feature creep.

---

## 1. The Problem (The "Why")

Professional events, workshops, and educational cohorts (like the "Achievers Lab JAM") consistently fail in the first five minutes. They gather high-value individuals in a room and provide them with zero effective tools to answer three simple questions:

1.  Who is in this room?
2.  Why should I talk to them?
3.  How can I find the right person *now*?

The result is chaos, wasted time, broken promises of "networking," and a low ROI for both participants and organizers. This tool solves this problem.

**This project is NOT:**
*   A social network.
*   A learning management system (LMS).
*   An "all-in-one" event platform.

It is a surgical tool designed to solve the information asymmetry of "Day 1."

## 2. The Solution (The MVP Scope)

The MVP is a simple, mobile-responsive web application designed to be used as the official "first step" of any cohort-based event. It must execute three functions perfectly. Anything outside of this scope is considered a post-pilot feature.

**Core MVP Features:**

1.  **Effortless Profile Setup:** Users are prompted to set up a minimal profile containing:
    *   `Name` (String)
    *   `Photo` (Image Upload)
    *   `Role / Title` (String, e.g., "Software Engineer @ Acme Corp")
    *   `My Superpower` (Text, e.g., "Expert in financial modeling")
    *   `My Kryptonite` (Text, e.g., "Need help with user-centric design")

2.  **A Clean, Filterable Directory:** A simple grid or list view of all participant profiles. This directory must be clean, fast, and easy to scan.

3.  **Instant Keyword Search:** A single, prominent search bar that queries all fields in the profile database. Results must be instantaneous.

## 3. Roadmap (Post-Paid-Pilot ONLY)

The following features will only be considered after a successful, **paid** pilot project is completed and the client has validated the core solution. **This is not the current scope.**

*   **V2 - Admin Dashboard:** Analytics for the organizer showing connection metrics.
*   **V3 - AI Recommendations:** Basic matching between "Superpower" and "Kryptonite" fields.
*   **V4 - Persistence:** Allowing users to access their "dossier" from past events.

---

This is your constitution. Anything not on this list is a distraction. If you get a "great idea" for a new feature, you thank yourself for your creativity and then you ignore it.

Now go build the brick.


## Technical Stack (The "How")

This is a [Next.js](https://nextjs.org) app.

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Start editing by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy

You can deploy using platforms like [Vercel](https://vercel.com/). See the Next.js docs for details.
