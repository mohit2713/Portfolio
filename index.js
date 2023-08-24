import ReactDOM from "react-dom";
import App from "./src/App";

const index = () => {
  return (
    <div>
      <App />
    </div>
  );
};

export default index;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
