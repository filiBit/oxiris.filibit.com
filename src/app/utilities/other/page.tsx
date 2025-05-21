import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Utilities > Other | Oxiris CSS",
    description: "Other utilities",
};

export default function OtherUtilitiesPage() {
    return (
        <>
            <div className="h-6 border-bottom-1px px-2 row align-center">
                &gt;&nbsp;
                <Link href="/utilities" className="link">
                    Utilities
                </Link>
                &nbsp;&gt; Other
            </div>
            <div className="px-3">
                <h1 className="h1 m-0 my-8 text-center">Other</h1>

                <div className="table-2 my-8">
                    <div className="f-weight-lg chroma-bg-2">Class</div>
                    <div className="f-weight-lg chroma-bg-2">
                        Declaration block
                    </div>

                    <div>hide</div>
                    <div>display: none;</div>

                    <div>text-left</div>
                    <div>text-align: left;</div>

                    <div>text-center</div>
                    <div>text-align: center;</div>

                    <div>text-right</div>
                    <div>text-align: right;</div>

                    <div>lh-1.3</div>
                    <div>line-height: 1.3;</div>

                    <div>lh-1.5</div>
                    <div>line-height: 1.5;</div>

                    <div>lh-2</div>
                    <div>line-height: 2;</div>

                    <div>border-box</div>
                    <div>box-sizing: border-box;</div>

                    <div>content-box</div>
                    <div>box-sizing: content-box;</div>

                    <div>letter-0.05em</div>
                    <div>letter-spacing: 0.05em;</div>

                    <div>letter-0.1em</div>
                    <div>letter-spacing: 0.1em;</div>

                    <div>letter-0.15em</div>
                    <div>letter-spacing: 0.15em;</div>

                    <div>letter-0.2em</div>
                    <div>letter-spacing: 0.2em;</div>

                    <div>f-size-sm</div>
                    <div>font-size: var(--ox-f-size-sm);</div>

                    <div>f-size-md</div>
                    <div>font-size: var(--ox-f-size-md);</div>

                    <div>f-size-lg</div>
                    <div>font-size: var(--ox-f-size-lg);</div>

                    <div>f-size-xl</div>
                    <div>font-weight: var(--ox-f-size-xl);</div>

                    <div>f-weight-sm</div>
                    <div>font-weight: var(--ox-f-weight-sm);</div>

                    <div>f-weight-md</div>
                    <div>font-weight: var(--ox-f-weight-md);</div>

                    <div>f-weight-lg</div>
                    <div>font-weight: var(--ox-f-weight-lg);</div>

                    <div>f-weight-xl</div>
                    <div>font-weight: var(--ox-f-weight-xl);</div>

                    <div>break-all</div>
                    <div>word-break: break-all;</div>

                    <div>select-auto</div>
                    <div>user-select: auto;</div>
                    <div>select-none</div>
                    <div>user-select: none;</div>
                    <div>select-text</div>
                    <div>user-select: text;</div>
                    <div>select-all</div>
                    <div>user-select: all;</div>
                </div>
            </div>
        </>
    );
}
