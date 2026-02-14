import type { PlopTypes } from "@turbo/gen"
import { input } from "@inquirer/prompts"

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("example", {
    description:
      "An example Turborepo generator - creates a new file at the root of the project",
    prompts: async () => {
      const name = await input({
        message: "What is the name of the new file to create?",
      })

      return { name }
    },
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/{{ dashCase name }}.ts",
        templateFile: "templates/turborepo-generators.hbs",
      },
    ],
  })
}
