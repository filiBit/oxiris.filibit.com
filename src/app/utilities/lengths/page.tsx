import { CodeBox } from "@/components/code-box";
import { TableOfContent } from "@/components/table-of-content";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Utilities > Lengths | Oxiris CSS",
    description: "Length utilities",
};

export default function Lengths() {
    return (
        <>
            <div className="h-6 border-bottom-1px px-2 row align-center">
                &gt;&nbsp;
                <Link href="/utilities" className="link">
                    Utilities
                </Link>
                &nbsp;&gt; Lengths
            </div>
            <div className="px-3">
                <h1 className="h1 m-0 mt-8 mb-3 text-center">Lengths</h1>

                <TableOfContent
                    items={[
                        { href: "#margin", label: "Margin" },
                        { href: "#border", label: "Border" },
                        { href: "#padding", label: "Padding" },
                        { href: "#width", label: "Width" },
                        { href: "#height", label: "Height" },
                        { href: "#gap", label: "Gap" },
                        { href: "#border-radius", label: "Border radius" },
                    ]}
                />

                <h2 id="margin" className="h2 my-3">
                    Margin
                </h2>
                <div className="p-2 my-3 chroma-bg-2 round-1">
                    n = {"{"} 0, 1, 2, ..., 16 {"}"}
                </div>
                <div className="table-2 my-3">
                    <div className="f-weight-lg chroma-bg-2">Class</div>
                    <div className="f-weight-lg chroma-bg-2">
                        Declaration block
                    </div>

                    <div>m-&lt;n&gt;</div>
                    <div>margin: calc(&lt;n&gt; * var(--ox-base-length));</div>

                    <div>mx-&lt;n&gt;</div>
                    <div>
                        margin-left: calc(&lt;n&gt; * var(--ox-base-length));
                        <br />
                        margin-right: calc(&lt;n&gt; * var(--ox-base-length));
                    </div>

                    <div>my-&lt;n&gt;</div>
                    <div>
                        margin-top: calc(&lt;n&gt; * var(--ox-base-length));
                        <br />
                        margin-bottom: calc(&lt;n&gt; * var(--ox-base-length));
                    </div>
                    <div>mt-&lt;n&gt;</div>
                    <div>
                        margin-top: calc(&lt;n&gt; * var(--ox-base-length));
                    </div>
                    <div>mr-&lt;n&gt;</div>
                    <div>
                        margin-right: calc(&lt;n&gt; * var(--ox-base-length));
                    </div>
                    <div>mb-&lt;n&gt;</div>
                    <div>
                        margin-bottom: calc(&lt;n&gt; * var(--ox-base-length));
                    </div>
                    <div>ml-&lt;n&gt;</div>
                    <div>
                        margin-left: calc(&lt;n&gt; * var(--ox-base-length));
                    </div>
                    <div>mx-auto</div>
                    <div>margin-left: auto; margin-right: auto;</div>
                </div>
                <CodeBox
                    title="Example"
                    className="my-3 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;m-2&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;My margins are 16px
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                    preview={<div className="m-2">My margins are 16px</div>}
                ></CodeBox>
                <h2 id="border" className="h2 mt-8 mb-3">
                    Border
                </h2>
                <div className="p-2 my-3 chroma-bg-2 round-1">
                    n = {"{"} 0, 1, 2 {"}"}
                </div>
                <div className="table-2 my-3">
                    <div className="color-invert">Class</div>
                    <div className="color-invert">Declaration block</div>

                    <div>border-0</div>
                    <div>border: none;</div>

                    <div>border-top-0</div>
                    <div>border-top: none;</div>

                    <div>border-bottom-0</div>
                    <div>border-bottom: none;</div>

                    <div>border-right-0</div>
                    <div>border-right: none;</div>

                    <div>border-left-0</div>
                    <div>border-left: none;</div>

                    <div>border-&lt;n&gt;px</div>
                    <div>border: &lt;n&gt;px solid currentColor;</div>

                    <div>border-top-&lt;n&gt;px</div>
                    <div>border-top: &lt;n&gt;px solid currentColor;</div>

                    <div>border-right-&lt;n&gt;px</div>
                    <div>border-right: &lt;n&gt;px solid currentColor;</div>

                    <div>border-bottom-&lt;n&gt;px</div>
                    <div>border-bottom: &lt;n&gt;px solid currentColor;</div>

                    <div>border-left-&lt;n&gt;px</div>
                    <div>border-left: &lt;n&gt;px solid currentColor;</div>
                </div>

                <CodeBox
                    title="Example"
                    className="my-3 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;m-2 border-1px&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;My borders are 1px thick
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                    preview={
                        <div className="m-2 border-1px">
                            My borders are 1px thick
                        </div>
                    }
                ></CodeBox>

                <h2 id="padding" className="h2 mt-8 mb-3">
                    Padding
                </h2>
                <div className="p-2 my-3 chroma-bg-2 round-1">
                    n = {"{"} 0, 1, 2, ..., 16 {"}"}
                </div>
                <div className="table-2 my-3">
                    <div className="color-invert">Class</div>
                    <div className="color-invert">Declaration block</div>

                    <div>p-&lt;n&gt;</div>
                    <div>padding: calc(&lt;n&gt; * var(--ox-base-length));</div>

                    <div>px-&lt;n&gt;</div>
                    <div>
                        padding-left: calc(&lt;n&gt; * var(--ox-base-length));
                        <br />
                        padding-right: calc(&lt;n&gt; * var(--ox-base-length));
                    </div>

                    <div>py-&lt;n&gt;</div>
                    <div>
                        padding-top: calc(&lt;n&gt; * var(--ox-base-length));
                        <br />
                        padding-bottom: calc(&lt;n&gt; * var(--ox-base-length));
                    </div>
                    <div>pt-&lt;n&gt;</div>
                    <div>
                        padding-top: calc(&lt;n&gt; * var(--ox-base-length));
                    </div>
                    <div>pr-&lt;n&gt;</div>
                    <div>
                        padding-right: calc(&lt;n&gt; * var(--ox-base-length));
                    </div>
                    <div>pb-&lt;n&gt;</div>
                    <div>
                        padding-bottom: calc(&lt;n&gt; * var(--ox-base-length));
                    </div>
                    <div>pl-&lt;n&gt;</div>
                    <div>
                        padding-left: calc(&lt;n&gt; * var(--ox-base-length));
                    </div>
                </div>

                <CodeBox
                    title="Example"
                    className="my-3 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;m-2 border-1px py-1
                            px-2&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;My top and bottom paddings
                            are 8px thick. Left and right ones are 16px thick.
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                    preview={
                        <div className="m-2 border-1px py-1 px-2">
                            My top and bottom paddings are 8px thick. Left and
                            right ones are 16px thick.
                        </div>
                    }
                ></CodeBox>

                <h2 id="width" className="h2 mt-8 mb-3">
                    width
                </h2>
                <div className="p-2 my-3 chroma-bg-2 round-1">
                    n = {"{"} 0, 1, 2, ..., 16 {"}"}
                </div>
                <div className="table-2 my-3">
                    <div className="color-invert">Class</div>
                    <div className="color-invert">Declaration block</div>

                    <div>w-&lt;n&gt;</div>
                    <div>
                        width: calc(&lt;n&gt; * var(--ox-base-length));
                        <br />
                        flex-shrink: 0;
                    </div>
                    <div>w-100%</div>
                    <div>
                        width: 100%;
                        <br />
                        flex-shrink: 0;
                    </div>
                    <div>w-span-&lt;n&gt;</div>
                    <div>
                        width: calc(
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;n&gt;
                        * var(--ox-grid-track-width)
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+
                        &lt;n-1&gt; * var(--ox-grid-line-swidth)
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
                        <br />
                        flex-shrink: 0;
                    </div>

                    <div>min-w-&lt;n&gt;</div>
                    <div>
                        min-width: calc(&lt;n&gt; * var(--ox-base-length));
                    </div>

                    <div>min-w-span-&lt;n&gt;</div>
                    <div>
                        min-width: calc(
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;n&gt;
                        * var(--ox-grid-track-width)
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+
                        &lt;n-1&gt; * var(--ox-grid-line-swidth)
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
                    </div>
                    <div>min-w-100%</div>
                    <div>min-width: 100%;</div>

                    <div>max-w-&lt;n&gt;</div>
                    <div>
                        max-width: calc(&lt;n&gt; * var(--ox-base-length));
                    </div>

                    <div>max-w-span-&lt;n&gt;</div>
                    <div>
                        max-width: calc(
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;n&gt;
                        * var(--ox-grid-track-width)
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+
                        &lt;n-1&gt; * var(--ox-grid-line-swidth)
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
                    </div>

                    <div>max-w-100%</div>
                    <div>max-width: 100%;</div>
                </div>
                <CodeBox
                    title="Example"
                    className="my-3 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;m-2 border-1px py-1 px-2
                            w-span-3&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;I am 96px wide.
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                    preview={
                        <div className="m-2 border-1px py-1 px-2 w-span-3">
                            I span the width of 3 columns, which is 192px.
                        </div>
                    }
                ></CodeBox>

                <h2 id="height" className="h2 mt-8 mb-3">
                    Height
                </h2>
                <div className="p-2 my-3 chroma-bg-2 round-1">
                    n = {"{"} 0, 1, 2, ..., 16 {"}"}
                </div>
                <div className="table-2 my-3">
                    <div className="color-invert">Class</div>
                    <div className="color-invert">Declaration block</div>

                    <div>h-&lt;n&gt;</div>
                    <div>
                        height: calc(&lt;n&gt; * var(--ox-base-length));
                        <br />
                        flex-shrink: 0;
                    </div>
                    <div>h-100%</div>
                    <div>
                        height: 100%;
                        <br />
                        flex-shrink: 0;
                    </div>
                    <div>h-span-&lt;n&gt;</div>
                    <div>
                        height: calc(
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;n&gt;
                        * var(--ox-grid-track-width)
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+
                        &lt;n-1&gt; * var(--ox-grid-line-swidth)
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
                        <br />
                        flex-shrink: 0;
                    </div>

                    <div>min-h-&lt;n&gt;</div>
                    <div>
                        min-height: calc(&lt;n&gt; * var(--ox-base-length));
                    </div>

                    <div>min-h-span-&lt;n&gt;</div>
                    <div>
                        min-height: calc(
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;n&gt;
                        * var(--ox-grid-track-width)
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+
                        &lt;n-1&gt; * var(--ox-grid-line-swidth)
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
                    </div>
                    <div>min-h-100%</div>
                    <div>min-height: 100%;</div>

                    <div>max-h-&lt;n&gt;</div>
                    <div>
                        max-height: calc(&lt;n&gt; * var(--ox-base-length));
                    </div>

                    <div>max-h-span-&lt;n&gt;</div>
                    <div>
                        max-height: calc(
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;n&gt;
                        * var(--ox-grid-track-width)
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+
                        &lt;n-1&gt; * var(--ox-grid-line-swidth)
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
                    </div>

                    <div>max-h-100%</div>
                    <div>max-height: 100%;</div>
                </div>
                <CodeBox
                    title="Example"
                    className="my-3 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;m-2 border-1px py-1 px-2
                            w-span-3 h-span-3&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;I am 96px wide.
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                    preview={
                        <div className="m-2 border-1px py-1 px-2 w-span-3 h-span-3">
                            I span the height of 3 rows, which is 192px.
                        </div>
                    }
                ></CodeBox>

                <h2 id="gap" className="h2 mt-8 mb-3">
                    Gap
                </h2>
                <div className="p-2 my-3 chroma-bg-2 round-1">
                    n = {"{"} 0, 1, 2, ..., 16 {"}"}
                </div>
                <div className="table-2 my-3">
                    <div className="color-invert">Class</div>
                    <div className="color-invert">Declaration block</div>
                    <div>gap-&lt;n&gt;</div>
                    <div>gap: calc(&lt;n&gt; * var(--ox-base-width));</div>
                </div>

                <CodeBox
                    title="Example"
                    className="my-3 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;col lg:row gap-2 m-2&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-2 w-span-3
                            h-span-3&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We&apos;re
                            16px apart.
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-2 w-span-3
                            h-span-3&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We&apos;re
                            16px apart.
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-2 w-span-3
                            h-span-3&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We&apos;re
                            16px apart.
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                    preview={
                        <div className="col lg:row gap-2 m-2">
                            <div className="border-1px p-2 w-span-3 h-span-3">
                                We&apos;re 16px apart.
                            </div>
                            <div className="border-1px p-2 w-span-3 h-span-3">
                                We&apos;re 16px apart.
                            </div>
                            <div className="border-1px p-2 w-span-3 h-span-3">
                                We&apos;re 16px apart.
                            </div>
                        </div>
                    }
                ></CodeBox>

                <h2 id="border-radius" className="h2 mt-8 mb-3">
                    Border radius
                </h2>
                <div className="p-2 my-3 chroma-bg-2 round-1">
                    n = {"{"} 0, 1, 2, ..., 16 {"}"}
                </div>
                <div className="table-2 my-3">
                    <div className="color-invert">Class</div>
                    <div className="color-invert">Declaration block</div>
                    <div>round-&lt;n&gt;</div>
                    <div>
                        border-radius: calc(var(--ox-round-factor) * &lt;n&gt; *
                        var(--ox-base-width));
                    </div>
                </div>

                <CodeBox
                    title="Example"
                    className="mt-3 mb-8 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;m-2 border-1px py-1 px-2
                            w-span-3 h-span-3 round-1&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;My corners have an 8px
                            radius
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                    preview={
                        <div className="m-2 border-1px py-1 px-2 w-span-3 h-span-3 round-1">
                            My corners have an 8px radius
                        </div>
                    }
                ></CodeBox>
            </div>
        </>
    );
}
