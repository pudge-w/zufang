/* eslint-disable */
import React, { useEffect } from "react";
import { NavBar, Icon, WingBlank, WhiteSpace } from "antd-mobile";
import { useHistory } from 'react-router-dom';

import storage from '@/utils/setStorage';

import { useDispatch, useSelector } from 'react-redux';

import "./style.less"

const Index = () => {
  // hooks只能在顶层调用
  const history = useHistory();
  const dispatch = useDispatch();
  // const cityList = useSelector(state => state.cityReducer.cityList);
  const cityList = useSelector(state => state.getIn(['cityReducer', 'cityList']));

  useEffect(() => {
    dispatch({
      type: 'GET_CITY'
    })
  }, [])

  const goBack = () => {
    history.go(-1);
  }

  const saveCity = (item) => {
    return () => {
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
              cityList.map(item => (
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
