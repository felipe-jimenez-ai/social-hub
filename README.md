<h1 align="center">👥 The Hub</h1>

<p align="center">
  <strong>From strangers to structured connections — networking that works.
</p>

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

https://github.com/user-attachments/assets/09034405-b212-4ad0-9c3a-01485d0e9ab8

## Project Structure

The project is organized as a modular monolith within a monorepo, separating frontend and backend concerns into dedicated directories for clarity and maintainability.

```
the-hub/
├── frontend/             # All Next.js frontend code and configuration
│   ├── .next/            # Next.js build output
│   ├── node_modules/     # Frontend dependencies
│   ├── public/           # Frontend public assets
│   ├── src/              # Next.js application source
│   ├── .eslintrc.json    # Frontend ESLint configuration
│   ├── next-env.d.ts     # Next.js environment types
│   ├── next.config.mjs   # Next.js configuration
│   ├── package.json      # Frontend dependencies and scripts
│   ├── package-lock.json # Frontend dependency lock file
│   ├── postcss.config.mjs # PostCSS configuration for frontend
│   └── tsconfig.json     # Frontend TypeScript configuration
│
├── backend/              # All Python FastAPI backend code and configuration
│   ├── Dockerfile
│   ├── requirements.txt
│   └── src/
│       ├── auth/         # Authentication and authorization module
│       │   ├── api/
│       │   ├── models/
│       │   ├── services/
│       │   └── utils/
│       ├── connections/  # User connections management module
│       │   ├── api/
│       │   ├── models/
│       │   ├── services/
│       │   └── utils/
│       ├── main.py       # Main FastAPI application entry point
│       ├── profiles/     # User profiles management module
│       │   ├── api/
│       │   ├── models/
│       │   ├── services/
│       │   └── utils/
│       ├── search/       # Search functionality module
│       │   ├── api/
│       │   ├── models/
│       │   ├── services/
│       │   └── utils/
│       └── users/        # User management module
│           ├── api/
│           ├── models/
│           ├── services/
│           └── utils/
│
├── .gitignore            # Monorepo-level ignore rules
├── docker-compose.yml    # Defines both frontend and backend services
├── database-schema.sql   # Database schema (for initial setup)
├── README.md             # Project README
└── .env.local            # Environment variables (sensitive data)
```

## Tech Stack

This project utilizes a modern and robust technology stack for both frontend and backend:

*   **Frontend:**
    *   **Framework:** [Next.js](https://nextjs.org/)
    *   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
    *   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Backend:**
    *   **Authentication & Database:** [Supabase](https://supabase.com/) (PostgreSQL + Auth)
    *   **Language:** [Python](https://www.python.org/)
    *   **API Framework:** [FastAPI](https://fastapi.tiangolo.com/)
    *   **Data Layer:** [SQLModel](https://sqlmodel.tiangolo.com/) (Pydantic + SQLAlchemy)
    *   **Database Migrations:** [Alembic](https://alembic.sqlalchemy.org/)
    *   **Containerization:** [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)

## Getting Started

Follow these steps to set up and run The Hub application locally.

### 1. Prerequisites

*   Node.js (v18+) - for frontend development (can be managed by nvm or similar)
*   [Docker Desktop](https://www.docker.com/products/docker-desktop) (optional - for running the backend locally)

### 2. Clone the Repository

```bash
git clone https://github.com/felipe-jimenez-ai/the-hub.git
cd the-hub
```

### 3. Environment Variables

The project is configured to use Supabase for authentication and database. The environment variables are set up in `frontend/.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

**⚠️ SECURITY WARNING:** Never commit your actual API keys to the repository. The `.env.local` file is already in `.gitignore` to prevent this.

### 4. Install Frontend Dependencies

Navigate into the `frontend/` directory and install its dependencies:

```bash
cd frontend
npm install
```

### 5. Run the Frontend Application

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The application is currently configured to use Supabase for authentication and data storage, so no additional backend setup is required for the frontend to function.

## Current Deployment Status

The frontend application is currently deployed and accessible at: **https://the-hub-frontend.vercel.app/**

## Deployment to Vercel (Frontend Only)

For Vercel deployment, remember to configure the **Root Directory** setting in your Vercel project dashboard to `frontend/`. This tells Vercel where to find your Next.js application.

The project is already configured for Vercel deployment with the correct build settings and environment variables.

## Roadmap (Post-Paid-Pilot ONLY)

The following features will only be considered after a successful, **paid** pilot project is completed.

*   **V2 - Admin Dashboard:** Analytics for the organizer showing connection metrics.
*   **V3 - AI Recommendations:** Basic matching between "Superpower" and "Kryptonite" fields.
*   **V4 - Persistence:** Allowing users to access their "dossier" from past events.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
