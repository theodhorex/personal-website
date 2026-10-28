import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
    })
  : null;
