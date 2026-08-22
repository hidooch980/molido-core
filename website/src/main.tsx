import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";


const rootElement = document.getElementById("root");


if (rootElement === null) {
throw new Error("MOLIDO root element not found");
}


const root = ReactDOM.createRoot(rootElement);


root.render(App());

