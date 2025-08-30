export const projectsQuery = `*[_type == "project"]{
    _id,
    title,
    slug,
    details,
    overview,
    tools,
    body,
}`;