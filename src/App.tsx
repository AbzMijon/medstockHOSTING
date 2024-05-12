import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RootRoute from './Routes/RootRouter';
import { Provider } from 'react-redux';
import store from './redux/store';
import CookieBanner from './Components/CookieBanner/CookieBanner';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootRoute />
        <CookieBanner />
      </BrowserRouter>
    </Provider>
  );
}

export default App;