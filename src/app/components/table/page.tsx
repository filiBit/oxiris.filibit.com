import { CodeBox } from "@/components/code-box";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Components > Table | Oxiris CSS",
    description: "Table component",
};

export default function TablePage() {
    return (
        <>
            <div className="h-6 border-bottom-1px px-2 row align-center">
                &gt;&nbsp;
                <Link href="/components" className="link">
                    Components
                </Link>
                &nbsp;&gt; Table
            </div>
            <div className="px-3">
                <h1 className="h1 m-0 my-8 text-center">Table</h1>
                <p className="my-3">
                    Render a table by applying the `.table-&lt;n&gt;` class,
                    where `&lt;n&gt;` is a placeholder for specifying the number
                    of columns:
                </p>

                <div className="p-2 my-3 chroma-bg-2 round-1">
                    n = {"{"} 1, 2, ..., 16 {"}"}
                </div>

                <CodeBox
                    open
                    className="mt-3 mb-8 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;table-3&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;f-weight-lg
                            chroma-bg-2&quot;&gt;Classification&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;f-weight-lg
                            chroma-bg-2&quot;&gt;Name&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                            class=&quot;f-weight-lg
                            chroma-bg-2&quot;&gt;Homeworld&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Xenomorph
                            XX121&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Alien&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;-&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;-&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Trilobite&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;LV-223&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Proto-Xenomorph&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Deacon&lt;/div&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;LV-223&lt;/div&gt;
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                    preview={
                        <div className="table-3">
                            <div className="f-weight-lg chroma-bg-2">
                                Classification
                            </div>
                            <div className="f-weight-lg chroma-bg-2">Name</div>
                            <div className="f-weight-lg chroma-bg-2">
                                Homeworld
                            </div>
                            <div>Xenomorph XX121</div>
                            <div>Alien</div>
                            <div>-</div>
                            <div>-</div>
                            <div>Trilobite</div>
                            <div>LV-223</div>
                            <div>Proto-Xenomorph</div>
                            <div>Deacon</div>
                            <div>LV-223</div>
                        </div>
                    }
                ></CodeBox>
            </div>
        </>
    );
}
