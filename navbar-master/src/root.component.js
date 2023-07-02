import React from "react";
import { links } from "./root.helper.js";
import { BrowserRouter, Link } from "react-router-dom";

const Root = (props) => {
    return (
        <BrowserRouter>
            <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
                <div className="flex items-center justify-between">
                    {links.map((link) => {
                        return (
                            <Link
                                style={{ marginRight: 30 }}
                                to={link.href}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
                <div className="flex items-center justify-between">
                    <a
                        href="https://github.com/react-microfrontends"
                        className="externalLink"
                    >
                        Github project
                    </a>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Root;