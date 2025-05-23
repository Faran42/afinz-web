import { NavLink, useLocation } from "react-router-dom";
import "./TabLink.css";

export const TabLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const isActive = location.pathname.substring(1) === to;

  return (
    <NavLink
      to={to}
      className={`tab-link ${isActive ? "tab-link-active" : ""}`}>
      {children}
    </NavLink>
  );
};
