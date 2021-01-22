/* eslint-disable */
import React, {useState, useEffect} from 'react';
import "./style.less";

const moneyList = [
  {
    price: [0, 1500],
    id: 1
  },
  {
    price: [1500, 2500],
    id: 2
  },
  {
    price: [2500, 3500],
    id: 3
  },
  {
    price: [3500, 10000],
    id: 4
  }
]

const TabBar = (props) => {

  const {cityId} = props

  const [isShow, setIsShow] = useState(0);
  const [areaList, setAreaList] = useState([]);

  const getArea = () => {
    return fetch(`http://10.31.162.37:2000/api/area/list?cityId=${cityId}`)
      .then(response => response.json())
      .then(res => {
        if(res.status === 0) {
          setAreaList(res.result)
          setIsShow(1)
        }
      })
  }

  const getMoney = () => {
    setIsShow(2)
  }

  

  // useEffect(() => {
  //   // 传递父组件
  //   props.onReceive(areaId)
  // }, [areaId])

  const select = (id) => {
    return () => {
      props.onReceive(id)
      setIsShow(0)
    }
  }

  const selectMoney = (price) => {
    return () => {
      // [1500, 2500]   =>   '1500,2500'
      const str = price.join(',')
      props.onReceive2(str)
      setIsShow(0)
    }
  }

  return (
    <div className="tarbar">
      <div className="item" onClick={getArea}>区域</div>
      <div className="item" onClick={getMoney}>租金</div>
      <div className="item">户型</div>
      <div className="item">更多</div>
      <ul className="select">
        {
          isShow === 1 && (
            areaList.map(item => {
              return (
                <li 
                  key={item.areaId} 
                  className="areaItem"
                  onClick={select(item.areaId)}
                >
                  {item.areaName}
                </li>
              )
            })
          )
        }
        {
          isShow === 2 && (
            moneyList.map(item => {
              return (
                <li 
                  key={item.id} 
                  className="areaItem"
                  onClick={selectMoney(item.price)}
                >
                  {item.price[0]}元 - {item.price[1]}元
                </li>
              )
            })
          )
        }
      </ul>
      
     
    </div>
  )
}

export default TabBar;