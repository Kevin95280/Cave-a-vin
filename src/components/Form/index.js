const Form = ({ setSearch }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = e.target.search.value;
        setSearch(searchTerm);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Entrez un mot-clé :</label>
                <input type="text" name="search" id="search" className="search__input" />
                <button type="submit" className="search__button">Rechercher</button>
            </form>
        </>
    );
};

export default Form;