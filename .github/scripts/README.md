# Mirror script

`.github/scripts/mirror-from-langsmith-sdk.sh` used to copy `langsmith-sdk/js` onto the staging repo. JavaScript SDK changes are made in `sdks/javascript` in langchainplus and exported to `langsmith-javascript`. Do not dispatch the mirror or seal workflows.

## Formatting

Prettier formats handwritten and generated code. `.prettierrc.json` retains the
80-column, double-quote override for `src/lib/`; the version comes from `pnpm-lock.yaml`.

Run `scripts/format` locally. `scripts/lint` checks formatting without changing files.
