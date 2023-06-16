import React from 'react';
import './Home.css';
import { useFetch } from '../../hooks/useFetch';

const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes');
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading....</p>}
      {data &&
        data.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
          </div>
        ))}
    </div>
  );
};

export default Home;
