/* eslint-disable react/jsx-no-comment-textnodes */
import { CodeBox } from "@/components/code-box";
import { TableOfContent } from "@/components/table-of-content";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Customization | Oxiris CSS",
    description: "Guide for customizing the framework",
};

export default function Environment() {
    return (
        <>
            <div className="h-6 border-bottom-1px px-2 row align-center">
                &gt; Customization
            </div>
            <div className="px-3">
                <h1 className="h1 m-0 my-8 text-center">Customization</h1>
                <p className="my-8">
                    The framework can be customized by editing the values of
                    some CSS variables (custom properties) defined in the
                    distribution file. They are located at the top making them
                    easily accessible.
                </p>
                <TableOfContent
                    items={[
                        { href: "#lengths", label: "Lengths" },
                        { href: "#rounded-corners", label: "Rounded corners" },
                        { href: "#font", label: "Font" },
                        { href: "#color-palette", label: "Color palette" },
                    ]}
                />
                <h2 id="lengths" className="h2 mb-3 mt-8">
                    Lengths
                </h2>
                <p className="my-3">
                    To update the base length used throughout utility and
                    component classes, update the value of the following CSS
                    custom property located near the top of the distribution
                    file.
                </p>
                <CodeBox
                    className="hue-b"
                    title="CSS"
                    code="--ox-base-length: 8px;"
                />
                <h2 id="rounded-corners" className="h2 mt-8 mb-3">
                    Rounded corners
                </h2>
                <p className="my-3">
                    Border radius has a global factor that can adjust rounded
                    corners, even turn them off completely. You can do so by
                    updating the value of the following CSS custom property near
                    the top of the distribution file.
                </p>
                <CodeBox
                    className="hue-b"
                    title="CSS"
                    code="--ox-round-factor: 1;"
                />
                <h2 id="font" className="h2 mt-8 mb-3">
                    Font
                </h2>
                <p className="my-3">
                    The following CSS custom properties control font size and
                    font weight of utility and component classes. Update their
                    values to customize.
                </p>
                <CodeBox
                    className="hue-b"
                    title="CSS"
                    code={
                        <>
                            html {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;font-size: 0.625rem;
                            <br />
                            {"}"}
                            <br />
                            <br />
                            body {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;font-size: 1.8rem;
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;--ox-f-size-sm: 1.6rem;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;--ox-f-size-md: 1.8rem;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;--ox-f-size-lg: 2.2rem;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;--ox-f-size-xl: 2.6rem;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;--ox-f-size-2xl: 3.2rem;
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;--ox-f-weight-sm: 400;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;--ox-f-weight-md: 400;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;--ox-f-weight-lg: 500;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;--ox-f-weight-xl: 600;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;--ox-f-weight-2xl: 700;
                            <br />
                            {"}"}
                        </>
                    }
                />

                <h2 id="color-palette" className="h2 mt-8 mb-3">
                    Color palette
                </h2>
                <p className="my-3">
                    Hues and corresponding chromas can be customized for both:
                    dark and light color schemes.
                </p>

                <CodeBox
                    className="mt-3 mb-8 hue-b"
                    title="CSS"
                    code={
                        <>
                            /* Dark color scheme */
                            <br />
                            @media (prefers-color-scheme: dark) {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;body {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color-scheme:
                            dark;
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ox-neutral-1:
                            oklch(78% 0 0);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ox-neutral-2:
                            oklch(20% 0 0);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ox-neutral-3:
                            oklch(16% 0 0);
                            <br />
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ox-a-1:
                            oklch(78% 0.09 224);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ox-a-2:
                            oklch(20% 0.02 224);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ox-a-3:
                            oklch(16% 0.015 224);
                            <br />
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ox-b-1:
                            oklch(78% 0.09 108);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ox-b-2:
                            oklch(20% 0.02 108);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ox-b-3:
                            oklch(16% 0.015 108);
                            <br />
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ox-c-1:
                            oklch(78% 0.09 347);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ox-c-2:
                            oklch(20% 0.02 348);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ox-c-3:
                            oklch(16% 0.015 348);
                            <br />
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ox-d-1:
                            oklch(78% 0.09 160);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ox-d-2:
                            oklch(20% 0.02 160);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ox-d-3:
                            oklch(16% 0.015 160);
                            <br />
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ox-background:
                            oklch(0% 0 0);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                            <br />
                            {"}"}
                            <br />
                            <br />
                            /* Light color scheme */
                            <br />
                            @media (prefers-color-scheme: light) {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;body {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            color-scheme: light;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            --ox-neutral-1: oklch(30% 0 0);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            --ox-neutral-2: oklch(88% 0 0);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            --ox-neutral-3: oklch(93% 0 0);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            --ox-a-1: oklch(30% 0.09 224);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            --ox-a-2: oklch(88% 0.035 224);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            --ox-a-3: oklch(93% 0.02 224);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            --ox-b-1: oklch(30% 0.09 108);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            --ox-b-2: oklch(88% 0.035 108);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            --ox-b-3: oklch(93% 0.02 108);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            --ox-c-1: oklch(30% 0.15 347);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            --ox-c-2: oklch(88% 0.035 347);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            --ox-c-3: oklch(93% 0.02 347);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            --ox-d-1: oklch(30% 0.09 160);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            --ox-d-2: oklch(88% 0.035 160);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            --ox-d-3: oklch(93% 0.02 160);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            --ox-background: oklch(100% 0 0);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                            <br />
                            {"}"}
                        </>
                    }
                />
            </div>
        </>
    );
}
