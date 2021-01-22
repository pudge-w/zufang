/* eslint-disable */
import React, {memo} from 'react';

const Renting = memo((props) => {
  const {rentList} = props
  return (
    <ul className="rentUl">
      {
        rentList.map(item => (
          <li style={{height: '40px'}} key={item.id}>{item.title} - {item.address[0]} - {item.address[1]}</li>
        ))
      }
    </ul>
  );
})

export default Renting;