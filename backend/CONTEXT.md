AI4Ram — Learning Context & Project Status
This file is updated at the end of every session. At the start of a new conversation say: "Read my context from: https://raw.githubusercontent.com/rnrathiai/ai4Ram/main/CONTEXT.md"

## About Ram
Background: QA Professional learning full-stack development
Starting point: Basics only — HTML/CSS
Daily time: 30–60 mins
Goal: Build, test and deploy AI4Ram from scratch
Coaching style: Learn by doing, code reviews, Jira tracking

## Project — AI4Ram
Repo: https://github.com/rnrathiai/ai4Ram
Jira: https://rnrathiai.atlassian.net
Stack: React (Vite) + Node.js/Express + SQLite + bcryptjs + jsonwebtoken
Test framework: Jest + Supertest
CI/CD: GitHub Actions (.github/workflows/ci.yml)
Frontend (local): http://localhost:5173
Backend (local): http://localhost:3000
Frontend (production): https://storied-frangollo-948f09.netlify.app
Backend (production): https://ai4ram.onrender.com

## Current Status
Phase: 5 — Deployment & CI/CD (security improvements)
PRs merged: 16
Last session: Security — JWT_SECRET moved to GitHub Secrets (KAN-30)
Next session: CD Pipeline — auto deploy on merge (KAN-19)

## Phase Progress
| Phase | Topic | Status |
|-------|-------|--------|
| Phase 1 | Foundation (JS, Git, Env) | ✅ Complete |
| Phase 2 | Frontend (React) | ✅ Complete |
| Phase 3 | Backend (Node/Express) | ✅ Complete |
| Phase 4 | QA & Testing | ✅ Complete |
| Phase 5 | Deployment & CI/CD | 🟡 In Progress |

## Jira Tickets
| Ticket | Feature | Status |
|--------|---------|--------|
| KAN-16 | Dev setup | ✅ Done |
| KAN-17 | Env vars | ✅ Done |
| KAN-4 | Logout | ✅ Done |
| KAN-5 | Sign Up | ✅ Done |
| KAN-6 | Login | ✅ Done |
| KAN-7 | Dashboard | ✅ Done |
| KAN-24 | JWT Auth — Token Generation & Protected Routes | ✅ Done |
| KAN-25 | Connect JWT to React Frontend | ✅ Done |
| KAN-26 | Jest Unit Tests Setup — Auth Route Coverage | ✅ Done |
| KAN-27 | Happy Path Tests + app.js Refactor | ✅ Done |
| KAN-28 | Deployment — Netlify + Render | ✅ Done |
| KAN-29 | CI Pipeline — GitHub Actions with Jest Tests | ✅ Done |
| KAN-30 | Security — Move JWT_SECRET to GitHub Secrets | ✅ Done |
| KAN-12 | Deployment | ✅ Done |
| KAN-13 | CI/CD | ✅ Done |
| KAN-18 | CI Pipeline | ✅ Done |
| KAN-19 | CD Pipeline | 🔜 To Do — Next session |
| KAN-10 | Code Cleanup — Routes/Controllers | 🔜 To Do |
| KAN-14 | Rate Limiting + Input Sanitization | 🔜 To Do |
| KAN-22 | AI Provider | 🔜 To Do — After KAN-19, KAN-10, KAN-14 |
| KAN-9 | QA Setup | 🔜 To Do |
| KAN-11 | AI Setup | 🔜 To Do |
| KAN-15 | Performance Epic | 🔜 To Do |
| KAN-20 | Test Framework | 🔜 To Do |
| KAN-21 | Sign Up Tests | 🔜 To Do |
| KAN-23 | Staging/Prod Envs | 🔜 To Do |

## Tech Stack & Key Decisions
| Decision | Choice | Reason |
|----------|--------|--------|
| Frontend framework | React + Vite | Modern, fast HMR |
| Backend framework | Express | Simple, lightweight |
| Database | SQLite (sqlite3) | No server needed, good for learning |
| Password hashing | bcryptjs | Pure JS, Windows compatible |
| Token auth | JWT (jsonwebtoken) | Industry standard, stateless sessions |
| Token storage | localStorage | Simple for learning, revisit cookies in security phase |
| Unit testing | Jest + Supertest | Industry standard, fast, no browser needed |
| E2E testing | Playwright (planned) | Separate repo, matches real QA team structure |
| Frontend hosting | Netlify | Free, GitHub integration, built for React |
| Backend hosting | Render | Free tier, persistent server, Node.js support |
| CI/CD | GitHub Actions | Built into GitHub, free, runs on every push |
| Secrets management | GitHub Secrets | Encrypted, never visible in code or logs |
| AI Provider | Anthropic Claude API (planned) | $5 credit — no Claude Pro needed |
| CSS | Plain CSS files | Keep it simple for learning |

## JavaScript Concepts Mastered
- Variables (const, let), data types, string methods
- Functions, scope, arrow functions vs regular functions
- Conditions, loops, regex basics
- Arrays — find(), filter(), forEach(), includes()
- Objects, array destructuring, spread operator ...
- module.exports and require()
- async/await, fetch(), Promises
- Template literals, JSON.stringify(), JSON.parse()

## React Concepts Mastered
- Components, JSX, props, state (useState)
- Event handlers (onChange, onClick)
- Conditional rendering (&&, early return)
- Lifting state up, passing callbacks as props
- CSS modules, className
- fetch() from React to Express
- useEffect — running code on component load, empty dependency array
- localStorage — setItem, getItem, removeItem
- Authorization header — Bearer token pattern
- Shared CSS classes across components (auth-container)
- Environment variables in Vite — import.meta.env.VITE_*

## Backend Concepts Mastered
- Express server setup, middleware (cors, express.json())
- REST API routes (GET, POST)
- HTTP status codes (200, 201, 400, 401, 403, 409, 500)
- SQLite database — db.get(), db.run(), ? placeholders
- SQL injection prevention
- bcrypt hashing and comparison
- Callback nesting pattern
- .env and dotenv for secrets — path config for subfolders
- JWT — token generation with jwt.sign(), verification with jwt.verify()
- Custom middleware functions — authenticateToken pattern
- Protected routes using middleware
- Base64 encoding vs encryption (JWT payload is encoded, not encrypted)
- Unix timestamps (iat, exp fields in JWT)
- app.js vs index.js separation — app definition vs server start
- CORS configuration — allowing multiple origins

## Testing Concepts Mastered
- Jest — describe(), test(), expect(), toBe() matchers
- Supertest — HTTP requests in tests without a browser
- AAA pattern — Arrange, Act, Assert (= Given/When/Then)
- Unit vs integration vs E2E testing — when to use each
- Test repo strategy — unit tests in dev repo, E2E in separate repo
- await in async tests — missing it causes undefined responses
- set() for headers vs send() for body in supertest
- beforeAll / afterAll — test lifecycle hooks
- Test isolation — clean up before and after tests run
- SQLite IN vs LIKE — case sensitivity gotcha
- setupFiles in Jest config — loading env vars before tests
- 12 test cases — negative and happy path coverage
- CI vs local database — fresh DB on CI, persistent locally

## Deployment & CI/CD Concepts Mastered
- Netlify — deploying React/Vite apps, build settings, env vars
- Render — deploying Node.js/Express, env vars, build commands
- CORS — why it exists, how to configure multiple origins
- Environment variables — VITE_API_URL for frontend, .env for backend
- sqlite3 GLIBC compatibility — build from source fix
- Node.js version pinning via .node-version file
- BOM encoding issues on Windows (Out-File -Encoding ascii)
- GitHub Actions — workflow files, jobs, steps, triggers
- GitHub Secrets — encrypted secrets, ${{ secrets.NAME }} syntax
- Conventional commits — feat:, fix:, chore:, docs:, test:
- YAML syntax — name, on, jobs, runs-on, steps, uses, run, env
- Fresh database on CI vs persistent local database

## Git Workflow
- Always branch from main → feature/description → PR → merge
- Conventional commits: feat:, fix:, chore:, docs:, test:
- .gitignore: node_modules/, .env, *.db
- 16 PRs merged to date

## How to Start Each Session
1. Ram shares this file URL or pastes key sections
2. Claude reads current status and next session topic
3. Quick 3-question warmup on last session
4. Dive into next topic

## Session Plan
| Session | Topic | Jira |
|---------|-------|------|
| Next | CD Pipeline — auto deploy on merge | KAN-19 |
| +1 | Code cleanup — routes/controllers structure | KAN-10 |
| +2 | Rate limiting + input sanitization | KAN-14 |
| After above | Add $5 Anthropic credit → AI integration | KAN-22 |

## Context Store URLs
- Confluence: Page ID 196818 — cloudId ce7ed5f1-9984-4f1b-ab5d-05c5bb19eafc
- GitHub Raw: https://raw.githubusercontent.com/rnrathiai/ai4Ram/main/CONTEXT.md
- GitHub Wiki: https://github.com/rnrathiai/ai4Ram/wiki
