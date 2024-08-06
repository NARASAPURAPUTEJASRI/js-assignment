//React component displaying a list of items with virtualization

// src/VirtualizedList.js
import React from 'react';
import { FixedSizeList as List } from 'react-window';

const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

function VirtualizedList() {
  return (
    <List
      height={150} // Height of the list container
      itemCount={items.length} // Number of items in the list
      itemSize={35} // Height of each item in the list
      width={300} // Width of the list container
    >
      {({ index, style }) => (
        <div style={style}>
          {items[index]}
        </div>
      )}
    </List>
  );
}

export default VirtualizedList;
