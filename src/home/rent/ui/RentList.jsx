/* eslint-disable */
import React, {memo} from 'react';
import {useHistory} from 'react-router-dom';

const Renting = memo((props) => {
  const {rentList} = props
  const history = useHistory()

  const toDetail = (id) => {
    return () => {
      history.push('/detail/' + id)
    }
  }

  return (
    <ul className="rentUl">
      {
        rentList.map(item => (
          <li onClick={toDetail(item.id)} style={{height: '40px'}} key={item.id}>{item.title} - {item.address[0]} - {item.address[1]} - {item.maxPrice} - {item.minPrice}</li>
        ))
      }
    </ul>
  );
})

export default Renting;