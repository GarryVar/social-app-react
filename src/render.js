import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import state, {addPost} from "./redux/state";

export let renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

