import { defineField, defineType, StringRule, UrlRule } from "sanity";

export const startup = defineType({
    name: "startup",
    title: "Startup",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            description: "Name of the startup",
            validation: (Rule: StringRule) => 
                Rule.required().min(5).max(100).warning("Title should be between 5 and 100 characters"),
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Description",
            description: "Description of the startup",
        }),
        defineField({
            name: "image",
            type: "url",
            title: "Image",
            description: "Image of the startup",
            validation: (Rule: UrlRule) =>
                Rule.required(),
        }),
        defineField({
            name: "createdAt",
            type: "datetime",
            title: "Created At",
            description: "Date when the startup was created",
        }),
        defineField({
            name: "author",
            type: "reference",
            to: [{ type: "author" }],
            title: "Author",
            description: "Author of the startup",
        }),
        defineField({
            name: "tags",
            type: "array",
            title: "Tags",
            description: "Tags related to the startup",
            of: [{ type: "string" }],
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
    },
})