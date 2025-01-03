import Link from "next/link";
import { FilibitLogo } from "./icon/filibit";

export function Footer() {
    return (
        <div className="col align-center gap-2 border-1px p-4 grow round-1 hue-d chroma-bg-3">
            <div className="col gap-2 align-center justify-center lh-1.5">
                Powered by{" "}
                <Link
                    href="https://filibit.com"
                    className="row h-5 hue-neutral hover:hue-d"
                >
                    <FilibitLogo className="h-100%" />
                </Link>
            </div>
        </div>
    );
}
