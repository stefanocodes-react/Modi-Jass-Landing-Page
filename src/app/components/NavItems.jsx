import React from "react";

const NavItems = ({ links }) => {
  return links.map((link) => {
    return (
      <li key={link.id}>
        <a
          className="text-gray-300 transition font-satoshi text-lg hover:text-color-primary"
          href={`${link.url}`}
        >
          {link.title}
        </a>
      </li>
    );
  });
};

export default NavItems;
