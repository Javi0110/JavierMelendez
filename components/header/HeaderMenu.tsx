"use client";

import { classNames } from "@/utils/strings";
import Link from "next/link";
import { useState } from "react";

const LINKS = [
  {
    label: "Home",
    url: "/",
    classes: "delay-100",
  },
  {
    label: "Resume",
    url: "/resume",
    classes: "delay-200",
  },
  {
    label: "Blog",
    url: "/blog",
    classes: "delay-300",
  },
];

export const HeaderMenu = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div className="flex items-center">
      <ul className="flex gap-4 mr-8">
        {LINKS.map(({ label, url, classes }, idx) => (
          <li
            key={url}
            className={classNames(
              "transition-all",
              open
                ? "translate-x-0 opacity-1"
                : "translate-x-4 opacity-0 pointer-events-none",
              `delay-${(open ? LINKS.length - idx : idx) * 100}`
            )}
          >
            <Link href={url} onClick={toggle}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        id="menu-trigger"
        className=" relative h-16 w-16"
        onClick={toggle}
      >
        <div
          id="top-line"
          className={classNames(
            "w-12 h-1 bg-black absolute left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all",
            open ? "rotate-45" : "-translate-y-1.5"
          )}
        />
        <div
          id="bottom-line"
          className={classNames(
            "w-12 h-1 bg-black absolute left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all",
            open ? "-rotate-45" : "translate-y-1.5"
          )}
        />
      </button>
    </div>
  );
};
