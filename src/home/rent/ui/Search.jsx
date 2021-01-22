/* eslint-disable */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { WingBlank, WhiteSpace, Icon } from "antd-mobile";
import "./style.less";

const Search = (props) => {
  const history = useHistory();

  const goCity = () => {
    history.push('/city')
  }

  return (
    <div>
      <WhiteSpace />
      <WingBlank>
        <div className="searchWrap">
          <address onClick={goCity}>{props.title}<Icon type="down" size="xxs" /></address>
          <div className="search">
            <Icon type="search" size="xxs" />
            <p>请输入公寓，地点和名称</p>
          </div>
        </div>
      </WingBlank>
      <WhiteSpace />
    </div>
  );
}

export default Search;