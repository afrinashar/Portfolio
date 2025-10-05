import React from 'react';
import './FloatingDiv.css';

const FloatingDiv = ({ image, txt1, txt2 }) => {
  return (
    <figure className="floatingdiv" aria-label={txt1 + (txt2 ? ' ' + txt2 : '')}>
      <img src={image} alt={txt1 + (txt2 ? ' ' + txt2 : ' icon')} loading="lazy" width={48} height={48} />
      <figcaption>
        <span>
          <strong>{txt1}</strong>
          {txt2 && <><br />{txt2}</>}
        </span>
      </figcaption>
    </figure>
  );
};

export default FloatingDiv;