"use client";

import "./globals.css";
import { useSystemColorScheme } from "@/hooks/ useSystemColorScheme";
import { useEffect, useState } from "react";
import "./oxiris-css-2.0.0.css";
import { Roboto_Mono } from "next/font/google";
import { GithubIcon } from "@/components/icon/github";
import { NavMenu } from "@/components/nav-menu";
import { Footer } from "@/components/footer";
import { Modal } from "@/components/modal";
import Link from "next/link";

const robotoMono = Roboto_Mono({
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
    const [cornerRadiusFactor, setCornerRadiusFactor] = useState<number>(1);
    const [colorScheme, setColorScheme] = useState<string>("dark");

    const systemColorScheme = useSystemColorScheme();

    useEffect(() => {
        setColorScheme(systemColorScheme || "dark");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function toggleSubMenu() {
        setIsSubMenuOpen(!isSubMenuOpen);
    }

    function toggleSettings() {
        setIsSettingsOpen(!isSettingsOpen);
    }

    function toggleCornerRadius() {
        setCornerRadiusFactor(cornerRadiusFactor === 0 ? 1 : 0);
    }

    function switchColorScheme() {
        setColorScheme(colorScheme === "dark" ? "light" : "dark");
    }

    return (
        <html lang="en">
            <body
                className={`lh-1.5 0 ${robotoMono.className} ${colorScheme}`}
                style={{
                    // @ts-expect-error - CSS custom property
                    "--ox-round-factor": cornerRadiusFactor,
                }}
            >
                <div className="max-w-span-16 mx-auto col gap-2 md:gap-3">
                    <div className="pt-2 px-2 md:pt-3 md:px-3 row justify-between flex-wrap gap-2 lg:gap-3">
                        <Link
                            href="/"
                            className="button letter-0.2em w-span-3 h-6"
                        >
                            O
                            <img
                                src="icon.svg"
                                className="h-2"
                                alt="X"
                                style={{ paddingRight: "0.15em" }}
                            ></img>
                            IRIS&nbsp;CSS
                        </Link>
                        <div className="col lg:row gap-1">
                            <button
                                onClick={toggleSettings}
                                className="button hide lg:row h-6"
                            >
                                Settings
                            </button>
                            <button className="button hide lg:row h-6 disabled">
                                Version 2
                            </button>
                            <Link
                                className="button hide lg:row h-6 p-2"
                                href="https://github.com/filiBit/oxiris-css"
                            >
                                <GithubIcon className="h-3 w-3" />
                            </Link>
                            <button
                                onClick={toggleSubMenu}
                                className={`lg:hide button var-indicator ${isSubMenuOpen ? "var-indicator-filled" : "var-indicator"}`}
                            >
                                Menu
                            </button>
                        </div>
                        <div
                            className={`justify-end lg:hide w-100% ${isSubMenuOpen ? "row" : "hide"}`}
                        >
                            <NavMenu
                                className={`lg:hide gap-1 p-1 chroma-bg-2 border-1px max-w-span-6 round-2 hue-b col`}
                            ></NavMenu>
                        </div>
                    </div>
                    <div className="row gap-2 md:gap-3 align-start md:mx-3 mb-8 md:mb-0">
                        <NavMenu className="hide lg:col gap-1 w-span-3 letter-0.05em hue-b"></NavMenu>

                        <main className="light:chroma-bg-3 border-top-1px md:border-1px round-0 md:round-1 grow overflow-no lh-1.5">
                            {children}
                        </main>
                    </div>
                    <div className="row gap-2 align-start mx-2 md:mx-3">
                        <div className="w-span-3 hide lg:row"></div>
                        <Footer />
                    </div>
                </div>
                {isSettingsOpen && (
                    <div className="fixed top right bottom left row align-center justify-center chroma-bg-3">
                        <Modal
                            title="Settings"
                            content={
                                <div className="col gap-1 p-2">
                                    <button
                                        onClick={switchColorScheme}
                                        className="button"
                                    >
                                        Theme [dark]
                                    </button>
                                    <button
                                        onClick={toggleCornerRadius}
                                        className={`button ${cornerRadiusFactor === 0 ? "var-indicator" : "var-indicator-filled"}`}
                                    >
                                        Round corners
                                    </button>
                                </div>
                            }
                            close={toggleSettings}
                            className="border-1px round-2 chroma-bg-2"
                        />
                    </div>
                )}
            </body>
        </html>
    );
}
