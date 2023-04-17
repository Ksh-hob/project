import React, {useEffect} from "react";
const {kakao} = window; //카카오 api에서 사용하는 변수들 리액트가 알게 하기
const Map = () => {
    useEffect(() => {
        const container = document.getElementById('myMap');
        var [lat,lon] = currentLocation(); 
        var options = {
            center: new kakao.maps.LatLng(lat, lon),//locPosition,
            level: 3
        };
        var map = new kakao.maps.Map(container, options);
        map.relayout();
    }, []);

    return(
        <div id='myMap' style={{
            width: '500px',
            height: '500px'
        }}><h1>hello world</h1></div>
    );
}

function currentLocation(){
    var lat, lon;
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            lat = position.coords.latitude;
            lon = position.coords.longitude;
        });
    }else{
        lat = 33.450701;
        lon = 126.570667;  
    }
    return [lat,lon];
}

export default Map;