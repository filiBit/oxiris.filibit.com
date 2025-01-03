import { CodeBox } from "@/components/code-box";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Concept | Oxiris CSS",
    description: "Overview of the framework",
};

export default function Concept() {
    return (
        <>
            <div className="h-6 border-bottom-1px px-2 row align-center">
                &gt; Concept
            </div>

            <div className="px-3">
                <h1 className="h1 my-8 text-center">Concept</h1>
                <h2 className="h2 mb-3 mt-8">Classes</h2>
                <p className="my-3">
                    The framework has a set of utility and component classes for
                    quickly applying CSS rules to HTML elements.
                </p>
                <p className="my-3">
                    Utility classes represent low-level rules for styling
                    elements. They control properties such as display, margin,
                    border, padding, width, color, etc.
                </p>
                <p className="my-3">
                    Component classes represent high-level rules for styles of
                    commonly used components. They declare components such as
                    button.
                </p>
                <CodeBox
                    title="Example"
                    className="my-3 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;row border-1px p-1 gap-1
                            round-2&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                            class=&quot;button&quot;&gt;Settings&lt;/button&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                            class=&quot;button&quot;&gt;Profile&lt;/button&gt;
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                />

                <h2 className="h2 mb-3 mt-8">Class modifiers</h2>
                <p className="my-3">
                    Class modifiers define a condition for which to apply the
                    class.
                </p>
                <p className="my-3">
                    They are added before the class name with `:` used as a
                    separator.
                </p>
                <CodeBox
                    title="Example"
                    className="my-3 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;col{" "}
                            <span className="color-invert">md:</span>row
                            border-1px p-1 gap-1 round-2&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                            class=&quot;button{" "}
                            <span className="color-invert">hover:</span>
                            color-invert&quot;&gt;Settings&lt;/button&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button
                            class=&quot;button&quot;&gt;Profile&lt;/button&gt;
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                />

                <h2 className="h2 mb-3 mt-8">Lengths</h2>
                <p className="my-3">
                    The framework has the base-length variable and uses its
                    multiples for most length-related utility classes and CSS
                    properties in component classes.
                </p>
                <p className="my-3">
                    This helps make design consistent in terms of sizing and
                    spacing.
                </p>
                <p className="my-3">
                    The length is specified at the end of the class.
                </p>
                <CodeBox
                    title="Example"
                    className="my-3 hue-b"
                    code={
                        <>
                            &lt;div class=&quot;m-2 border-1px p-2 h-6
                            round-2&quot;&gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Hello!
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                />

                <h2 className="h2 mt-8 mb-3">Color palette</h2>
                <p className="my-3">
                    For each color scheme (dark / light), the framework has five
                    monochrome color palettes called{" "}
                    <strong className="f-weight-xl hue-b">hues</strong>. Each
                    has three levels of{" "}
                    <strong className="f-weight-xl hue-b">chroma</strong>{" "}
                    (variations).
                </p>
                <div className="row gap-1 flex-wrap">
                    <div className="border-1px p-1 round-1 w-span-2 chroma-bg-2">
                        Neutral
                    </div>
                    <div className="border-1px p-1 round-1 w-span-2 chroma-bg-2 hue-a">
                        Hue-A
                    </div>
                    <div className="border-1px p-1 round-1 w-span-2 chroma-bg-2 hue-b">
                        Hue-B
                    </div>
                    <div className="border-1px p-1 round-1 w-span-2 chroma-bg-2 hue-c">
                        Hue-C
                    </div>
                    <div className="border-1px p-1 round-1 w-span-2 chroma-bg-2 hue-d">
                        Hue-D
                    </div>
                </div>

                <h2 className="h2 mb-3 mt-8">Customizable</h2>
                <p className="mt-3 mb-8">
                    Sizing, spacing and color palette can be easily adapted to
                    your needs by editing CSS variables.
                </p>
            </div>
        </>
    );
}
