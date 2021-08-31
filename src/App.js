import logo from "./logo.svg";
import "./App.css";
import companyLogo from "./imageInSrc.jpg";
import videoLogo from "./myVideo.mp4";
import "./styles.css";

function App() {
  return (
    <div
      className="App"
      style={{ border: "solid 1px black", maxWidth: "100vw" }}
    >
      <h1 className="title red">Your name here</h1>
      <br />
      <img src={companyLogo} />
      <br />
      <img src="/imageInPublic.jpg" />
      <video width="320" height="240" controls>
        <source src={{ videoLogo }} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
