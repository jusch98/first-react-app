import React, { useState, useEffect, useContext } from 'react';
import { LangContext } from '../LangProvider'; // Importamos el contexto de idioma

const Home = () => {
  const [articles, setArticles] = useState([]);
  const { language } = useContext(LangContext); // Obtenemos el idioma actual desde el contexto

  useEffect(() => {
    fetch('https://news-foniuhqsba-uc.a.run.app')
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <div className="grid">
        {articles.map((article) => (
          <div key={article.id} className="card">
            <img src={article.image_url} alt={article.headline} />
            <h3>{article.translations[language]?.headline || article.headline}</h3>
            <p>{article.translations[language]?.abstract || article.abstract}</p>
            <a href={`/news/${article.id}`}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
