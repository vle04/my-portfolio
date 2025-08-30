import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "./image";

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value).width(800).url()}
        alt={value.alt || "sanity image"}
        width={800}
        height={800}
        className="rounded"
      />
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-8">{children}</ul>,
    number: ({ children }) => <ul className="list-decimal ml-8">{children}</ul>,
  },
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    normal: ({ children }) => <p>{children}</p>,
  },
};
