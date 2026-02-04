import { ReactNode } from "react";
import AccountNavigation from "./Navigation";
export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="d-flex">
      <div className="d-none d-sm-block">
        <AccountNavigation />
      </div>
      <div className="flex-fill">{children}</div>
    </div>
  );
}
