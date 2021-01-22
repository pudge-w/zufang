/* eslint-disable */
import React, {useEffect, useState} from 'react';
import NavBar from './ui/Nav';
import Search from './ui/Search';
import Tarbar from './ui/Tarbar';
import RentList from './ui/RentList';
import storage from '@/utils/setStorage';

import "./style.less"


const Index = () => {
  const [title, setTitle] = useState('我要租房');
  const [cityId, setCityId] = useState(0);
  const [areaId, setAreaId] = useState(0);
  const [price, setPrice] = useState('');
  const [rentList, setRentList] = useState([]);

  useEffect(() => {
    setTitle(storage.get('cityId').city);
    setCityId(storage.get('cityId').id);
  }, [])

  useEffect(() => {
    (async() => {
      const res = await getList()
      if (res.status === 0) {
        setRentList(res.result);
      } else {
        console.log(res.msg)
      }
    })()
  }, [areaId, price])

  const getList = () => {
    return fetch(`http://10.31.162.37:2000/api/renting/list?cityId=${cityId}&areaId=${areaId}&price=${price}`)
      .then(response => response.json())
      .then(res => res)
  }

  const getAreaId = (id) => {
    setAreaId(id)
  }

  const getMoney = (str) => {
    setPrice(str)
  }

  return (
    <div className="rent">
      <NavBar>{ title }租房</NavBar>

      <Search title={title}></Search>

      <Tarbar cityId={cityId} onReceive={getAreaId} onReceive2={getMoney}></Tarbar>

      <RentList rentList={rentList}></RentList>
    </div>
  );
}

export default Index;