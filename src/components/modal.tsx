import { ReactNode } from "react";

export function Modal({
    className,
    title,
    content,
    close,
}: {
    className?: string;
    title?: string;
    content: ReactNode;
    close: () => void;
}) {
    return (
        <div className={className}>
            <div className="relative row align-center justify-between p-1 h3 border-bottom-1px ">
                <div className="px-1">{title}</div>
                <button onClick={close} className="button h-4 w-4 chroma-bg-2">
                    X
                </button>
            </div>
            {content}
        </div>
    );
}
