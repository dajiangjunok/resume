import './App.css';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import routes from './router';
import { Provider } from 'react-redux';

import store from './store'

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {
          renderRoutes(routes)
        }
      </BrowserRouter>
    </Provider>
  );
}

export default App;
