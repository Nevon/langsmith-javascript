# Instructions for code modifications in the JS/TS SDK

The JavaScript SDK source in langchainplus is `sdks/javascript`. Edit it here. A merge to main that changes this directory adds a commit to the `[EXPORT] sdks/javascript` pull request on `langsmith-javascript`. Merge that pull request with a merge commit.

This tree holds the hand-written client (tracing, run trees, evaluation, sandbox, wrappers, jest/vitest helpers) in `src/lib/`, on top of the Stainless-generated REST client in `src/`.

## External contributor PRs

`langsmith-javascript` main only accepts the Copybara export pull request and the release-please pull request. An SDK change is a pull request in langchainplus that edits `sdks/javascript`.

Do not authorize GitHub Actions on external contributors' pull requests. Review before pushing, cherry-pick reviewed commits onto an internal branch, preserve contributor authorship, and open the replacement pull request in langchainplus.

## Before opening a PR

Run from `sdks/javascript`:

```
pnpm format
pnpm lint
pnpm test
```

`pnpm test` runs two jest projects: `stainless` (generated SDK) and `lib` (hand-written SDK, ESM). To run one hand-written test file:

```bash
NODE_OPTIONS=--experimental-vm-modules npx jest --selectProjects lib src/lib/tests/context.test.ts
```

Integration tests (`pnpm test:integration`) and vitest suites (`pnpm test:vitest`, `pnpm test:eval:vitest`) need API keys and run in CI. Prefer CI over local runs when in doubt: shell or direnv `LANGSMITH_*` variables and `~/.langsmith` config leak in and cause spurious local failures.

## Generated files

Files whose first line carries `File generated from our OpenAPI spec by Stainless.` are generated. Do not edit them by hand. Change `smith-backend/static/openapi.json` or `smith-sdks/stainless/stainless.yml`, then from the langchainplus root run `./langdev sdks gen javascript` and commit `sdks/javascript` with `smith-sdks/stainless/patches/javascript.files` and `javascript.patch`. The `check sdk` job fails unless this directory is the generator output plus that patch.

Files that are not listed in `javascript.files` are hand-written. `langdev sdks gen` does not touch them. Hand-written client code lives in `src/lib/`.

Entry points such as `langsmith/traceable` or `langsmith/wrappers/openai` are one-line shims at `src/<entry>.ts` pointing into `src/lib/`. Add a shim and a `package.json` `exports` entry when adding a new public entry point. Copybara excludes the whole `package.json`, so that `exports` change also has to be made on `langsmith-javascript` with the `skip-pr-source-check` label, and the same change has to land here before the next export.

## Releasing

Releases are cut by release-please from conventional commits on `langsmith-javascript` main, after the export pull request is merged with a merge commit. Do not hand-edit `package.json`, `src/version.ts`, `README.md`, `CHANGELOG.md`, or `.release-please-manifest.json` to bump the version. The export leaves those files on `langsmith-javascript`. Do not push tags.

## Conventions

### Constructing request URLs

Do not hardcode a leading `/v1` (or other `apiUrl`-dependent prefix) into request
paths. `LANGSMITH_ENDPOINT` may already include `/api/v1`, so a hardcoded `/v1/...`
produces a duplicated `/api/v1/v1/...` path and 404s.

For platform endpoints, build the path with the existing `_getPlatformEndpointPath`
helper, which only adds the `/v1` prefix when the configured `apiUrl` does not
already end in `/v1`:

```ts
`${this.apiUrl}${this._getPlatformEndpointPath(`hub/repos/${owner}/${name}/directories`)}`;
```

When adding a new platform endpoint, follow the same pattern instead of inlining
`/v1/platform/...`.
