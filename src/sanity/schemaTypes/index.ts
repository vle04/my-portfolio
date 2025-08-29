import { type SchemaTypeDefinition } from "sanity";
import { project } from "./project";
import blockContent from "./blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, blockContent],
};
