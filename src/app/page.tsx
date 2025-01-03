import { CodeBox } from "@/components/code-box";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Oxiris CSS",
    description: "Lightweight CSS framework with minimalism and consistency",
};

export default function Home() {
    return (
        <>
            <div className="h-6 border-bottom-1px px-2 row align-center">
                &gt; Overview
            </div>
            <div className="px-2 md:px-3 relative">
                <div className="row m-0 my-8 justify-center align-center letter-0.1em">
                    <h1 className="h1 m-0 text-center letter-0.1em">
                        Oxiris CSS
                    </h1>
                    <img src="icon.svg" className="ml-2 h-5"></img>
                </div>
                <p className="my-3">
                    A lightweight CSS framework that celebrates aesthetics with
                    minimalism and consistency.
                </p>
                <p className="my-3">
                    It aims to provide a good developer experience with
                    straightforward documentation, customizability and file size
                    optimizations for production.
                </p>

                <CodeBox
                    title="Example"
                    className="hue-b my-8"
                    code={
                        <>
                            &lt;div class=&quot;col md:row border-1px gap-1 p-1
                            round-2&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                            class=&quot;button
                            hue-a&quot;&gt;Settings&lt;/button&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                            class=&quot;button
                            hue-b&quot;&gt;Profile&lt;/button&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                            class=&quot;button hue-c
                            chroma-bg-2&quot;&gt;Profile&lt;/button&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                            class=&quot;button hue-d
                            hover:color-invert&quot;&gt;Hover me&lt;/button&gt;
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                    preview={
                        <div className="hue-neutral col lg:row row border-1px p-1 gap-1 round-2">
                            <button className="button hue-a">Settings</button>
                            <button className="button hue-b chroma-bg-2">
                                Profile
                            </button>
                            <button className="button hue-c active">
                                Profile
                            </button>
                            <button className="button hue-d hover:color-invert">
                                Hover me
                            </button>
                        </div>
                    }
                />

                <div className="row justify-end mt-8 mb-3">
                    <Link
                        href="/concept"
                        className="button var-contained hue-d"
                    >
                        Get started &gt;
                    </Link>
                </div>
            </div>
        </>
    );
}
