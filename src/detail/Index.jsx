/* eslint-disable */
import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import storage from '@/utils/setStorage';

const Index = () => {
  const {id} = useParams();

  const cityId = storage.get('cityId').id
  
  const getDetailData = () => {
    return fetch(`http://10.31.162.37:2000/api/detail/info?cityId=${cityId}&roomId=${id}`)
      .then(response => response.json())
      .then(res => res)
  }

  useEffect(() => {
    (async() => {
      const res = await getDetailData()
      console.log(res);
    })()
  }, [id])

  return <div>detail</div>;
};

export default Index;
