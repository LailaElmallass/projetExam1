import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListArticle from './gestion_articles/ListArticles';
import AddArticle from './gestion_articles/AddArticle';
import Navbar from './Navbar';
import Ibm from './ibm/Ibm';

const PreviousProject = () => <div>Previous Project Content Here</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListArticle />} />
        <Route path="/articles" element={<AddArticle />} />
        <Route path="/ibm" element={<Ibm/>} />
      </Routes>
    </Router>
  );
};

export default App;
