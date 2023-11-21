import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reservation from './pages/Reservation';
import BienEtre from './pages/BienEtre';
import Accueil from './pages/Accueil';
import Chambre from './pages/Chambre';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Accueil />} />
        <Route path="/chambre" exact element={<Chambre />} />
        <Route path="/bien-etre" exact element={<BienEtre />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;