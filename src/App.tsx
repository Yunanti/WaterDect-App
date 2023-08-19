import React from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import AppRoute from './routes/AppRoutes';
import './styles/pages/About.css';
import './styles/components/navbar.css';
import './styles/pages/Home.css';
import './styles/components/Form.css';
import './styles/pages/Gallery.css';
import './styles/components/GalleryList.css';

function App() {
  return (
    <Provider store={store}><AppRoute /></Provider>
  );
}

export default App;
