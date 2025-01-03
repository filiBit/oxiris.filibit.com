import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Production | Oxiris CSS",
    description: "Guide for productin optimization",
};

export default function ProductionPage() {
    return (
        <>
            <div className="h-6 border-bottom-1px px-2 row align-center">
                &gt; Production
            </div>
            <div className="px-3">
                <h1 className="h1 m-0 my-8 text-center">Production</h1>
                <p className="my-3">
                    File size impacts the load time of a website. Since Oxiris
                    CSS is about 2 MB in size, it is important to try to reduce
                    the file size.
                </p>
                <p className="my-3">
                    Since your website will likely never use all the rules from
                    the framework&apos;s distribution file, by removing unused
                    rules, we can optimize the performance of your website.
                </p>
                <p className="my-3">
                    This process can be automated with CSS transformer -
                    PostCSS, and its plugin - PurgeCSS. To find out more, read
                    about{" "}
                    <Link href="https://postcss.org/" className="link">
                        PostCSS
                    </Link>{" "}
                    and{" "}
                    <Link href="https://purgecss.com/" className="link">
                        PurgeCSS
                    </Link>
                    . Below is the setup I used on Next.js projects.
                </p>
                <div className="primary my-8 border-1px round-1 overflow-no">
                    <div className="p-1 color-invert">shell</div>
                    <div className="p-2">
                        npm i -D postcss @fullhuman/postcss-purgecss
                    </div>
                </div>
                <div className="primary my-8 border-1px round-1 overflow-no">
                    <div className="p-1 color-invert">postcss.config.js</div>
                    <div className="p-2">
                        const purgecss =
                        require(&apos;@fullhuman/postcss-purgecss&apos;)
                        <br />
                        <br />
                        module.exports = {"{"}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;plugins: [
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;purgecss(
                        {"{"}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content:
                        [<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;./src/app/**/*.
                        {"{"}js,jsx,ts,tsx{"}"}&quot;,
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;./src/components/**/*.
                        {"{"}js,jsx,ts,tsx{"}"}&quot;,
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;defaultExtractor:
                        (content) ={">"}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content.match(/[\w-/:%/.]+(?
                        {"<"}!:)/g) || [],
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;safelist:
                        [&quot;html&quot;, &quot;body&quot;],
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"})
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;]
                        <br />
                        {"}"}
                    </div>
                </div>
            </div>
        </>
    );
}
