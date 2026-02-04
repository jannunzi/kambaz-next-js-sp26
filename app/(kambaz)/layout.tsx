import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./styles.css";
export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="d-flex" id="wd-kambaz">
      <div className="d-none d-md-block">
        <KambazNavigation />
      </div>
      <div className="ms-4 flex-fill wd-main-content-offset">{children}</div>
    </div>
  );
}
