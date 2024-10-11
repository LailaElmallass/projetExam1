import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addArticle } from './ArticleSLice';

const AddArticle = () => {
  const [designation, setDesignation] = useState('');
  const [famille, setFamille] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addArticle({ id: Date.now(), designation, famille }));
    setDesignation('');
    setFamille('');
  };

  return (
    <div>
      <h2>Add Article</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        /> <br />
        <input
          type="text"
          placeholder="Famille"
          value={famille}
          onChange={(e) => setFamille(e.target.value)}
        /><br />
         <input
          type="file"
          placeholder="image"
          value={image}
          onChange={(e) => setImage(e.target.files[0])}
        /><br />
        <button type="submit">Add Article</button>
      </form>
    </div>
  );
};

export default AddArticle;
