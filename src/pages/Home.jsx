function Home() {
  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <h1>~ANTON~<br />GRÖNQVIST</h1>
          <p>a very junior developer</p>
        </div>
      </header>

      <section className="content">
        <div className="content-inner">
          <h2>HELLO FELLOW PERSON</h2>
          <p className="intro">
            My name is Anton Grönqvist and i am currently working my way
            towards the title “full stack developer”. My main focus right now
            is working with the .NET framework trying to learn as much as possible. 
            <br /><br />
            This page is created for our second assigment in the course 
            “Frontend development & UX” at Chas Academy. The goal of the
            assignment is to create a portfolio page with react that follows a few specific requirements.
            <br /><br />
            One of theese requirements is to create a few eastereggs with the help
            of React. See if you can find them! I will give you some help with the
            hints below, but you might want to explore a bit on your own first.
            <br /><br />
            Hint for easteregg #1
            <br />
            Its only the most famous cheat code of all time...
            <br /><br />
            Hint for easteregg #2
            <br />
            You have heard of single click and double click, but have you heard of triple click?
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;