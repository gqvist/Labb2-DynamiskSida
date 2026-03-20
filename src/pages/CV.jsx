import cvData from "../data/cv.json";

function CV() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <h1>CURRICULUM<br />~VITAE~</h1>
          <p>Anton Grönqvist</p>
        </div>
      </header>

      <section className="content">
        <div className="content-inner">
          <h2>My timeline</h2>

          {cvData.education.map((item, index) => (
            <div key={index}>
              <p className="intro">
                {item.school}
                <br />
                {item.program}
                <br />
                {item.period}
              </p>
            </div>
          ))}

          {cvData.experience.map((item, index) => (
            <div key={index}>
              <p className="intro">
                {item.company}
                <br />
                {item.role}
                <br />
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CV;