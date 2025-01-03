import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Utilities | Oxiris CSS",
    description: "CSS classes featuring commonly used CSS declarations",
};

export default function Utilities() {
    return (
        <>
            <div className="h-6 border-bottom-1px px-2 row align-center">
                &gt; Utilities
            </div>
            <div className="px-3">
                <h1 className="h1 m-0 my-8 text-center">Utilities</h1>
                <p className="my-3 mb-8">
                    CSS classes featuring commonly used CSS declarations.
                </p>

                <div className="row gap-3 flex-wrap my-8">
                    <div className="col justify-between hue-b border-1px w-span-5 grow shrink round-2 chroma-bg-2">
                        <div>
                            <h2 className="h3 m-2">Lengths</h2>
                            <p className="mt-2 mx-2">
                                Margin, border, padding, width, height, gap and
                                border-radius
                            </p>
                        </div>
                        <div className="row justify-end mt-4 m-1">
                            <Link
                                href="/utilities/lengths"
                                className="button var-contained px-1 h-4 f-size-sm"
                            >
                                Discover &gt;
                            </Link>
                        </div>
                    </div>
                    <div className="hue-b border-1px w-span-5 grow shrink round-2 col justify-between chroma-bg-2">
                        <div>
                            <h2 className="h3 m-2">Layout</h2>
                            <p className="mt-2 mx-2">Flexbox and positioning</p>
                        </div>
                        <div className="row justify-end mt-4 m-1">
                            <Link
                                href="/utilities/layout"
                                className="button var-contained px-1 h-4 f-size-sm"
                            >
                                Discover &gt;
                            </Link>
                        </div>
                    </div>
                    <div className="col justify-between hue-b border-1px w-span-5 grow shrink round-2 chroma-bg-2">
                        <div>
                            <h2 className="h3 m-2">Color palette</h2>
                            <p className="mt-2 mx-2">Hues and chromas</p>
                        </div>
                        <div className="row justify-end mt-4 m-1">
                            <Link
                                href="/utilities/colors"
                                className="button var-contained px-1 h-4 f-size-sm"
                            >
                                Discover &gt;
                            </Link>
                        </div>
                    </div>
                    <div className="col justify-between hue-b border-1px w-span-5 grow shrink round-2 chroma-bg-2">
                        <div>
                            <h2 className="h3 m-2">Other</h2>
                            <p className="mt-2 mx-2">
                                Text, font, letter, etc.
                            </p>
                        </div>
                        <div className="row justify-end mt-4 m-1">
                            <Link
                                href="/utilities/other"
                                className="button var-contained px-1 h-4 f-size-sm"
                            >
                                Discover &gt;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
