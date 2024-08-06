//Drag-and-Drop List Component

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DragDropList = ({ items }) => {
  const [list, setList] = useState(items);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const newList = [...list];
    const [movedItem] = newList.splice(result.source.index, 1);
    newList.splice(result.destination.index, 0, movedItem);
    setList(newList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((item, index) => (
              <Draggable key={item} draggableId={item} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragDropList;
