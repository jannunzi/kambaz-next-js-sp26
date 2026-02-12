"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavItem, NavLink } from "react-bootstrap";
export default function TOC() {
  const pathname = usePathname();

  const links = [
    { href: "/labs", label: "Labs", id: "wd-labs-link" },
    { href: "/labs/lab1", label: "Lab1", id: "wd-lab1-link" },
    { href: "/labs/lab2", label: "Lab2", id: "wd-lab2-link" },
    { href: "/labs/lab3", label: "Lab3", id: "wd-lab3-link" },
    { href: "/", label: "Kambaz", id: "wd-kambaz-link" },
    {
      href: "http://github.com/jannunzi",
      label: "My GitHub",
      id: "wd-github-link",
    },
  ];
  return (
    <Nav variant="pills">
      {links.map((link) => (
        <NavItem key={link.id}>
          <NavLink
            as={Link}
            href={link.href}
            id={link.id}
            className={pathname.endsWith(link.href) ? "active" : ""}
          >
            {link.label}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
}
