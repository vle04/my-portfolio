// determines what kinds of blocks are allowed
import { defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",

      // define styles, lists, marks, etc
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }, { title: "number", value: "number"}],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline"},
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "URL",
            fields: [{ name: "href", type: "url", title: "URL" }],
          },
        ],
      },
    }),

    // allow images inside Portable Text
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
