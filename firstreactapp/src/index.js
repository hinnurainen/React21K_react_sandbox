import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Demo = () => {
  return (
    <div class="logo">Logo</div>
    <div class="container">
      <box>No1</box>
      <box>No2</box>
      <box>No3</box>
    </div>
    <div class="footer">Copyright
    </div>
  );
};

ReactDOM.render(
  <Demo />,
  document.getElementById('root')
);
