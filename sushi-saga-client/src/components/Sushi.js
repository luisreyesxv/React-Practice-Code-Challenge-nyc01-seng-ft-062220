import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() =>props.eatingSushi(props.sushi)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eatenSushi.includes(props.sushi) ?
            null
          :
            <img src={props.img} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi