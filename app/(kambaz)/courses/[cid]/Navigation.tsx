import Link from "next/link";
export default function CourseNavigation() {
  return (
    <div className="wd list-group fs-5 rounded-0">
      <Link
        href="/courses/1234/home"
        className="list-group-item active border-0"
      >
        Home
      </Link>
      <Link
        href="/courses/1234/modules"
        className="list-group-item text-danger border-0"
      >
        Modules
      </Link>
      <Link
        href="/courses/1234/Piazza"
        className="list-group-item text-danger border-0"
      >
        Piazza{" "}
      </Link>
      <Link
        href="/courses/1234/Zoom"
        className="list-group-item text-danger border-0"
      >
        Zoom{" "}
      </Link>
      <Link
        href="/courses/1234/assignments"
        className="list-group-item text-danger border-0"
      >
        Assignments{" "}
      </Link>
      <Link
        href="/courses/1234/Quizzes"
        className="list-group-item text-danger border-0"
      >
        Quizzes{" "}
      </Link>
      <Link
        href="/courses/1234/Grades"
        className="list-group-item text-danger border-0"
      >
        Grades{" "}
      </Link>
      <Link
        href="/courses/1234/people/table"
        className="list-group-item text-danger border-0"
      >
        People{" "}
      </Link>
    </div>
  );
}
