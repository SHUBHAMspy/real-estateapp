import { useRoutes } from 'react-router-dom';
import './App.css';
import Header from './components/common/header/Header';
import MobileNavbar from "./components/mobile/mobileNavbar/MobileNavbar";
import routes from './routes';

function App() {
  const elements = useRoutes(routes);
  return (
    <div className="App">
      <Header/>
      {elements}
      
      <MobileNavbar/>
    </div>
  );
}

export default App;
