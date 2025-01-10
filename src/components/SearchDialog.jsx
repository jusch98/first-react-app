import React, { useState, useEffect } from 'react';

const SearchDialog = ({ onClose }) => {
    // Estado para manejar el término de búsqueda
    const [query, setQuery] = useState('');
    // Estado para almacenar los artículos obtenidos desde la API
    const [articles, setArticles] = useState([]);
    // Estado para almacenar los resultados de la búsqueda
    const [results, setResults] = useState([]);
    // Estado para controlar si los artículos están siendo cargados
    const [loading, setLoading] = useState(true);

    // useEffect que se ejecuta al cargar el componente para obtener los artículos desde la API
    useEffect(() => {
        // Fetch para obtener todos los artículos
        fetch('https://news-foniuhqsba-uc.a.run.app')
            .then((response) => response.json())  // Convierte la respuesta en formato JSON
            .then((data) => {
                setArticles(data);  // Almacena los artículos en el estado
                setLoading(false);   // Cambia el estado de carga a falso cuando se obtienen los datos
            })
            .catch((error) => {
                console.error('Error fetching articles:', error);  // Muestra un error en la consola si la API falla
                setLoading(false);  // En caso de error también cambia el estado de carga a falso
            });
    }, []);  // El array vacío significa que este efecto solo se ejecutará una vez, cuando el componente se monte

    // useEffect que se ejecuta cuando el usuario escribe en el campo de búsqueda
    useEffect(() => {
        if (!query.trim()) {
            setResults([]); // Limpiar los resultados si el campo de búsqueda está vacío
            return;
        }

        // Convierte la consulta en minúsculas para hacer una búsqueda insensible a mayúsculas
        const lowerCaseQuery = query.toLowerCase();
        
        // Filtrar los artículos que coinciden con el término de búsqueda en el título o en el resumen (abstract)
        const filtered = articles.filter(
            (article) =>
                article.headline.toLowerCase().includes(lowerCaseQuery) || // Coincidencia parcial en el título
                article.abstract.toLowerCase().includes(lowerCaseQuery)   // Coincidencia parcial en el resumen
        );
        
        // Establecer los artículos filtrados como los resultados
        setResults(filtered);
    }, [query, articles]);  // Este efecto depende de 'query' y 'articles', por lo que se ejecutará cada vez que alguno cambie

    return (
        <div className="search-dialog-content">
            {/* Botón para cerrar el diálogo */}
            <button className="close-btn" onClick={onClose}>
                X
            </button>
            <h2>Buscar Artículos</h2>
            {/* Campo de búsqueda */}
            <input
                type="text"
                value={query}  // El valor del input está vinculado al estado 'query'
                placeholder="Escribe una palabra clave..."
                onChange={(e) => setQuery(e.target.value)}  // Actualiza el término de búsqueda al escribir
            />
            
            {/* Mostrar el mensaje de carga mientras se obtienen los artículos */}
            {loading && <p>Cargando artículos...</p>}

            <div className="results">
                {/* Si no hay resultados y no está cargando, mostrar mensaje de "No se encontraron resultados" */}
                {results.length === 0 && !loading && <p>No se encontraron resultados</p>}
                {/* Mostrar los resultados de la búsqueda */}
                {results.map((article) => (
                    <div key={article.id} className="result-item">
                        <h4>{article.headline}</h4>
                        <p>{article.abstract}</p>
                        {/* Enlace al artículo completo */}
                        <a href={`/news/${article.id}`}>Leer más</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchDialog;
