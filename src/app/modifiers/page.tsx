import { CodeBox } from "@/components/code-box";
import { TableOfContent } from "@/components/table-of-content";

export default function Environment() {
    return (
        <>
            <div className="h-6 border-bottom-1px px-2 row align-center">
                &gt; Modifiers
            </div>
            <div className="px-3">
                <h1 className="h1 m-0 my-8 text-center">Modifiers</h1>
                <p className="mt-3 mb-8">
                    Class modifiers represent a condition for which to apply the
                    class name. There are two types: state modifiers and media
                    modifiers.
                </p>
                <TableOfContent
                    items={[
                        { href: "#syntax", label: "Syntax" },
                        { href: "#state-modifiers", label: "State modifiers" },
                        { href: "#media-modifiers", label: "Media modifiers" },
                    ]}
                />
                <h2 id="syntax" className="h2 mb-3 mt-8">
                    Syntax
                </h2>
                <p className="my-3">
                    Modifiers are specified before the class name with `:` used
                    as a separator.
                </p>
                <div className="p-2 my-3 chroma-bg-2 round-1">
                    &lt;media-modifier&gt;:&lt;class&gt;
                </div>
                <div className="p-2 my-3 chroma-bg-2 round-1">
                    &lt;state-modifier&gt;:&lt;class&gt;
                </div>
                <p className="my-3">
                    Multiple modifiers can be stacked, but only according to
                    this notation:
                </p>
                <div className="p-2 my-3 chroma-bg-2 round-1">
                    &lt;media-modifier&gt;:&lt;state-modifier&gt;:&lt;class&gt;
                </div>
                <CodeBox
                    className="hue-b"
                    code={
                        <>
                            &lt;div
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;class=&quot;border-1px p-1
                            chroma-bg-2 hover:f-size-lg hover:hue-a
                            sm:hover:hue-b md:hover:hue-c lg:hover:hue-d&quot;
                            <br />
                            &gt;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Hover and resize the window
                            <br />
                            &lt;/div&gt;
                        </>
                    }
                    preview={
                        <>
                            <div className="border-1px p-1 chroma-bg-2 hover:f-size-lg hover:hue-a sm:hover:hue-b md:hover:hue-c lg:hover:hue-d">
                                Hover and resize the window
                            </div>
                        </>
                    }
                />

                <h2 id="state-modifiers" className="h2 mb-3 mt-8">
                    State modifiers
                </h2>
                <p className="my-3">
                    These modifiers correspond to following pseudo classes or
                    attributes:
                </p>
                <div className="table-2">
                    <div className="chroma-bg-2 f-weight-lg">Prefix</div>
                    <div className="chroma-bg-2 f-weight-lg">Selector</div>
                    <div>hover:</div>
                    <div>&lt;class&gt;:hover</div>
                    <div>active:</div>
                    <div>&lt;class&gt;:active</div>
                    <div>focus:</div>
                    <div>&lt;class&gt;:focus</div>
                    <div>open:</div>
                    <div>&lt;class&gt;[open]</div>
                    <div>dark:</div>
                    <div>.dark &lt;class&gt;</div>
                    <div>light:</div>
                    <div>.light &lt;class&gt;</div>
                </div>
                <p className="my-3">
                    Currently, they are only available for utility classes.
                </p>
                <h2 id="media-modifiers" className="h2 mb-3 mt-8">
                    Media modifiers
                </h2>
                <p className="my-3">
                    These modifiers use @media at-rules to apply the class for a
                    corresponding media feature.
                </p>
                <p className="my-3">
                    They are available for all utility classes and all component
                    classes, excluding component variation classes, at the
                    moment.
                </p>
                <div className="table-2 mb-8">
                    <div className="chroma-bg-2 f-weight-lg">Prefix</div>
                    <div className="chroma-bg-2 f-weight-lg">Feature</div>
                    <div>sm</div>
                    <div>min-width: 640px</div>
                    <div>md</div>
                    <div>min-width: 768px</div>
                    <div>lg</div>
                    <div>min-width: 1024px</div>
                    <div>xl</div>
                    <div>min-width: 1280px</div>
                    <div>2xl</div>
                    <div>min-width: 1536px</div>
                </div>
            </div>
        </>
    );
}
