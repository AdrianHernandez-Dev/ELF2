import React from 'react'

function Total (props) { 
  return (  
    <div>        
  <div className="summary__total__label">
  Total
</div>
<div className="summary__total__value">
${Object.keys(props.selected).reduce(
  (acc, curr) => acc + props.selected[curr].cost,
  0
)}
</div>
</div>   
  )
}

export default Total;