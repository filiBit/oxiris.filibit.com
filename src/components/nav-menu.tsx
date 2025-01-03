"use client";

import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { GithubIcon } from "./icon/github";
import Link from "next/link";

type SubMenuRoute = "/utilities" | "/components" | "/production";

const SUB_MENU_ROUTES: SubMenuRoute[] = [
    "/utilities",
    "/components",
    "/production",
];

export function NavMenu({
    toggleSettings,
    className,
}: {
    toggleSettings: () => void;
    className: string;
}) {
    const pathname = usePathname();

    const [openedSubMenus, setOpenedSubMenus] = useState<SubMenuRoute[]>(
        SUB_MENU_ROUTES.filter((r) => pathname.startsWith(r)),
    );
    const toggleSubMenu = useCallback(
        (route: SubMenuRoute) => {
            if (pathname.startsWith(route)) return;

            if (openedSubMenus.includes(route)) {
                setOpenedSubMenus(openedSubMenus.filter((r) => route !== r));
                return;
            }

            setOpenedSubMenus(openedSubMenus.concat(route));
        },
        [pathname, openedSubMenus, setOpenedSubMenus],
    );
    return (
        <div className={className}>
            <div className="lg:hide row flex-wrap gap-1">
                <button
                    onClick={toggleSettings}
                    className="button h-6 hue-neutral"
                >
                    Settings
                </button>
                <button className="button h-6 disabled hue-neutral">
                    Version 2
                </button>
                <Link
                    className="button h-6 p-2 hue-neutral"
                    href="https://github.com/filiBit/oxiris-css"
                >
                    <GithubIcon className="h-3 w-3" />
                </Link>
            </div>
            <Link
                className={`button h-6 ${pathname === "/" ? "var-contained" : ""}`}
                href="/"
            >
                Overview
            </Link>
            <Link
                className={`button h-6 ${pathname === "/concept" ? "var-contained" : ""}`}
                href="/concept"
            >
                Concept
            </Link>
            <Link
                className={`button h-6 ${pathname === "/installation" ? "var-contained" : ""}`}
                href="/installation"
            >
                Installation
            </Link>
            <div className="col border-1px round-1 overflow-no">
                <button
                    className={`button border-0 h-6 row align-center ${openedSubMenus.includes("/utilities") ? "var-indicator-filled" : "var-indicator"}`}
                    onClick={() => toggleSubMenu("/utilities")}
                >
                    Utilities
                </button>
                {openedSubMenus.includes("/utilities") && (
                    <>
                        <Link
                            href="/utilities"
                            className={`button border-0 border-top-1px h-5 round-0 ${pathname === "/utilities" ? "var-contained" : ""}`}
                        >
                            Overview
                        </Link>
                        <Link
                            href="/utilities/lengths"
                            className={`button border-0 border-top-1px h-5 round-0 ${pathname === "/utilities/lengths" ? "var-contained" : ""}`}
                        >
                            lengths
                        </Link>
                        <Link
                            href="/utilities/layout"
                            className={`button border-0 border-top-1px h-5 round-0 ${pathname === "/utilities/layout" ? "var-contained" : ""}`}
                        >
                            layout
                        </Link>
                        <Link
                            href="/utilities/colors"
                            className={`button border-0 border-top-1px h-5 round-0 ${pathname === "/utilities/colors" ? "var-contained" : ""}`}
                        >
                            colors
                        </Link>
                        <Link
                            href="/utilities/other"
                            className={`button border-0 border-top-1px h-5 round-0 ${pathname === "/utilities/other" ? "var-contained" : ""}`}
                        >
                            Other
                        </Link>
                    </>
                )}
            </div>

            <div className="col border-1px round-1 overflow-no">
                <button
                    className={`button border-0 h-6 row align-center ${openedSubMenus.includes("/components") ? "var-indicator-filled" : "var-indicator"}`}
                    onClick={() => toggleSubMenu("/components")}
                >
                    Components
                </button>
                {openedSubMenus.includes("/components") && (
                    <>
                        <Link
                            href="/components"
                            className={`button border-0 border-top-1px h-5 round-0 ${pathname === "/components" ? "var-contained" : ""}`}
                        >
                            Overview
                        </Link>
                        <Link
                            href="/components/button"
                            className={`button border-0 border-top-1px h-5 round-0 ${pathname === "/components/button" ? "var-contained" : ""}`}
                        >
                            Button
                        </Link>
                        <Link
                            href="/components/table"
                            className={`button border-0 border-top-1px h-5 round-0 ${pathname === "/components/table" ? "var-contained" : ""}`}
                        >
                            Table
                        </Link>
                        <Link
                            href="/components/other"
                            className={`button border-0 border-top-1px h-5 round-0 ${pathname === "/components/other" ? "var-contained" : ""}`}
                        >
                            Other
                        </Link>
                    </>
                )}
            </div>
            <Link
                className={`button h-6 ${pathname === "/modifiers" ? "var-contained" : ""}`}
                href="/modifiers"
            >
                Modifiers
            </Link>
            <Link
                className={`button h-6 ${pathname === "/customization" ? "var-contained" : ""}`}
                href="/customization"
            >
                Customization
            </Link>
            <Link
                href="/production"
                className={`button h-6 ${pathname === "/production" ? "var-contained" : ""}`}
            >
                Production
            </Link>
        </div>
    );
}
