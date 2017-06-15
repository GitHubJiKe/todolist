import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store, DevTools } from './store/index';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            {DevTools}
        </div>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
