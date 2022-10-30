import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
if (module.hot) {
    module.hot.accept();
  }
ReactDOM.createRoot(document.getElementById("root")).render(<App />)