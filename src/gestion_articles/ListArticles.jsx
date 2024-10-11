import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListArticle = () => {
  const articles = useSelector(state => state.articles.articles);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Liste des Articles</h2>
      <div className="row">
        {articles.map(article => (
          <div className="col-lg-4 col-md-6 mb-4" key={article.id}>
            <div className="card h-100">
              <img src={article.image ? URL.createObjectURL(article.image) : ''} className="card-img-top" style={{width: '100%', height:'60%'}} alt={article.designation} />
              <div className="card-body">
                <h5 className="card-title">{article.designation}</h5>
                <p className="card-text"><strong>Famille:</strong> {article.famille}</p>
                <p className="card-text"><strong>ID:</strong> {article.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListArticle;
