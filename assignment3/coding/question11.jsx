//Component that displays a list of items with infinite scrolling

import React, { useEffect, useState } from 'react';

function InfiniteScrollList() {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  const loadMoreItems = () => {
    setItems((prevItems) => [
      ...prevItems,
      ...Array.from({ length: 20 }, (_, i) => `Item ${prevItems.length + i + 1}`),
    ]);
    if (items.length >= 100) setHasMore(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight && hasMore) {
        loadMoreItems();
      }
    });
  }, [hasMore]);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default InfiniteScrollList;
