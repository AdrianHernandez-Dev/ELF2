import React from 'react';
import USCurrencyFormat from './USCurrencyFormat';
import slugify from 'slugify';

function Item (props) {
  
  return (
    <div className="feature__item">
      <input
        type="radio"
        id={props.itemHash}
        className="feature__option"
        name={slugify(props.feature)}
        checked={props.item.name === props.selectedName}
        onChange={props.updateFeature}
      />
      <label htmlFor={props.itemHash} className="feature__label">
      {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
      </label>
    </div>
  );
}

export default Item