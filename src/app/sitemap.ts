import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://oxiris.filibit.com",
            lastModified: new Date(),
        },
        {
            url: "https://oxiris.filibit.com/concept",
            lastModified: new Date(),
        },
        {
            url: "https://oxiris.filibit.com/installation",
            lastModified: new Date(),
        },
        {
            url: "https://oxiris.filibit.com/utilities",
            lastModified: new Date(),
        },
        {
            url: "https://oxiris.filibit.com/utilities/lengths",
            lastModified: new Date(),
        },
        {
            url: "https://oxiris.filibit.com/utilities/layout",
            lastModified: new Date(),
        },
        {
            url: "https://oxiris.filibit.com/utilities/colors",
            lastModified: new Date(),
        },
        {
            url: "https://oxiris.filibit.com/utilities/other",
            lastModified: new Date(),
        },
        {
            url: "https://oxiris.filibit.com/components",
            lastModified: new Date(),
        },
        {
            url: "https://oxiris.filibit.com/components/button",
            lastModified: new Date(),
        },
        {
            url: "https://oxiris.filibit.com/components/table",
            lastModified: new Date(),
        },
        {
            url: "https://oxiris.filibit.com/components/other",
            lastModified: new Date(),
        },
        {
            url: "https://oxiris.filibit.com/modifiers",
            lastModified: new Date(),
        },
        {
            url: "https://oxiris.filibit.com/customization",
            lastModified: new Date(),
        },
        {
            url: "https://oxiris.filibit.com/production",
            lastModified: new Date(),
        },
    ];
}
