import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import contactReducer from "./redux/reducers/ContactReducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

const rootElement = document.getElementById("root");

const store = createStore(contactReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
