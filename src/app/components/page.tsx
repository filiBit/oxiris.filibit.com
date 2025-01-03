import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Components | Oxiris CSS",
    description: "Components overview",
};

export default function Page() {
    return (
        <>
            <div className="h-6 border-bottom-1px px-2 row align-center">
                &gt; Components
            </div>
            <div className="px-3">
                <h1 className="h1 m-0 my-8 text-center">Overview</h1>
                <p className="my-3 mb-8">
                    CSS classes featuring high-level CSS declarations.
                </p>

                <div className="row gap-3 flex-wrap my-8">
                    <div className="col justify-between hue-b border-1px w-span-5 grow shrink round-2 chroma-bg-2">
                        <div>
                            <h2 className="h3 m-2">Button</h2>
                            <p className="mt-2 mx-2">Multiple variations</p>
                        </div>
                        <div className="row justify-end mt-4 m-1">
                            <Link
                                href="/components/button"
                                className="button var-contained px-1 h-4 f-size-sm"
                            >
                                Discover &gt;
                            </Link>
                        </div>
                    </div>
                    <div className="hue-b border-1px w-span-5 grow shrink round-2 col justify-between chroma-bg-2">
                        <div>
                            <h2 className="h3 m-2">Table</h2>
                            <p className="mt-2 mx-2">
                                Adapatable for different number of columns
                            </p>
                        </div>
                        <div className="row justify-end mt-4 m-1">
                            <Link
                                href="/components/table"
                                className="button var-contained px-1 h-4 f-size-sm"
                            >
                                Discover &gt;
                            </Link>
                        </div>
                    </div>
                    <div className="col justify-between hue-b border-1px w-span-5 grow shrink round-2 chroma-bg-2">
                        <div>
                            <h2 className="h3 m-2">Typography</h2>
                            <p className="mt-2 mx-2">Headings</p>
                        </div>
                        <div className="row justify-end mt-4 m-1">
                            <Link
                                href="/components/typography"
                                className="button var-contained px-1 h-4 f-size-sm"
                            >
                                Discover &gt;
                            </Link>
                        </div>
                    </div>
                    <div className="col justify-between hue-b w-span-5 grow shrink round-2"></div>
                </div>
            </div>
        </>
    );
}
