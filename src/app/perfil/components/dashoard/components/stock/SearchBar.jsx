
const SearchBar = ({ setSearchTerm }) => {
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
        <input
            type="text"
            placeholder="Buscar productos..."
            onChange={handleSearch}
        />
        </div>
    );
};

export default SearchBar;
