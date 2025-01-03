import { CodeBox } from "@/components/code-box";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Components > Button | Oxiris CSS",
    description: "Button component",
};

export default function ButtonPage() {
    return (
        <>
            <div className="h-6 border-bottom-1px px-2 row align-center">
                &gt;&nbsp;
                <Link href="/components" className="link">
                    Components
                </Link>
                &nbsp;&gt; Button
            </div>
            <div className="px-3">
                <h1 className="h1 m-0 mt-8 mb-3 text-center">Button</h1>

                <div className="mt-3 mb-8 border-1px max-w-span-4 overflow-no round-1">
                    <div className="py-1 px-2 chroma-bg-2">Contents</div>
                    <div className="col gap py-1 px-2 lh-2">
                        <Link href="#default" className="link">
                            &gt; Default
                        </Link>
                        <Link href="#variations" className="link">
                            &gt; Variations
                        </Link>
                    </div>
                </div>

                <h2 id="default" className="h2 mt-8 mb-3">
                    Default (Outlined)
                </h2>
                <CodeBox
                    className="my-3 hue-b"
                    open
                    code={
                        <>
                            &lt;button class=&quot;button&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;I&apos;m the button
                            <br />
                            &lt;/button&gt;
                        </>
                    }
                    preview={
                        <button className="button">I&apos;m the button</button>
                    }
                ></CodeBox>
                <h2 id="variations" className="h2 mt-8 mb-3">
                    Variations
                </h2>
                <CodeBox
                    open
                    className="mt-3 mb-8 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;row flex-wrap gap-1&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                            class=&quot;button var-indicator&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m
                            the button
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                            class=&quot;button var-indicator-filled&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m
                            the button
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                            class=&quot;button var-contained&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m
                            the button
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                            class=&quot;button var-contained
                            var-indicator&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m
                            the button
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                            class=&quot;button var-contained
                            var-indicator-filled&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m
                            the button
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                    preview={
                        <div className="row flex-wrap gap-1">
                            <button className="button var-indicator">
                                I&apos;m the button
                            </button>
                            <button className="button var-indicator-filled">
                                I&apos;m the button
                            </button>
                            <button className="button var-contained">
                                I&apos;m the button
                            </button>
                            <button className="button var-contained var-indicator">
                                I&apos;m the button
                            </button>
                            <button className="button var-contained var-indicator-filled">
                                I&apos;m the button
                            </button>
                        </div>
                    }
                ></CodeBox>
            </div>
        </>
    );
}
