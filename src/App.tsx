import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RootRoute from './Routes/RootRouter';
import { Provider } from 'react-redux';
import store from './redux/store';
import CookieBanner from './Components/CookieBanner/CookieBanner';
import { AuthProvider } from './providers/AuthProvider';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <RootRoute />
          <CookieBanner />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;