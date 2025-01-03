import { CodeBox } from "@/components/code-box";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Installation | Oxiris CSS",
    description: "Installation guide",
};

export default function Installation() {
    return (
        <>
            <div className="h-6 border-bottom-1px px-2 row align-center">
                &gt; Installation
            </div>
            <div className="px-3">
                <h1 className="h1 m-0 my-8 text-center">Installation</h1>
                <p className="my-3 mb">
                    Download the Oxiris CSS distribution file from&nbsp;
                    <Link href="https://github.com/filiBit/oxiris-css">
                        the cdn
                    </Link>
                    , and include it into your web app.
                </p>
                <p className="my-3 mb">
                    Depending on your project, this can be done in different
                    ways.
                </p>
                <p className="mt-8 mb-3">
                    If you&apos;re not using any build tools or frameworks, then
                    you can include like so:
                </p>
                <CodeBox
                    title="HTML"
                    className="hue-b mt-3 mb-8"
                    code={
                        <>
                            &lt;head&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;linkrel=&quot;stylesheet&quot;
                            src=&quot;/oxiris-2.0.0.css&quot; /&gt;
                            <br />
                            &lt;/head&gt;
                        </>
                    }
                />
                <p className="mt-8 mb-3">
                    In other cases, some frameworks support importing of CSS
                    files directly through a template file such as JSX or TSX.
                </p>
                <CodeBox
                    title="JSX / TSX"
                    className="hue-b mt-3 mb-8"
                    code={<>import &quot;./oxiris-2.0.0.css&quot;;</>}
                />
            </div>
        </>
    );
}
