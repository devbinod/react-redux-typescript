import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Post from "./components/post";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Post />
      </div>
    </Provider>
  );
};

export default App;
