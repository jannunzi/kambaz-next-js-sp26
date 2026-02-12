"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { CiBeaker1 } from "react-icons/ci";
import { FaBookDead, FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    {
      href: "/account",
      label: "Account",
      icon: <FaRegUserCircle className="fs-1 text-danger" />,
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <MdSpaceDashboard className="fs-1 text-danger" />,
    },
    {
      href: "/dashboard",
      label: "Courses",
      icon: <FaBookDead className="fs-1 text-danger" />,
    },
    {
      href: "/calendar",
      label: "Calendar",
      icon: <FaCalendarAlt className="fs-1 text-danger" />,
    },
    {
      href: "/inbox",
      label: "Inbox",
      icon: <FaRegUserCircle className="fs-1 text-danger" />,
    },
    {
      href: "/labs",
      label: "Labs",
      icon: <CiBeaker1 className="fs-1 text-danger" />,
    },
  ];
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0  bg-black z-2"
      style={{ width: "140px" }}
    >
      <ListGroupItem className="bg-black text-danger border-0">
        {" "}
        Northeastern{" "}
      </ListGroupItem>
      {links.map((link) => (
        <ListGroupItem
          key={link.label}
          as={Link}
          href={link.href}
          className={`${pathname.includes(link.label.toLowerCase()) ? "bg-white text-danger" : "bg-black text-white"} text-center border-0`}
        >
          {link.icon} <br /> {link.label}{" "}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
