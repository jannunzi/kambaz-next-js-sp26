"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
export default function CourseNavigation() {
  const { cid } = useParams();
  const pathname = usePathname();
  const links = [
    { href: "home", label: "Home" },
    { href: "modules", label: "Modules" },
    { href: "piazza", label: "Piazza" },
    { href: "zoom", label: "Zoom" },
    { href: "assignments", label: "Assignments" },
    { href: "quizzes", label: "Quizzes" },
    { href: "grades", label: "Grades" },
    { href: "people/table", label: "People" },
  ];
  return (
    <div className="rounded-0 border-0 list-group">
      {links.map((link) => (
        <Link
          key={link.href}
          href={`/courses/${cid}/${link.href}`}
          className={`list-group-item ${pathname.endsWith(link.href) ? "active" : "text-danger"} border-0`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
