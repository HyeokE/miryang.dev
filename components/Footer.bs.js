// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Metadata from "../data/Metadata.bs.js";
import Link from "next/link";
import $$Image from "next/image";

function Footer$default(Props) {
  return React.createElement("footer", {
              className: "flex flex-col flex-nowrap items-center mt-[100px] p-8 border-t border-solid border-t-[var(--bg-sub)] w-[calc(100% - calc((100% - 700px)))] md:calc(100% - 40px)"
            }, React.createElement("div", {
                  className: "flex flex-wrap items-center"
                }, React.createElement("a", {
                      href: Metadata.social.github,
                      rel: "noreferrer",
                      target: "_blank"
                    }, React.createElement($$Image, {
                          alt: "github",
                          className: "mx-1.5",
                          objectFit: "contain",
                          src: "/social/github.svg",
                          width: 18.0
                        })), React.createElement("a", {
                      href: Metadata.social.facebook,
                      rel: "noreferrer",
                      target: "_blank"
                    }, React.createElement($$Image, {
                          alt: "facebook",
                          className: "mx-1.5",
                          objectFit: "contain",
                          src: "/social/facebook.svg",
                          width: 18.0
                        })), React.createElement("a", {
                      href: Metadata.social.instagram,
                      rel: "noreferrer",
                      target: "_blank"
                    }, React.createElement($$Image, {
                          alt: "instagram",
                          className: "mx-1.5",
                          objectFit: "contain",
                          src: "/social/instagram.svg",
                          width: 18.0
                        })), React.createElement("a", {
                      href: Metadata.social.linkedin,
                      rel: "noreferrer",
                      target: "_blank"
                    }, React.createElement($$Image, {
                          alt: "linkedin",
                          className: "mx-1.5",
                          objectFit: "contain",
                          src: "/social/linkedin.svg",
                          width: 18.0
                        })), React.createElement("a", {
                      href: Metadata.social.stackoverflow,
                      rel: "noreferrer",
                      target: "_blank"
                    }, React.createElement($$Image, {
                          alt: "stackoverflow",
                          className: "mx-1.5",
                          objectFit: "contain",
                          src: "/social/stackoverflow.svg",
                          width: 18.0
                        })), React.createElement("a", {
                      href: Metadata.social.twitter,
                      rel: "noreferrer",
                      target: "_blank"
                    }, React.createElement($$Image, {
                          alt: "twitter",
                          className: "mx-1.5",
                          objectFit: "contain",
                          src: "/social/twitter.svg",
                          width: 18.0
                        })), React.createElement("a", {
                      href: Metadata.social.rss,
                      rel: "noreferrer",
                      target: "_blank"
                    }, React.createElement($$Image, {
                          alt: "facebook",
                          className: "mx-1.5",
                          objectFit: "contain",
                          src: "/social/rss.svg",
                          width: 18.0
                        }))), React.createElement("span", {
                  className: "text-sm text-[var(--tx-sub)] mt-3"
                }, "Copyright © 2021 " + Metadata.author), React.createElement(Link, {
                  children: React.createElement("a", {
                        className: "text-xs text-[var(--tx-sub-dark)] no-underline mt-2.5 hover:underline"
                      }, "miryang.dev"),
                  href: Metadata.repo,
                  passHref: true
                }));
}

var $$default = Footer$default;

export {
  $$default ,
  $$default as default,
  
}
/* react Not a pure module */