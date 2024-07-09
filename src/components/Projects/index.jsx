import React from "react";
import "../Projects/style.css";
import useIsMobile from "../../hooks/resize";
const Projects = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <div className="project-content">
          <h1 className="title-projects">My Projects</h1>
          <div className="cards-projects">
            <div className="inner-content-projects">
              <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-sm">bash</p>
                </div>
                <div className="mt-4">
                  <p className="text-green-400">$ Music Website</p>
                  <p className="text-white">
                    <span className="labguage-1" style={{ color: "#58C4DC" }}>
                      React,
                    </span>{" "}
                    <span className="language-2" style={{ color: "#7B7FB5" }}>
                      PHP
                    </span>
                  </p>
                  <p className="text-white">
                    Website based on database I made. CRUD operations
                  </p>
                  <a
                    href="#"
                    className="text-green-400"
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Visit
                  </a>
                </div>
              </aside>
            </div>
            <div className="inner-content-projects">
              <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-sm">bash</p>
                </div>
                <div className="mt-4">
                  <p className="text-green-400">$ Weather App</p>
                  <p className="language" style={{ color: "#58C4DC" }}>
                    React
                  </p>
                  <p className="text-white">
                    Worlds current weather app. Made with free weather API
                  </p>
                  <a
                    href="#"
                    className="text-green-400"
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Visit
                  </a>
                </div>
              </aside>
            </div>
            <div className="inner-content-projects">
              <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-sm">bash</p>
                </div>
                <div className="mt-4">
                  <p className="text-green-400">$ Counter</p>
                  <p className="language" style={{ color: "#58C4DC" }}>
                    React{" "}
                    <span className="addon" style={{ color: "#FFCA22" }}>
                      Vite
                    </span>
                  </p>
                  <p className="text-white">
                    Simple counter to learn React basics. First react project
                  </p>
                  <a
                    href="#"
                    className="text-green-400"
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Visit
                  </a>
                </div>
              </aside>
            </div>
          </div>
          <a
            href="#"
            className="see-projects"
            style={{ textDecoration: "underline" }}
          >
            See all projects
          </a>
        </div>
      ) : (
        <div className="project-content">
          <h1 className="title-projects">My Projects</h1>
          <div className="cards-projects">
            <div className="inner-content-projects">
              <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-sm">bash</p>
                </div>
                <div className="mt-4">
                  <p className="text-green-400">$ Music Website</p>
                  <p className="text-white">
                    <span className="labguage-1" style={{ color: "#58C4DC" }}>
                      React,
                    </span>{" "}
                    <span className="language-2" style={{ color: "#7B7FB5" }}>
                      PHP
                    </span>
                  </p>
                  <p className="text-white">
                    Website based on database I made. CRUD operations
                  </p>
                  <a
                    href="#"
                    className="text-green-400"
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Visit
                  </a>
                </div>
              </aside>
            </div>
            <div className="inner-content-projects">
              <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-sm">bash</p>
                </div>
                <div className="mt-4">
                  <p className="text-green-400">$ Weather App</p>
                  <p className="language" style={{ color: "#58C4DC" }}>
                    React
                  </p>
                  <p className="text-white">
                    Worlds current weather app. Made with free weather API
                  </p>
                  <a
                    href="#"
                    className="text-green-400"
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Visit
                  </a>
                </div>
              </aside>
            </div>
            <div className="inner-content-projects">
              <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-sm">bash</p>
                </div>
                <div className="mt-4">
                  <p className="text-green-400">$ Counter</p>
                  <p className="language" style={{ color: "#58C4DC" }}>
                    React{" "}
                    <span className="addon" style={{ color: "#FFCA22" }}>
                      Vite
                    </span>
                  </p>
                  <p className="text-white">
                    Simple counter to learn React basics. First react project
                  </p>
                  <a
                    href="#"
                    className="text-green-400"
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Visit
                  </a>
                </div>
              </aside>
            </div>
          </div>
          <a
            href="#"
            className="see-projects"
            style={{ textDecoration: "underline" }}
          >
            See all projects
          </a>
        </div>
      )}
    </>
  );
};

export default Projects;
