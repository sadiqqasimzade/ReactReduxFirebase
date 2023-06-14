// import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './presentation/app/app';

import { BrowserRouter } from 'react-router-dom';
import store from './presentation/state/reducers/rootReducer';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);
