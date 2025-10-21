import React from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderMoviePE = () => {
  const location = useLocation();

  const navItems = [
    { path: "/director", label: "Directors", color: "success" },
    { path: "/producer", label: "Producers", color: "info" },
    { path: "/star", label: "Stars", color: "danger" },
    { path: "/genre", label: "Genres", color: "secondary" },
    { path: "/movie", label: "Movies", color: "warning" },
  ];

  return (
    <>
      <header>
        <div className="container-fluid">
          <h1 className="text-center">Dashboard</h1>
          <nav className="text-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`btn btn-${item.color} me-3 ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};
export default HeaderMoviePE;
