/* eslint-disable */
import React, { useEffect, useState } from "react";
import { NavBar, Icon, WingBlank, WhiteSpace } from "antd-mobile";
import { useHistory } from 'react-router-dom';

import storage from '@/utils/setStorage';

import "./style.less"

const Index = () => {
  // hooks只能在顶层调用
  const history = useHistory();

  const [list, setList] = useState([]);

  useEffect(() => {
    (async() => {
      const res = await getCitiesList();
      if (res.status === 0) {
        setList(res.result)
      }
    })()
  }, [])

  const getCitiesList = () => {
    return fetch('http://10.31.162.37:2000/api/cities')
      .then(response => response.json())
      .then(res => res)
  }

  const goBack = () => {
    history.go(-1);
  }

  const saveCity = (item) => {
    return () => {
      // localStorage.setItem('cityId', item.id);
      storage.set('cityId', item)
      history.push('/home')
    }
  }

  return (
    <div className="city">
      <NavBar
        mode="light"
        icon={ history.length > 1 ? <Icon type="left" /> : null}
        onLeftClick={goBack}
      >租房网</NavBar>

      <WingBlank>
        <main>
          <WhiteSpace />
          <h3>选择城市</h3>
          <WhiteSpace />

          <ul>
            {
              list.map(item => (
                <li key={item.id} onClick={saveCity(item)}>{item.city}</li>
              ))
            }
          </ul>
        </main>
      </WingBlank>
    </div>
  );
};

export default Index;
