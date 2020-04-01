import React from 'react';
import Option from './Option'

function Summary (props){
  Object.keys(props.selected).map((feature, idx) => {
  const featureHash = feature + '-' + idx;
  const selectedOption = props.selected[feature];

  return (
    <div>
      <Option featureHash={featureHash}
      selectedOption={selectedOption}
      />
    </div>
  );
});
} 

export default Summary;