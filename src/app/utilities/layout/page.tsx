import { CodeBox } from "@/components/code-box";
import { TableOfContent } from "@/components/table-of-content";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Utilities > Layout | Oxiris CSS",
    description: "Layout utilities",
};

export default function LayoutPage() {
    return (
        <>
            <div className="h-6 border-bottom-1px px-2 row align-center">
                &gt;&nbsp;
                <Link href="/utilities" className="link">
                    Utilities
                </Link>
                &nbsp;&gt; Layout
            </div>
            <div className="px-3">
                <h1 className="h1 m-0 mt-8 mb-3 text-center">Layout</h1>

                <TableOfContent
                    items={[
                        { href: "#flexbox", label: "Flexbox" },
                        { href: "#positioning", label: "Positioning" },
                    ]}
                />

                <h2 id="flexbox" className="h2 my-3">
                    Flexbox
                </h2>
                <div className="table-2 my-3">
                    <div className="f-weight-lg chroma-bg-2">Class</div>
                    <div className="f-weight-lg chroma-bg-2">
                        Declaration block
                    </div>

                    <div>row</div>
                    <div>
                        display: flex;
                        <br />
                        flex-direction: row;
                    </div>

                    <div>col</div>
                    <div>
                        display: flex;
                        <br />
                        flex-direction: column;
                    </div>

                    <div>gap</div>
                    <div>
                        <Link
                            href="/utilities/lengths#gap"
                            className="button h-4 f-size-sm px-1"
                        >
                            See Utilities &gt; Lengths &gt; Gap
                        </Link>
                    </div>

                    <div>align-start</div>
                    <div>align-items: flex-start;</div>

                    <div>align-center</div>
                    <div>align-items: center;</div>

                    <div>align-end</div>
                    <div>align-items: flex-end;</div>

                    <div>justify-start</div>
                    <div>justify-items: flex-start;</div>

                    <div>justify-center</div>
                    <div>justify-items: center;</div>

                    <div>justify-end</div>
                    <div>justify-items: flex-end;</div>

                    <div>align-self-start</div>
                    <div>align-self: flex-start;</div>

                    <div>align-self-center</div>
                    <div>align-self: center;</div>

                    <div>align-self-end</div>
                    <div>align-self: flex-end;</div>

                    <div>justify-self-start</div>
                    <div>justify-self: flex-start;</div>

                    <div>justify-self-center</div>
                    <div>justify-self: center;</div>

                    <div>justify-self-end</div>
                    <div>justify-self: flex-end;</div>

                    <div>grow</div>
                    <div>flex-grow: 1;</div>

                    <div>grow-0</div>
                    <div>flex-grow: 0;</div>

                    <div>shrink</div>
                    <div>flex-shrink: 1;</div>

                    <div>shrink-0</div>
                    <div>flex-shrink: 0;</div>
                </div>
                <CodeBox
                    title="Row example"
                    className="my-3 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;row flex-wrap gap-1 border-1px
                            p-1&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-1 w-span-4&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m
                            in a row whose gap is 8px wide
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-1 w-span-4&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m
                            in a row whose gap is 8px wide
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                    preview={
                        <div className="row flex-wrap gap-1 border-1px p-1 round-2">
                            <div className="gap-1 border-1px p-1 w-span-4 round-1">
                                I&apos;m in a row whose gap is 8px wide
                            </div>
                            <div className="gap-1 border-1px p-1 w-span-4 round-1">
                                I&apos;m in a row whose gap is 8px wide
                            </div>
                        </div>
                    }
                ></CodeBox>
                <CodeBox
                    title="Column example"
                    className="my-3 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;col gap-1 border-1px
                            p-1&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-1 w-span-4&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m
                            in a column whose gap is 8px wide
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-1 w-span-4&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m
                            in a column whose gap is 8px wide
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                    preview={
                        <div className="col gap-1 border-1px p-1 round-2">
                            <div className="border-1px p-1 w-span-4 round-1">
                                I&apos;m in a column whose gap is 8px wide
                            </div>
                            <div className="border-1px p-1 w-span-4 round-1">
                                I&apos;m in a column whose gap is 8px wide
                            </div>
                        </div>
                    }
                ></CodeBox>
                <CodeBox
                    title="Responsive example"
                    className="my-3 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;col md:row gap-1 border-1px
                            p-1&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-1 w-span-4&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m
                            I&apos;m layed out in a row or column, depending on
                            the screen size
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;border-1px p-1 w-span-4&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m
                            I&apos;m layed out in a row or column, depending on
                            the screen size
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                    preview={
                        <div className="col lg:row gap-1 border-1px p-1 round-2">
                            <div className="gap-1 border-1px p-1 w-span-4 round-1">
                                I&apos;m layed out in a row or column, depending
                                on the screen size
                            </div>
                            <div className="gap-1 border-1px p-1 w-span-4 round-1">
                                I&apos;m layed out in a row or column, depending
                                on the screen size
                            </div>
                        </div>
                    }
                ></CodeBox>

                <h2 id="positioning" className="h2 mt-8 mb-3">
                    Positioning
                </h2>
                <div className="table-2 mt-3 mb-8">
                    <div className="f-weight-lg chroma-bg-2">Class</div>
                    <div className="f-weight-lg chroma-bg-2">
                        Declaration block
                    </div>

                    <div>relative</div>
                    <div>position: relative;</div>

                    <div>absolute</div>
                    <div>position: absolute;</div>

                    <div>fixed</div>
                    <div>position: fixed;</div>

                    <div>top</div>
                    <div>top: 0;</div>

                    <div>right</div>
                    <div>right: 0;</div>

                    <div>bottom</div>
                    <div>bottom: 0;</div>

                    <div>left</div>
                    <div>left: 0;</div>
                </div>
            </div>
        </>
    );
}
