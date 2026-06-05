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
Frontend port: 5173
Backend port: 3000

## Current Status
Phase: 3 — Backend (Node/Express)
PRs merged: 10
Last session: JWT tokens — token generation on login + authenticateToken middleware
Next session: Connect JWT to React frontend (store in localStorage, send in headers)

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
| KAN-10 | Dev Setup/Express | 🟡 In Progress |
| KAN-24 | JWT Auth — Token Generation & Protected Routes | ✅ Done |
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

## Backend Concepts Mastered
- Express server setup, middleware (cors, express.json())
- REST API routes (GET, POST)
- HTTP status codes (200, 201, 400, 401, 403, 409, 500)
- SQLite database — db.get(), db.run(), ? placeholders
- SQL injection prevention
- bcrypt hashing and comparison
- Callback nesting pattern
- .env and dotenv for secrets
- JWT — token generation with jwt.sign(), verification with jwt.verify()
- Custom middleware functions — authenticateToken pattern
- Protected routes using middleware
- Base64 encoding vs encryption (JWT payload is encoded, not encrypted)
- Unix timestamps (iat, exp fields in JWT)

## Git Workflow
- Always branch from main → feature branch → PR → merge
- Conventional commits: feat:, fix:, chore:
- .gitignore: node_modules/, .env, *.db
- 10 PRs merged to date

## How to Start Each Session
1. Ram shares this file URL or pastes key sections
2. Claude reads current status and next session topic
3. Quick 3-question warmup on last session
4. Dive into next topic

## Next 3 Sessions Plan
| Session | Topic | Jira |
|---------|-------|------|
| Next | Connect JWT to React frontend | KAN-7 |
| +1 | Jest unit tests setup | KAN-20, KAN-21 |
| +2 | Sign Up / Login tests | KAN-21 |

## Context Store URLs
- Confluence: Page ID 196818 — cloudId ce7ed5f1-9984-4f1b-ab5d-05c5bb19eafc
- GitHub Raw: https://raw.githubusercontent.com/rnrathiai/ai4Ram/main/CONTEXT.md
- GitHub Wiki: https://github.com/rnrathiai/ai4Ram/wiki
