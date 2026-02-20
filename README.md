# turbo-gen-bug-20250214

The original `@inquirer/prompts` regression from 2.8.8 was fixed.

This repo now reproduces a different issue in a pnpm workspace layout:

- `turbo/generators/config.ts` imports a local helper
- that helper imports `slugify`
- `slugify` is declared only in `turbo/generators/package.json`

`turbo gen` fails to resolve that workspace-local dependency.

## Repro

```sh
pnpm install
turbo gen
```

Expected: generator list appears.

Actual:

```
>>> Modify "turbo-gen-bug-20250214" using custom generators

>>> ResolveMessage: Cannot find package 'slugify' from '/Users/jh/src/turbo-gen-bug-20250214/turbo/generators/helpers/can-resolve-slugify-from-workspace.ts'
>>> No generators found.
```
