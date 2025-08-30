import { PortableTextBlock } from "next-sanity";

export interface Project {
    _id: string;
    title: string;
    slug: string;
    details: string;
    overview: string;
    tools: string[];
    body: PortableTextBlock[];
}