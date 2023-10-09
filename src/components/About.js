import "./AboutUsStyles.css";

function About() {
  return (
    <div className="about-container">
      <div className="card">
        <div className="about-text">
          <div className="content-left">
            <h1> Our Lab</h1>
          </div>
          <div className="content-right">
            <p>
              Our lab is part of McGill University’s Department of Psychiatry
              and the McGill University Health Centre’s (MUHC) BRaIN research
              program. Together, this provides an environment with
              state-of-the-art facilities and colleagues with diverse areas of
              expertise.
            </p>
          </div>
        </div>
      </div>
      <div className="reserach-padding">
        <div className="container-small">
          <div className="reserach-content">
            <h1> Reserach</h1>
            <p>
              Our lab is part of McGill University’s Department of Psychiatry
              and the McGill University Health Centre’s (MUHC) BRaIN research
              program. Together, this provides an environment with
              state-of-the-art facilities and colleagues with diverse areas of
              expertise.
            </p>
          </div>
        </div>
      </div>
      <div className="RecentNews">
        <div className="about-text">
          <h1> Recent News</h1>
          <p>
            Our lab is part of McGill University’s Department of Psychiatry and
            the McGill University Health Centre’s (MUHC) BRaIN research program.
            Together, this provides an environment with state-of-the-art
            facilities and colleagues with diverse areas of expertise.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
