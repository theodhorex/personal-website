import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project / Case Study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "index",
      title: "Index (e.g. 01, 02)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),
    defineField({
      name: "meta",
      title: "Meta / Key Tags",
      type: "string",
      description: "e.g. EVM · Wagmi / Viem · Solidity · Zero-Slippage Routing",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      initialValue: "2026",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "e.g. WEB3 & DEFI PROTOCOLS, HIGH-PERFORMANCE WEB",
    }),
    defineField({
      name: "client",
      title: "Client / Organization",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Executive Summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "constraint",
      title: "Constraints & Challenges",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "decisions",
      title: "Architectural Decisions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Decision Title", type: "string" }),
            defineField({ name: "body", title: "Explanation", type: "text", rows: 2 }),
          ],
        },
      ],
    }),
    defineField({
      name: "outcomes",
      title: "Quantified Outcomes & Metrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Metric Value (e.g. <25ms, 99.9%)", type: "string" }),
            defineField({ name: "label", title: "Metric Label", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "tech",
      title: "Technologies & Tooling",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub Repository URL",
      type: "url",
    }),
    defineField({
      name: "liveUrl",
      title: "Live Deployment URL",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      index: "index",
    },
    prepare({ title, subtitle, index }) {
      return {
        title: `${index ? `[${index}] ` : ""}${title}`,
        subtitle: subtitle || "Project",
      };
    },
  },
});
