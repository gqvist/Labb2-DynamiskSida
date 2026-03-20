import aboutData from "../data/about.json";

function About() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <h1>ABOUT<br />~ME~</h1>
          <p>a short presentation of who i am</p>
        </div>
      </header>

      <section className="content">
        <div className="content-inner">
          <h2>{aboutData.title}</h2>

          {aboutData.paragraphs.map((text, index) => (
            <p key={index} className="intro">
              {text}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;