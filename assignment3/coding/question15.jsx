//React Memo Component

import React, { memo } from 'react';

const MemoComponent = memo(({ name }) => {
  console.log("Rendering MemoComponent");
  return <div>{name}</div>;
});

export default MemoComponent;
