import { useEffect, useState } from "react";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/gqvist/repos")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub repos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <h1>~MY~<br />PORTFOLIO</h1>
          <p>well its basically whats on github atm, sorry</p>
        </div>
      </header>

      <section className="content">
        <div className="content-inner">
          {loading ? (
            <p className="intro">Loading projects...</p>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="portfolio-item">
                <h2>{project.name}</h2>
                <p className="projectdescription">
                  {project.description || "No description available."}
                </p>
                <p>
                  <a href={project.html_url} target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                </p>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default Portfolio;