import React from 'react';
import Item from './Item'
import slugify from 'slugify';


function Features(props) {
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <Item
              key={itemHash}
              itemHash={itemHash}
              selectedName={props.selected[feature].name}
              item={item}
              feature={feature}
              updateFeature={e => props.updateFeature(feature, item)}
            />
          )
        });
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
      })}
    </form>
  )
}
Features.defaultProps = { features: {} };

export default Features;