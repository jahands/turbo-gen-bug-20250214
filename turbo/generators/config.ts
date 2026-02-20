import type { PlopTypes } from "@turbo/gen";
import { canResolveSlugifyFromWorkspace } from "./helpers/can-resolve-slugify-from-workspace";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  const description = canResolveSlugifyFromWorkspace()
    ? "Workspace dependency resolved from turbo/generators"
    : "Workspace dependency missing";

  plop.setGenerator("example", {
    description,
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the new file to create?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/{{ dashCase name }}.ts",
        templateFile: "templates/turborepo-generators.hbs",
      },
    ],
  });
}
