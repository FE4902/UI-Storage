import React from "react";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 p-4 bg-white border-b border-black shadow-md">
            <div className="flex items-center gap-2">
                <h1 className="ui-logo">
                    <a
                        href="/"
                        className="flex px-4 py-2 text-3xl italic font-medium tracking-tight transition-all border-2 border-transparent"
                    >
                        UI Storage
                    </a>
                </h1>
                <nav>
                    <ul className="flex items-center gap-2">
                        <li>
                            <a className="p-2 text-base" href="/">
                                Component
                            </a>
                        </li>
                        <li>
                            <a className="p-2 text-base" href="/">
                                UI
                            </a>
                        </li>
                        <li>
                            <a className="p-2 text-base" href="/">
                                Canvas
                            </a>
                        </li>
                        <li>
                            <a className="p-2 text-base" href="/">
                                3D
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center gap-2">
                    <button className="p-2 text-base">Switch</button>
                    <button className="p-2 text-base md:none">Toggle</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
