//Filterable and Sortable List Component

import React, { useState } from 'react';

const FilterSortList = ({ items }) => {
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedItems = [...filteredItems].sort((a, b) =>
    sortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button onClick={() => setSortOrder('asc')}>Sort Asc</button>
      <button onClick={() => setSortOrder('desc')}>Sort Desc</button>
      <ul>
        {sortedItems.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default FilterSortList;
