import { Route, Routes } from 'react-router-dom';

import { Header } from './Header/Header';
import { Home } from './pages/Home/Home';
import { Movie } from './pages/Movie/Movie';
import { NotFound } from './pages/NotFound/NotFound';
import { TrendItem } from './TrendItem/TrendItem';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Movie />} />
          <Route path="/movie/:id/*" element={<TrendItem />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
