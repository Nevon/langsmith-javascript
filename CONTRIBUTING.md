# Contributing

JavaScript SDK changes are made in `sdks/javascript` in langchainplus and exported to `langsmith-javascript`. Release-please cuts the release there.

## Set up the environment

This repository uses [pnpm](https://pnpm.io/). Other package managers are not officially supported. Install dependencies and build the SDK with:

```sh
pnpm install
pnpm build
```

## Make changes

Most of the SDK is generated from the LangSmith API definition by Stainless. Do not edit generated files directly. From the langchainplus root, run `./langdev sdks gen javascript` after changing `smith-backend/static/openapi.json` or `smith-sdks/stainless/stainless.yml`, and commit this directory with `smith-sdks/stainless/patches/javascript.files` and `javascript.patch`.

Handwritten code belongs in `src/lib/` or `examples/`. Files that are not listed in `javascript.files` are left alone by generation. Changes to generated API behavior should be made in the source API definition or Stainless configuration, with help from an SDK maintainer.

## Add or run an example

Add an example under `examples/`, for example `examples/my_example.ts`:

```ts
#!/usr/bin/env -S pnpm tsn -T

import { Client } from 'langsmith';

const client = new Client();
```

Run it with:

```sh
chmod +x examples/my_example.ts
pnpm tsn -T examples/my_example.ts
```

Examples call the configured LangSmith API, so set the endpoint and credentials for the environment you want to use.

## Use a local build

Link this checkout globally:

```sh
pnpm link --global
```

Then link it in the project where you want to try the SDK:

```sh
pnpm link --global langsmith
```

To install directly from the public production repository, use:

```sh
pnpm add git+ssh://git@github.com/langchain-ai/langsmith-javascript.git
```

## Run checks

Run tests, lint, and formatting with:

```sh
pnpm test
pnpm lint
pnpm fix
```

## Open a pull request

External contributors should open an issue on `langsmith-javascript`. That repository's main branch only accepts the Copybara export pull request and the release-please pull request, so an SDK change is a pull request in langchainplus that edits `sdks/javascript`.

After that pull request merges, merge the `[EXPORT] sdks/javascript` pull request on `langsmith-javascript` with a merge commit. Do not hand-edit the version in `package.json`, `src/version.ts`, `README.md`, `CHANGELOG.md`, or `.release-please-manifest.json`. Release-please writes those on `langsmith-javascript`, and the export leaves them there.
