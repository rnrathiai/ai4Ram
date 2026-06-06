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
Frontend port: 5173
Backend port: 3000

## Current Status
Phase: 3 — Backend (Node/Express)
PRs merged: 13
Last session: Happy path tests + app.js refactor — 12/12 tests passing with test isolation
Next session: AI Provider integration (KAN-22)

## Phase Progress
| Phase | Topic | Status |
|-------|-------|--------|
| Phase 1 | Foundation (JS, Git, Env) | ✅ Complete |
| Phase 2 | Frontend (React) | ✅ Complete |
| Phase 3 | Backend (Node/Express) | 🟡 In Progress |
| Phase 4 | QA & Testing | 🔜 Upcoming |
| Phase 5 | Deployment & CI/CD | 🔜 Upcoming |

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
| KAN-10 | Dev Setup/Express | 🟡 In Progress |
| KAN-9 | QA Setup | 🔜 To Do |
| KAN-11 | AI Setup | 🔜 To Do |
| KAN-12 | Deployment | 🔜 To Do |
| KAN-13 | CI/CD | 🔜 To Do |
| KAN-14 | Performance | 🔜 To Do |
| KAN-15 | Performance Epic | 🔜 To Do |
| KAN-18 | CI Pipeline | 🔜 To Do |
| KAN-19 | CD Pipeline | 🔜 To Do |
| KAN-20 | Test Framework | 🔜 To Do |
| KAN-21 | Sign Up Tests | 🔜 To Do |
| KAN-22 | AI Provider | 🔜 To Do |
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

## Git Workflow
- Always branch from main → feature/description → PR → merge
- Conventional commits: feat:, fix:, chore:, docs:
- .gitignore: node_modules/, .env, *.db
- 13 PRs merged to date

## How to Start Each Session
1. Ram shares this file URL or pastes key sections
2. Claude reads current status and next session topic
3. Quick 3-question warmup on last session
4. Dive into next topic

## Next 3 Sessions Plan
| Session | Topic | Jira |
|---------|-------|------|
| Next | AI Provider integration | KAN-22 |
| +1 | Deployment setup | KAN-12 |
| +2 | CI/CD pipeline | KAN-13, KAN-18 |

## Context Store URLs
- Confluence: Page ID 196818 — cloudId ce7ed5f1-9984-4f1b-ab5d-05c5bb19eafc
- GitHub Raw: https://raw.githubusercontent.com/rnrathiai/ai4Ram/main/CONTEXT.md
- GitHub Wiki: https://github.com/rnrathiai/ai4Ram/wiki
