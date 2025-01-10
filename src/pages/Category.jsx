import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://news-foniuhqsba-uc.a.run.app/${category}`)
      .then(response => response.json())
      .then(data => setArticles(data));
  }, [category]);

  return (
    <div>
      <h1>{category.endsWith("News") ? category:category.concat(" News")}</h1>
      <div className="grid">
        {articles.map(article => (
          <div key={article.id} className="card">
            <img src={article.image_url} alt={article.headline} />
            <h3>{article.headline}</h3>
            <p>{article.abstract}</p>
            <a href={`/news/${article.id}`}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
