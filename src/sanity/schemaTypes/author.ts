import { UserIcon } from "lucide-react";
import { defineField, defineType, UrlRule } from "sanity";

export const author = defineType({
    name: "author",
    title: "Author",
    type: "document",
    icon: UserIcon,
    fields: [
        defineField({
            name: "id",
            type: "number",
        }),
        defineField({
            name: "name",
            type: "string",
            title: "Name",
            description: "Name of the author",
        }),
        defineField({
            name: "username",
            type: "string",
            title: "Username",
            description: "Username of the author",
        }),
        defineField({
            name: "email",
            type: "string",
            title: "Email",
            description: "Email of the author",
        }),
        defineField({
            name: "image",
            type: "url",
            title: "Image",
            description: "Image of the author",
            validation: (Rule: UrlRule) =>
                Rule.required(),
        }),
        defineField({
            name: "bio",
            type: "text",
            title: "Bio",
            description: "Bio of the author",
        }),
    ],
    preview: {
        select: {
            title: "name",
        },
    },
})