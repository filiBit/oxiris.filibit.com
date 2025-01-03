import Link from "next/link";

export function TableOfContent({
    items,
}: {
    items: { label: string; href: string }[];
}) {
    return (
        <div className="mt-3 mb-8 border-1px max-w-span-4 overflow-no round-1">
            <div className="py-1 px-2 chroma-bg-2">Contents</div>
            <div className="col gap py-1 px-2 lh-2">
                {items.map(({ label, href }) => (
                    <div key={href} className="row">
                        &gt;&nbsp;
                        <Link href={href} className="link grow">
                            {label}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
