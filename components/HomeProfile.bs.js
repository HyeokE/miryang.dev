// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Metadata from "../data/Metadata.bs.js";
import Link from "next/link";

function HomeProfile$default(Props) {
  return React.createElement("section", {
              className: "flex flex-col flex-nowrap w-full h-[300px] rounded-2xl p-6"
            }, React.createElement("span", {
                  className: "font-bold text-[var(--tx-white)] text-4xl md:text-3xl"
                }, Metadata.home.name), React.createElement("span", {
                  className: "text-[var(--tx-white)] font-light mt-2.5 break-all text-lg md:text-base"
                }, Metadata.home.description), React.createElement("span", undefined, React.createElement(Link, {
                      children: "Learn more",
                      href: "/about",
                      passHref: true
                    })));
}

var $$default = HomeProfile$default;

export {
  $$default ,
  $$default as default,
  
}
/* react Not a pure module */