import React from 'react';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button type="button" onClick={onDelete}>
        remover
      </button>
    </li>
  );
}

export default TechItem;
