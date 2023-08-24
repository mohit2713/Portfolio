import "./detail.css";
import profile from "./../../images/profilenew.png";
const Detail = () => {
  return (
    <div className="container">
      <img src={profile} className="container-profile" />
      <h1 className="container-name">Mohit Kashyap</h1>
      <div className="container-tag">
        <h2 className="container-tagline">Frontend-Developer</h2>
        <h2 className="container-tagline">
          #Talks about<span> </span>
          <b>
            <a className="container-js" href="https://www.javascript.com/">
              JAVASCRIPT<span> </span>
            </a>
            &<span> </span>
            <a
              className="container-react"
              href="https://react.dev/blog/2023/03/16/introducing-react-dev"
            >
              REACTJS
            </a>
          </b>
        </h2>
      </div>
    </div>
  );
};

export default Detail;
