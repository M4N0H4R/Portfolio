import "./about.css";

function About() {
  return (
    <div id="section2" className="about-container">
      <div className="ab">
        <h1>ABOUT</h1>
      </div>
      <div className="about">
        <div className="about-me">
          <p>
            Hey there! This is Manohar Mahanthi. I recently graduated from IIT
            Kharagpur. I'm a passionate web developer with a versatile skill
            set, specializing primarily in full-stack development. I possess a
            deep understanding of both front-end and back-end development and am
            constantly refining my abilities while seeking opportunities.
          </p>
          <p>
            Currently, I am actively seeking full-stack opportunities that
            encompass both front-end and back-end development. If you're
            interested, I'd be thrilled to connect and discuss potential
            collaborations. I am currently working on several projects that
            emphasize specific tech stacks and frameworks, allowing me to
            further enhance my expertise.
          </p>
          <p>
            In my personal life, I enjoy spending time watching movies and TV
            shows, playing video games, creating UI/UX designs, and working out.
          </p>
          <p>
            Please reach out to me if you would like to explore the potential of
            working together!
          </p>
        </div>
        <div className="skills">
          <h2>
            <span style={{ color: "red" }}>~</span> Languages
          </h2>
          <span>JavaScript</span>
          <span>C</span>
          <span>Python</span>
          <span>C++</span>
          <h2>
            <span style={{ color: "red" }}>~</span> Web Technologies
          </h2>
          <span>HTML</span>
          <span>CSS</span>
          <span>ReactJS</span>
          <span>NodeJS</span>
          <span>Flask</span>
          <span>MongoDB</span>
          <span>SQL</span>
          <span>RestAPI</span>
          <h2>
            <span style={{ color: "red" }}>~</span> Tools/Libraries
          </h2>
          <span>Numpy</span>
          <span>Pandas</span>
          <span>Scikit-Learn</span>
          <span>Matplotlib</span>
          <span>Tensorflow</span>
        </div>
      </div>
    </div>
  );
}

export default About;
