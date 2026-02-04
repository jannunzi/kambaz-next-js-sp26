import Link from "next/link";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap";
import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1>Dashboard</h1> <hr />
      <h2>Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <CourseCard
              id="1234"
              title="CS1234 React JS"
              description="Full Stack software developer"
            />
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <CourseCard
              id="5678"
              title="CS5678 Advanced React"
              description="Advanced concepts in React development"
            />
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <CourseCard
              id="91011"
              title="CS91011 Next.js Basics"
              description="Introduction to Next.js framework"
            />
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <CourseCard
              id="91011"
              title="CS91011 Next.js Basics"
              description="Introduction to Next.js framework"
            />
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <CourseCard
              id="91011"
              title="CS91011 Next.js Basics"
              description="Introduction to Next.js framework"
            />
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <CourseCard
              id="91011"
              title="CS91011 Next.js Basics"
              description="Introduction to Next.js framework"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
