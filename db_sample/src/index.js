import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import Puthusu from "./app";
import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Puthusu/>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
