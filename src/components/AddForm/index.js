import React, { useState } from "react";

const AddForm = ({ wines, setWines, fetchAllWines }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    type: "",
    owner: "",
    link: "",
    img: "",
    alt: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const displayForm = () => {
    setShowForm(true);
  };

  const saveForm = () => {
    const { name, year, type, link, img } = formData;

    if (name && year && type && link && img) {
      const newWine = { ...formData };
      setWines((prevWines) => [...prevWines, newWine]);
      fetchAllWines([...wines, newWine]); // Assuming this function updates the UI with the new wine list
      setShowForm(false);
      setFormData({
        name: "",
        year: "",
        type: "",
        owner: "",
        link: "",
        img: "",
        alt: "",
      });
    } else {
      alert("Veuillez remplir tous les champs obligatoires.");
    }
  };

  const cancelForm = () => {
    setShowForm(false);
    setFormData({
      name: "",
      year: "",
      type: "",
      owner: "",
      link: "",
      img: "",
      alt: "",
    });
  };

  return (
    <>
      {!showForm && <button onClick={displayForm}>Ajouter une bouteille</button>}
      {showForm && (
        <form onSubmit={(e) => e.preventDefault()} id="form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Année</label>
            <input
              type="number"
              id="year"
              className="form-control"
              value={formData.year}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <input
              type="text"
              id="type"
              className="form-control"
              value={formData.type}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="owner">Propriétaire</label>
            <input
              type="text"
              id="owner"
              className="form-control"
              value={formData.owner}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="link">Lien</label>
            <input
              type="text"
              id="link"
              className="form-control"
              value={formData.link}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="img">Visuel</label>
            <input
              type="text"
              id="img"
              className="form-control"
              value={formData.img}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="alt">Informations alternatives</label>
            <input
              type="text"
              id="alt"
              className="form-control"
              value={formData.alt}
              onChange={handleInputChange}
            />
          </div>
          <button type="button" onClick={saveForm}>Enregistrer</button>
          <button type="button" onClick={cancelForm}>Annuler</button>
        </form>
      )}
    </>
  );
};

export default AddForm;
