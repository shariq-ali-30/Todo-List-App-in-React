const FilterSection = ({ todos, setSearchQuery, searchQuery, setFilter }) => {
  function handleFilter(selectedFilter) {
    let filters = document.querySelectorAll(".filter");

    filters.forEach((filter) => filter.classList.remove("active"));
    selectedFilter.classList.add("active")
    
    selectedFilter.innerText.toLowerCase().includes("all") ? setFilter("all") : selectedFilter.innerText.toLowerCase().includes("pending") ? setFilter("pending") : setFilter("completed")
  }

  return (
    <section className="filters-section flex justify-between items-center whitespace-nowrap gap-[clamp(0.8rem,1.5vw,1rem)]">
      <div className="filters flex gap-[clamp(0.25rem,1vw,0.5rem)]">
        <button
          onClick={(e) => handleFilter(e.target)}
          className="filter active px-[clamp(0.5rem,1.5vw,1rem)] bg-white text-[var(--primary-color)] border-[clamp(1px,0.2vw,1.5px)] border-[var(--primary-color)] text-[clamp(12px,1.5vw,14px)] h-[clamp(30px,4vh,35px)] font-semibold rounded-[clamp(3px,0.8vw,5px)] cursor-pointer"
        >
          All ({todos.length})
        </button>
        <button
          onClick={(e) => handleFilter(e.target)}
          className="filter px-[clamp(0.5rem,1.5vw,1rem)] bg-white text-[var(--primary-color)] border-[clamp(1px,0.2vw,1.5px)] border-[var(--primary-color)] text-[clamp(12px,1.5vw,14px)] h-[clamp(30px,4vh,35px)] font-semibold rounded-[clamp(3px,0.8vw,5px)] cursor-pointer"
        >
          Pending ({todos.filter((todo) => !todo.completed).length})
        </button>
        <button
          onClick={(e) => handleFilter(e.target)}
          className="filter px-[clamp(0.5rem,1.5vw,1rem)] bg-white text-[var(--primary-color)] border-[clamp(1px,0.2vw,1.5px)] border-[var(--primary-color)] text-[clamp(12px,1.5vw,14px)] h-[clamp(30px,4vh,35px)] font-semibold rounded-[clamp(3px,0.8vw,5px)] cursor-pointer"
        >
          Completed ({todos.filter((todo) => todo.completed).length})
        </button>
      </div>
      <div className="search-input w-[clamp(180px,30vw,300px)] h-[clamp(38px,4vh,40px)] relative">
        <i className="ph-bold ph-magnifying-glass absolute top-[50%] left-2 translate-y-[-50%] text-gray-400"></i>
        <input
          type="text"
          placeholder="Search tasks..."
          className="h-full w-full pl-[clamp(1.7rem,2.5vw,2rem)] px-[clamp(0.25rem,1vw,0.5rem)] text-[clamp(12px,1.5vw,14px)] outline-none [border:var(--input-border)] rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </section>
  );
};

export default FilterSection;
