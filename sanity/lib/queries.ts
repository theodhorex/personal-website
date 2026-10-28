import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "project"] | order(order asc, index asc) {
  "id": _id,
  index,
  title,
  meta,
  year,
  category,
  client,
  role,
  summary,
  constraint,
  decisions,
  outcomes,
  tech,
  githubUrl,
  liveUrl
}`;
