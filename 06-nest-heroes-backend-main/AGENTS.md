# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

NestJS 11 backend API for a heroes/villains catalog. Uses in-memory data (no database) seeded from `src/data/heroes.data.ts`. Serves static files from `public/` via `@nestjs/serve-static`. All API routes are prefixed with `/api`.

## Build and Run Commands

- **Install**: `npm install`
- **Dev server (watch mode)**: `npm run start:dev`
- **Build**: `npm run build`
- **Production**: `npm run start:prod`
- **Lint (with autofix)**: `npm run lint`
- **Format**: `npm run format`
- **Unit tests**: `npm run test`
- **Single test file**: `npx jest --testPathPattern=<filename>`
- **Test watch mode**: `npm run test:watch`
- **Test coverage**: `npm run test:cov`
- **E2E tests**: `npm run test:e2e`

## Architecture

### Global Configuration (src/main.ts)

- CORS enabled globally
- Global prefix: `/api` (all controller routes are under `/api/...`)
- Global `ValidationPipe` with `whitelist: true`, `forbidNonWhitelisted: true`, and `transform: true` with implicit conversion enabled. All DTOs are automatically validated and unknown properties are stripped/rejected.
- Default port: 3000 (overridden by `PORT` env var)

### Module Structure

Single feature module: `HeroesModule`. There is no database — all data lives in-memory in `HeroesService.heroes`, deep-cloned from the seed data at startup. Restarting the server resets all data.

### API Endpoints (HeroesController → `/api/heroes`)

- `GET /` — Paginated list. Query params: `limit` (default 6), `offset` (default 0), `category` (default "all"). Returns `{ total, pages, heroes }`.
- `GET /summary` — Dashboard stats: total count, strongest hero, smartest hero, hero/villain counts.
- `GET /search` — Advanced multi-field search. At least one query param required: `name`, `team`, `category`, `universe`, `status`, `strength`. Returns sorted array.
- `GET /:id` — Find by id or slug.
- `POST /` — Create hero. Body validated via `CreateHeroDto`.
- `PATCH /:id` — Partial update. Body validated via `UpdateHeroDto` (PartialType of CreateHeroDto).
- `DELETE /:id` — Remove hero.

### Key Patterns

- **DTOs use `class-validator` decorators** for validation. `UpdateHeroDto` extends `PartialType(CreateHeroDto)` from `@nestjs/mapped-types`.
- **Entity**: `Hero` class in `src/heroes/entities/hero.entity.ts` — plain class, not a DB entity. Properties: `id`, `name`, `slug`, `alias`, `powers`, `description`, `strength`, `intelligence`, `speed`, `durability`, `team`, `image`, `firstAppearance`, `status`, `category`, `universe`.
- **Path aliases**: Imports use `src/` prefix paths (e.g. `import { heroesData } from 'src/data/heroes.data'`), resolved by `tsconfig.json` `baseUrl: "./"`.
- **Static assets**: Hero images in `public/images/`, served at root by `ServeStaticModule`.

## Code Style

- Prettier: single quotes, trailing commas (`all`).
- ESLint: `@typescript-eslint/no-explicit-any` is off; `no-floating-promises` and `no-unsafe-argument` are warnings.
- TypeScript: `strictNullChecks` enabled, `noImplicitAny` disabled.
- Compiler uses SWC (`@swc/cli`, `@swc/core`) for faster builds.
