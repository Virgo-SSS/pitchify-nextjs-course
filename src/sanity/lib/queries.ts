import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`*[_type=="startup"] {
  author -> {
    _id,
    name
  },
  title,
  tags, 
  description,
  image,
  createdAt,
  _id
}`
);