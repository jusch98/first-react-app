import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LangContext } from '../LangProvider'; // Importamos el contexto de idioma

const Article = () => {
  const { id } = useParams();
  const { language } = useContext(LangContext); // Obtenemos el idioma actual desde el contexto
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    fetch(`https://news-foniuhqsba-uc.a.run.app/news/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data);
        fetch(`https://news-foniuhqsba-uc.a.run.app/${data.section}`)
          .then((response) => response.json())
          .then((related) => setRelatedArticles(related));
      });
  }, [id]);

  if (!article) return <div>Loading...</div>;

  // Acceder a la traducción del artículo según el idioma seleccionado
  const translatedArticle = article.translations[language] || article; // Si no hay traducción, mostramos el artículo original

  return (
    <div>
      <div className="article-container">
        <h1>{translatedArticle.headline}</h1>
        <img src={translatedArticle.image_url} alt={translatedArticle.headline} />
        <p className="body" dangerouslySetInnerHTML={{ __html: translatedArticle.body }} />
        <h3>Related Articles</h3>
        <div className="related-articles">
          {relatedArticles.map((related) => (
            <div key={related.id} className="related-card">
              <h4>{related.translations[language]?.headline || related.headline}</h4>
              <p className="abstract">{related.translations[language]?.abstract || related.abstract}</p>
              <a href={`/news/${related.id}`}>Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
