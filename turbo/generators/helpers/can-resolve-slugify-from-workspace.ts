import slugify from "slugify"

export function canResolveSlugifyFromWorkspace(): boolean {
  return slugify("workspace dependency") === "workspace-dependency"
}
