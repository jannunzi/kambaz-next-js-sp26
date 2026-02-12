"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import * as db from "../../../database";
import { useParams } from "next/navigation";

export default function Modules() {
  const modules = db.modules;
  const { cid } = useParams();
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ListGroup className="rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroupItem
              key={module._id}
              className="wd-module
                    p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                {module.name}
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroupItem
                      key={lesson._id}
                      className="wd-lesson p-3 ps-1"
                    >
                      {lesson.name}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}
