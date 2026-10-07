import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schemaTypes";
import { dataset, projectId } from "./sanity/env";

export default defineConfig({
  basePath: "/studio",
  name: "theodhore-portfolio",
  title: "Theodhore Studio",
  projectId: projectId || "development",
  dataset: dataset || "production",
  schema,
  plugins: [structureTool()],
});
