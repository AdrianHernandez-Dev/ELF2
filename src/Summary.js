import React from 'react';
import Option from './Option'
import Features from './Features';

function Summary (props){
  return Object.keys(props.selected).map((feature, idx) => {
  const featureHash = feature + '-' + idx;
  const selectedOption = props.selected[feature];

  return (
    <div key={featureHash}>
      <Option featureHash={featureHash}
      selectedOption={selectedOption}
      feature={feature}
      />
    </div>
  );
});
} 

export default Summary;