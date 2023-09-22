import "./projects.css";
function Projects() {
  return (
    <div className="projects-container" id="section3">
      <div className="pro">
        <h1>PROJECTS</h1>
      </div>
      <div className="projects-list">
        <div className="project">
          <img
            className="img"
            src={require("./images/appointments.jpeg")}
            alt="appointments portal pic"
          ></img>
          <h2 className="heading">
            Appointments Portal
            <a
              title="Appointments Portal"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ManoharMahanthi/Appointments_portal"
            >
              Github Link
            </a>
          </h2>
          <h3 className="technologies">Python, Flask, MongoDB</h3>
          <p>
            A user-friendly platform for faculty and students to book and manage
            appointments. It offers real-time scheduling, cancellations, and
            enhancing efficiency and collaboration within the institute
            community.
          </p>
        </div>
        <div className="project">
          <img
            className="img"
            src={require("./images/netflix.jpeg")}
            alt="Netflix Clone pic"
          ></img>

          <h2 className="heading">
            Netflix Clone
            <a
              title="Neflix Clone"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ManoharMahanthi/Netflix-Clone"
            >
              Github Link
            </a>
          </h2>
          <h3 className="technologies">ReactJS,NodeJs, MongoDB, RestAPI</h3>
          <p>
            A comprehensive Netflix clone website, featuring a sleek user
            interface, seamless video streaming, and a robust backend, providing
            users with an immersive and familiar streaming experience.
          </p>
        </div>
        <div className="project">
          <img
            className="img"
            src={require("./images/spacex.jpg")}
            alt="SpaceX's Landing Prediction Pic"
          ></img>
          <h2 className="heading">
            SpaceX's Prediction
            <a
              title="Falcon 9"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ManoharMahanthi/Falcon-9"
            >
              Github Link
            </a>
          </h2>
          <h3 className="technologies">Machine Learning, Python, Tensorflow</h3>
          <p>
            A machine learning model to predict the success of SpaceX's rocket
            landings. This model utilizes data to assess the likelihood of
            successful landings, aiding in cost prediction for upcoming
            launches.
          </p>
        </div>
        <div className="project">
          <img
            className="img"
            src={require("./images/googleSheets.jpeg")}
            alt="Google Sheets API pic"
          ></img>

          <h2 className="heading">
            Google Sheets API
            <a
              title="Google Sheets API"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ManoharMahanthi/Google-Sheets-API"
            >
              Github Link
            </a>
          </h2>
          <h3 className="technologies">NodeJS, RestAPI, GoogleAPI, MongoDB</h3>
          <p>
            Google Sheets API is a versatile solution that streamlines Google
            Sheets data management and analysis with Node.js. It enables
            seamless integration and automates tasks.
          </p>
        </div>

        <div className="project">
          <img
            className="img"
            src={require("./images/discord1.jpg")}
            alt="Discord Bot pic"
          ></img>

          <h2 className="heading">
            Discord Bot
            <a
              title="Discord Bot"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ManoharMahanthi/DiscordBot"
            >
              Github Link
            </a>
          </h2>
          <h3 className="technologies">
            NodeJs, RestAPI, Discord API, Twitter API
          </h3>
          <p>
            The bot is equipped with Twitter integration, GIF fetching
            capabilities, and member management features. The bot seamlessly
            brings the latest tweets, GIFs, and efficient server management
            tools.
          </p>
        </div>
        <div className="project">
          <img
            className="img"
            src={require("./images/mtp.jpg")}
            alt="MTP pic"
          ></img>

          <h2 className="heading">Time Series Forecasting</h2>
          <h3 className="technologies">
            Deep Learning Algorithms, Tensorflow, Python
          </h3>
          <p>
            Neural network-based time series forecasting model to predict
            COVID-19 infection rates. Analyzing historical data, the model
            accurately predicted future trends, aiding for resource allocation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
