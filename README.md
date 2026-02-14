# turbo-gen-bug-20250214

@turbo/gen version 2.8.8 broke the ability to import @inquirer/prompts in config.ts

To repro, run:

```sh
bunx @turbo/gen@2.8.7 # works
bunx @turbo/gen@2.8.8 # doesn't work
```

Here's the error I get on 2.8.8:

```
$ bunx @turbo/gen@2.8.8

>>> Modify "turbo-gen-bug-20250214" using custom generators

>>> ResolveMessage: Cannot find module '@inquirer/prompts' from '/Users/jh/src/turbo-gen-bug-20250214/turbo/generators/config.ts'
>>> No generators found.

? Would you like to add a config with a sample custom generator to turbo-gen-bug-20250214? (Y/n)
```
