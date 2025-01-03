import { CodeBox } from "@/components/code-box";
import { TableOfContent } from "@/components/table-of-content";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Utilities > Colors | Oxiris CSS",
    description: "Color palettes",
};

export default function ColorsPage() {
    return (
        <>
            <div className="h-6 border-bottom-1px px-2 row align-center">
                &gt;&nbsp;
                <Link href="/utilities" className="link">
                    Utilities
                </Link>
                &nbsp;&gt; Colors
            </div>
            <div className="px-3">
                <h1 className="h1 m-0 mt-8 mb-3 text-center">Colors</h1>

                <TableOfContent
                    items={[
                        { href: "#color-scheme", label: "Color scheme" },
                        { href: "#hue", label: "Hue" },
                        { href: "#chroma", label: "Chroma" },
                        { href: "#functions", label: "Functions" },
                    ]}
                />

                <h2 id="color-scheme" className="h2 m-0 mt-8 mb-3 text-center">
                    Color scheme
                </h2>
                <p className="my3">
                    There are two color schemes available: dark and light. They
                    are toggled by the corresponding classes
                </p>
                <div className="table-2 my-3">
                    <div className="f-weight-lg chroma-bg-2">Class</div>
                    <div className="f-weight-lg chroma-bg-2">Effect</div>

                    <div>dark</div>
                    <div>
                        Applies the dark color palette to an element and its
                        children
                    </div>

                    <div>light</div>
                    <div>
                        Applies the light color palette to an element and its
                        children
                    </div>
                </div>

                <h2 id="hue" className="h2 mt-8 mb-3">
                    Hue
                </h2>
                <div className="p-2 my-3 chroma-bg-2 round-1">
                    name = {"{"} neutral, a, b, c, d {"}"}
                </div>
                <div className="table-2 my-3">
                    <div className="f-weight-lg chroma-bg-2">Class</div>
                    <div className="f-weight-lg chroma-bg-2">
                        Declaration block
                    </div>

                    <div>hue-&lt;name&gt;</div>
                    <div>
                        color: var(--ox-&lt;name&gt;-1);
                        <br />
                        --ox-color-1: var(--ox-&lt;name&gt;-1);
                        <br />
                        --ox-color-2: var(--ox-&lt;name&gt;-2);
                        <br />
                        --ox-color-3: var(--ox-&lt;name&gt;-3);
                        <br />
                        --ox-fg: var(--ox-&lt;name&gt;-1);
                        <br />
                        --ox-bg: var(--ox-background);
                    </div>
                </div>
                <CodeBox
                    title="Row example"
                    className="my-3 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;row flex-wrap gap-1 border-1px
                            p-1 round-2&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-1 w-span-3 round-1
                            hue-neutral&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My
                            hue context is &quot;neutral&quot;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-1 w-span-3 round-1
                            hue-a&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My
                            hue context is &quot;a&quot;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-1 w-span-3 round-1
                            hue-b&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My
                            hue context is &quot;b&quot;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-1 w-span-3 round-1
                            hue-c&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My
                            hue context is &quot;c&quot;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-1 w-span-3 round-1
                            hue-d&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; My
                            hue context is &quot;d&quot;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                    preview={
                        <div className="row flex-wrap gap-1 border-1px p-1 round-2">
                            <div className="border-1px p-1 w-span-3 round-1 hue-neutral">
                                My hue context is &quot;neutra&quot;l
                            </div>
                            <div className="border-1px p-1 w-span-3 round-1 hue-a">
                                My hue context is &quot;&quot;a
                            </div>
                            <div className="border-1px p-1 w-span-3 round-1 hue-b">
                                My hue context is &quot;b&quot;
                            </div>
                            <div className="border-1px p-1 w-span-3 round-1 hue-c">
                                My hue context is &quot;c&quot;
                            </div>
                            <div className="border-1px p-1 w-span-3 round-1 hue-d">
                                My hue context is &quot;d&quot;
                            </div>
                        </div>
                    }
                ></CodeBox>

                <h2 id="chroma" className="h2 mt-8 mb-3">
                    Chroma
                </h2>
                <div className="p-2 my-3 chroma-bg-2 round-1">
                    name = {"{"} 0, 1, 2, 3 {"}"}
                </div>
                <div className="table-2 my-3">
                    <div className="f-weight-lg chroma-bg-2">Class</div>
                    <div className="f-weight-lg chroma-bg-2">
                        Declaration block
                    </div>

                    <div>chroma-fg-&lt;name&gt;</div>
                    <div>
                        color: var(--ox-color-&lt;name&gt;);
                        <br />
                        --ox-fg: var(--ox-color-&lt;name&gt;);
                    </div>

                    <div>chroma-bg-&lt;name&gt;</div>
                    <div>
                        background: var(--ox-color-&lt;name&gt;);
                        <br />
                        --ox-bg: var(--ox-color-&lt;name&gt;);
                    </div>
                </div>
                <CodeBox
                    title="Row example"
                    className="my-3 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;row flex-wrap gap-1 border-1px
                            p-1 round-2&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-1 w-span-3 round-1
                            hue-neutral chroma-bg-2&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My
                            background color is chroma 2
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-1 w-span-3 round-1 hue-a
                            chroma-bg-2&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My
                            background color is chroma 2
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-1 w-span-3 round-1 hue-b
                            chroma-bg-2&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My
                            background color is chroma 2
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-1 w-span-3 round-1 hue-c
                            chroma-bg-2&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My
                            background color is chroma 2
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-1 w-span-3 round-1 hue-d
                            chroma-bg-2&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My
                            background color is chroma 2
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                    preview={
                        <div className="row flex-wrap gap-1 border-1px p-1 round-2">
                            <div className="border-1px p-1 w-span-3 round-1 hue-neutral chroma-bg-2">
                                My background color is chroma 2
                            </div>
                            <div className="border-1px p-1 w-span-3 round-1 hue-a chroma-bg-2">
                                My background color is chroma 2
                            </div>
                            <div className="border-1px p-1 w-span-3 round-1 hue-b chroma-bg-2">
                                My background color is chroma 2
                            </div>
                            <div className="border-1px p-1 w-span-3 round-1 hue-c chroma-bg-2">
                                My background color is chroma 2
                            </div>
                            <div className="border-1px p-1 w-span-3 round-1 hue-d chroma-bg-2">
                                My background color is chroma 2
                            </div>
                        </div>
                    }
                ></CodeBox>

                <h2 id="functions" className="h2 m-0 mt-8 mb-3">
                    Functions
                </h2>
                <div className="table-2 mt-3 mb-8">
                    <div className="f-weight-lg chroma-bg-2">Class</div>
                    <div className="f-weight-lg chroma-bg-2">Effect</div>

                    <div>color-invert</div>
                    <div>Switches foreground and background colors</div>

                    <div>color-revert</div>
                    <div>
                        Undos the switch of foreground and background colors
                    </div>
                </div>
            </div>
        </>
    );
}
