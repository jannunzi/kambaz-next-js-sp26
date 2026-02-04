import Link from "next/link";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap";

export default function CourseCard({
  id,
  title,
  description,
}: {
  id?: string;
  title?: string;
  description?: string;
}) {
  return (
    <Card>
      <Link
        className="wd-dashboard-course-link
                           text-decoration-none text-dark"
        href={`/courses/${id}/home`}
      >
        <CardImg
          variant="top"
          width="100%"
          src="/images/reactjs.png"
          height={160}
        />
        <CardBody>
          <CardTitle
            className="wd-dashboard-course-title
                                    text-nowrap overflow-hidden"
          >
            {title}
          </CardTitle>
          <CardText
            className="wd-dashboard-course-description
                                    overflow-hidden"
            style={{ height: "100px" }}
          >
            {description}
          </CardText>
          <Button variant="primary">Go</Button>
        </CardBody>
      </Link>
    </Card>
  );
}
