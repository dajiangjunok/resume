import './App.css';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import routes from './router';
import { Provider } from 'react-redux';

import JMusic from './component/music'

import store from './store'

function App () {
  return (
    <Provider store={store}>
      <JMusic />
      <BrowserRouter>
        {
          renderRoutes(routes)
        }
      </BrowserRouter>
    </Provider>
  );
}

export default App;
