import { defineType, defineField } from "sanity";
import blockContent from "./blockContent";

export const project = defineType({
  name: "project", // how sanity refers to schema internally
  title: "Project", // how it shows up in studio
  type: "document", // top-level content type
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "details",
      title: "Additional Details",
      type: "string",
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
    }),
    defineField({
      name: "tools",
      title: "Tools",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
});
