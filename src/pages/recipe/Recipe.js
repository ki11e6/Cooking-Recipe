import './Recipe.css';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useState, useEffect } from 'react';
import { projectFirestore } from '../../firebase/config';

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore
      .collection('recipes')
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError('Could not find the recipe');
        }
        console.log(doc.data());
      });
    return () => unsub();
    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({});
  };

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="methode">{recipe.method}</p>
          <button onClick={handleClick}>Update me</button>
        </>
      )}
    </div>
  );
};

export default Recipe;
