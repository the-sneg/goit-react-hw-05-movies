import { useEffect, useState } from 'react';
import { fetchFilmById } from 'services/api';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Cast } from '../Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import s from './TrendItem.module.css';

export const TrendItem = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const navigate = useNavigate(id);

  const IMG_URL = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    fetchFilmById(id).then(data => {
      setFilm(data);
    });
  }, [id]);

  const handleGoBack = () => navigate(-1);

  return (
    <>
      <button className={s.btnBack} type="button" onClick={handleGoBack}>
        Go Back
      </button>

      <li className={s.item}>
        {film && (
          <div className={s.wraper}>
            <img
              className={s.img}
              src={`${IMG_URL}${film.poster_path}`}
              alt="Film img"
              height={450}
            />
            <h2 className={s.title}>
              {film.original_title} ({film.release_date.slice(0, 4)})
            </h2>
            <h3 className={s.title}>Overview</h3>
            <p className={s.text}>{film.overview}</p>
            <h4 className={s.title}>Genres</h4>
            <div>
              {film.genres.map(genres => (
                <div key={genres.name} className={s.genres}>
                  {genres.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </li>

      <p className={s.text}>Additional information</p>
      <ul className={s.list}>
        <Link className={s.link} to="credits">
          Cast
        </Link>
        <Link className={s.link} to={`/movie/${id}/reviews`}>
          Reviews
        </Link>
      </ul>

      <Routes>
        <Route path="credits" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};
