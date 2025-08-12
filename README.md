# 👥 Social Hub

## Project Status: PRIVATE - Pre-Funding MVP

This is a pre-seed, pre-revenue project. The current objective is to build a minimal, high-quality MVP to secure a paid pilot project with the first anchor client. The focus is 100% on solving the core problem with zero feature creep.

---

## The Problem (The "Why")

Professional events, workshops, and educational cohorts consistently fail in the first five minutes. They gather high-value individuals in a room and provide them with zero effective tools to answer three simple questions:

1.  **Who is in this room?**
2.  **Why should I talk to them?**
3.  **How can I find the right person *now*?**

The result is chaos, wasted time, broken promises of "networking," and a low ROI for both participants and organizers. This tool solves this problem.

**This project is NOT:**
*   A social network.
*   A learning management system (LMS).
*   An "all-in-one" event platform.

It is a surgical tool designed to solve the information asymmetry of "Day 1."

## The Solution (The MVP Scope)

The Hub is a simple, mobile-responsive web application designed to be the official "first step" of any cohort-based event. It executes three functions perfectly.

*   **⚡️ Effortless Profile Setup:** Users create a minimal profile with their name, photo, title, a "Superpower" (what they offer), and a "Kryptonite" (what they need help with).
*   **🔍 Instant, Filterable Directory:** A clean, fast, and scannable grid of all participant profiles.
*   **🔑 Universal Keyword Search:** A single, prominent search bar that queries all profile fields to instantly find the right person.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Backend & DB:** [Supabase](https://supabase.io/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### 1. Prerequisites
*   Node.js (v18+)
*   A Supabase project.

### 2. Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/the-hub.git
    cd the-hub
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of your project and add your Supabase credentials. You can find these in your Supabase project's "API" settings.

    ```bash
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```
    See `.env.example` for a template.

4.  **Set up the database:**
    Run the SQL statements in `database-schema.sql` in your Supabase SQL Editor to create the necessary tables and policies.

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Roadmap (Post-Paid-Pilot ONLY)

The following features will only be considered after a successful, **paid** pilot project is completed.

*   **V2 - Admin Dashboard:** Analytics for the organizer showing connection metrics.
*   **V3 - AI Recommendations:** Basic matching between "Superpower" and "Kryptonite" fields.
*   **V4 - Persistence:** Allowing users to access their "dossier" from past events.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
