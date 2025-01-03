import { ReactNode } from "react";

export function CodeBox({
    title,
    open = false,
    className = "",
    code,
    preview,
}: {
    title?: string;
    className?: string;
    open?: boolean;
    code: ReactNode;
    preview?: ReactNode;
}) {
    return (
        <div
            className={`${className} border-1px round-1 overflow-no light:chroma-bg-3`}
        >
            {title && <div className="p-1 chroma-bg-2">{title}</div>}
            <div className="p-2">{code}</div>
            {preview && (
                <div className="border-top-1px row chroma-bg-2">
                    <details open={open || undefined} className="open:grow">
                        <summary>
                            <div className="row p-1">
                                <div className="button h-4 f-size-sm px-1 grow-0 chroma-bg-0">
                                    Preview
                                </div>
                            </div>
                        </summary>
                        <div className="p-2 hue-neutral chroma-bg-0 grow w-100%">
                            {preview}
                        </div>
                    </details>
                </div>
            )}
        </div>
    );
}
