import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import s from './Reviews.module.css';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(id).then(data => {
      setReviews(data.results);
    });
  }, [id]);

  return (
    <>
      {reviews &&
        reviews.map(review => (
          <li className={s.item} key={review.id}>
            <h2>Author: {review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))}
    </>
  );
};
