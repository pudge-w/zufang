/* eslint-disable */
import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import storage from '@/utils/setStorage';

// 引入高德地图
import AMapLoader from '@amap/amap-jsapi-loader';


let map;

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
      const loglat = [res.result.longitude, res.result.latitude];
      AMapLoader.load({
        "key": "8f961d3aa017ac1c4069ce032c92f4eb",  // 申请好的Web端开发者Key，首次调用 load 时必填
        "version": "1.4.15",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        "AMapUI": {             // 是否加载 AMapUI，缺省不加载
          "version": '1.1',   // AMapUI 缺省 1.1
          "plugins":[],       // 需要加载的 AMapUI ui插件
        },
        "Loca":{                // 是否加载 Loca， 缺省不加载
          "version": '1.3.2'  // Loca 版本，缺省 1.3.2
        },
      }).then((AMap)=>{
        map = new AMap.Map('container', {
          zoom:16,//级别
          center: loglat,//中心点坐标
          // viewMode:'3D'//使用3D视图
        });
        // console.log(map);
        AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.Weather', 'AMap.CitySearch'], function(){//异步加载插件
          let toolbar = new AMap.ToolBar();
          map.addControl(toolbar);
          let scale = new AMap.Scale();
          map.addControl(scale);

          let citySearch = new AMap.CitySearch()
          citySearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
              // 查询成功，result即为当前所在城市信息
              // console.log(result)
              //创建天气查询实例
              let weather = new AMap.Weather();
              //执行实时天气信息查询
              weather.getLive(result.city, function(err, data) {
                console.log(err, data);
              });
            }
          })

          
        });

        let marker = new AMap.Marker({
          position: new AMap.LngLat(loglat[0], loglat[1]),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          title: '租房'
        });
        // 将创建的点标记添加到已有的地图实例：
        map.add(marker);
      }).catch(e => {
        console.log(e);
      })
    })()
  }, [id])

  useEffect(() => {
    return () => {
      console.log('地图卸载成功')
      map.destroy();
    }
  }, [])

  return (
    <div>
      <div id="container" style={{height: '200px'}}></div>
    </div>
  );
};

export default Index;
