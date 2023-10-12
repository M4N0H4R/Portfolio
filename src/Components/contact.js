import "./contact.css";

function Contact() {
  function handleForm(e) {
    e.preventDefault();
  }
  return (
    <div id="section4" className="contact-container">
      <div className="cont">
        <h1>CONTACT</h1>
      </div>
      <div className="contact-page">
        <div className="left-contact">
          <p className="ques">Have a question or want to collaborate ?</p>
          <div className="form-div">
            <form className="form">
              <input className="name" placeholder="Name"></input>
              <input type="email" className="email" placeholder="Email"></input>
              <textarea className="message" placeholder="Message..."></textarea>
              <button onClick={handleForm}>SEND</button>
            </form>
          </div>
        </div>
        <div className="right-contact">
          <div className="address">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 384 512"
              fill="white"
            >
              <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
            </svg>
            <span>
              XXXXX, XXXXXXXX, India
              {/* <h3>city,state</h3> */}
            </span>
          </div>
          <div className="call">
            <img src={require("./images/call.png")} alt="call-pic"></img>
            <span>+91-XXXXXXXXXX</span>
          </div>
          <div className="email">
            <img src={require("./images/email.png")} alt="email-pic"></img>
            <span>email@gmail.com</span>
          </div>
          <div className="socials">
            <a
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/manohar-mahanthi-b00770167/"
            >
              <svg
                viewBox="0 0 512 512"
                height="40"
                width="40"
                className="link"
              >
                <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/M4N0H4R?tab=repositories"
              aria-label="Homepage"
              title="GitHub"
            >
              <svg viewBox="71 71 370 370" height="43" width="43" class="git">
                <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com"
              aria-label="Homepage"
              title="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="white"
                class="insta"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />{" "}
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://facebook.com"
              aria-label="Homepage"
              title="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="white"
                class="facebook"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />{" "}
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="thank">
        <p>
          <span style={{ color: "#ff004f" }}>"</span> Hey there! Thanks a
          million for stopping by. I'm honored you've explored my portfolio.
          Let's turn pixels into projects and code into collaboration - I'm
          excited to see where this journey takes us!{" "}
          <span style={{ color: "#ff004f" }}>"</span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
