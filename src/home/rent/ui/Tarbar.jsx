/* eslint-disable */
import React, {useState} from 'react';
import "./style.less";

const TabBar = (props) => {

  const {cityId} = props

  const [isShow, setIsShow] = useState(false);
  const [areaList, setAreaList] = useState([]);

  const getArea = () => {
    fetch(`http://10.31.162.37:2000/api/area/list?cityId=${cityId}`)
      .then(response => response.json())
      .then(res => {
        if(res.status === 0) {
          setAreaList(res.result)
          setIsShow(true)
        }
      })
  }

  return (
    <div className="tarbar">
      <div className="item" onClick={getArea}>区域</div>
      <div className="item">租金</div>
      <div className="item">户型</div>
      <div className="item">更多</div>
      {
        isShow && (<ul className="select">
          {
            areaList.map(item => {
              return (<li key={item.areaId}>{item.areaName}</li>)
            })
          }
        </ul>)
      }
     
    </div>
  )
}

export default TabBar;