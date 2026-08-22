const FilterSection = () => {
  return (
    <section className="filters-section flex justify-between items-center whitespace-nowrap gap-2">
      <div className="filters flex gap-2">
        <button
          className={`active px-4 bg-white text-[var(--primary-color)] border-[1.5px] border-[var(--primary-color)] text-[14px] h-[35px] font-semibold rounded-[5px] cursor-pointer`}
        >
          All (10)
        </button>
        <button className="px-4 bg-white text-[var(--primary-color)] border-[1.5px] border-[var(--primary-color)] text-[14px] h-[35px] font-semibold rounded-[5px] cursor-pointer">
          Pending (7)
        </button>
        <button className="px-4 bg-white text-[var(--primary-color)] border-[1.5px] border-[var(--primary-color)] text-[14px] h-[35px] font-semibold rounded-[5px] cursor-pointer">
          Completed (3)
        </button>
      </div>
      <div className="search-input w-[300px] h-[40px] relative">
        <i className="ph-bold ph-magnifying-glass absolute top-[50%] left-2 translate-y-[-50%] text-gray-400"></i>
        <input
          type="text"
          placeholder="Search tasks..."
          className="h-full w-full pl-7 px-2 text-[14px] outline-none [border:var(--input-border)] rounded"
        />
      </div>
    </section>
  );
};

export default FilterSection;
