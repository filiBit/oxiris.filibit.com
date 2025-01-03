import { CodeBox } from "@/components/code-box";
import { TableOfContent } from "@/components/table-of-content";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Components > Other | Oxiris CSS",
    description: "Other components",
};

export default function OtherComponentsPage() {
    return (
        <>
            <div className="h-6 border-bottom-1px px-2 row align-center">
                &gt;&nbsp;
                <Link href="/components" className="link">
                    Components
                </Link>
                &nbsp;&gt; Other
            </div>
            <div className="px-3">
                <h1 className="h1 m-0 my-8 text-center">Other components</h1>
                <TableOfContent
                    items={[{ label: "Headings", href: "#headings" }]}
                />
                <h2 id="headings" className="h2 mt-8 mb-3">
                    Headings
                </h2>
                <CodeBox
                    open
                    className="mt-8 mb-3 hue-b"
                    code={
                        <>
                            &lt;h1 class=&quot;h1 my-3&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Level 1
                            <br />
                            &lt;/h1&gt;
                            <br />
                            &lt;h2 class=&quot;h2 my-3&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Level 2
                            <br />
                            &lt;/h2&gt;
                            <br />
                            &lt;h3 class=&quot;h3 my-3&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Level 3
                            <br />
                            &lt;/h3&gt;
                            <br />
                        </>
                    }
                    preview={
                        <>
                            <h1 className="h1 my-3">Level 1</h1>
                            <h2 className="h2 my-3">Level 2</h2>
                            <h3 className="h3 my-3">Level 3</h3>{" "}
                        </>
                    }
                ></CodeBox>

                <h2 id="link" className="h2 mt-8 mb-3">
                    Link
                </h2>
                <CodeBox
                    open
                    className="mt-3 mb-8 hue-b"
                    code={
                        <>
                            &lt;a class=&quot;link&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Hover me
                            <br />
                            &lt;/a&gt;
                        </>
                    }
                    preview={
                        <div className="row">
                            <a className="link">Hover me</a>
                        </div>
                    }
                ></CodeBox>
            </div>
        </>
    );
}
