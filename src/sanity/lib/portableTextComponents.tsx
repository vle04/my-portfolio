import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "./image";

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value)
          .width(800)
          .fit("max")
          .auto("format")
          .quality(90)
          .url()}
        alt={value.alt || "sanity image"}
        width={800}
        height={800}
        className="rounded my-4"
      />
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-8">{children}</ul>,
    number: ({ children }) => <ul className="list-decimal ml-8">{children}</ul>,
  },
  block: {
    h2: ({ children }) => <h4 className="">{children}</h4>,
    normal: ({ children }) => <p>{children}</p>,
  },
  marks: {
    link: ({ children, value }) => (
        <a href={value.href} className="underline hover:text-gray-300">{children}</a>
    ),
  },
};
