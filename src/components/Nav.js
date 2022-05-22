import React from "react";
import { Link } from "gatsby";

import blog from "../images/nav-blog.png";
import floppy from "../images/nav-floppy.png";
import github from "../images/nav-github.png";
import projects from "../images/nav-projects.png";
import twitter from "../images/nav-twitter.png";

const mainNavItems = [
  { url: "/", icon: projects, label: "Home" },
  { url: "/blog", icon: blog, label: "Blog" },
  { url: "/about", icon: floppy, label: "About me" },
];

const socialNavItems = [
  { url: "/", icon: github, label: "GitHub" },
  { url: "/", icon: twitter, label: "Twitter" },
];

export const Nav = () => {
  return (
    <aside className="navbar">
      <section>
        <nav>
          {mainNavItems.map((item) => (
            <Link to={item.url} key={item.label} activeClassName="active">
              <img src={item.icon} alt={item.label} />
              <div className="tooltip">{item.label}</div>
            </Link>
          ))}
        </nav>
        <nav>
          {socialNavItems.map((item) => (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              key={item.label}
            >
              <img src={item.icon} alt={item.label} />
              <div className="tooltip">{item.label}</div>
            </a>
          ))}
        </nav>
      </section>
    </aside>
  );
};
