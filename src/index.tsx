import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import CurrencyConverter from './containers/CurrencyConverter/CurrencyConverter';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <CurrencyConverter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
