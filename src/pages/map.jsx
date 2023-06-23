import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    // 카카오 지도 API 로드 후 실행되는 콜백 함수
    window.kakao.maps.load(() => {
      const container = document.getElementById('map'); // 지도를 표시할 DOM 엘리먼트 선택
      const options = {
        center: new window.kakao.maps.LatLng(37.538089, 126.999437), // 지도 중심 좌표 설정
        level: 8, // 지도 확대 레벨 설정
      };
      const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

      // 키워드로 장소 검색
      const keyword = '편의점'; // 검색할 키워드 설정
      const option = {
        location: map.getCenter(), // 중심 좌표 기준 검색
        radius: 9000, // 검색 반경 설정 (미터 단위)
      };

      // 카카오 장소 검색 API를 사용하여 키워드로 장소 검색
      const places = new window.kakao.maps.services.Places();
      places.keywordSearch(keyword, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          // 검색 결과가 있을 경우 마커 표시
          for (let i = 0; i < result.length; i++) {
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: new window.kakao.maps.LatLng(result[i].y, result[i].x),
            });
          }
        }
      });
    });
  }, []);

  return (
    <div>
        <p>키워드로 장소 검색</p>
        <div id="map" style={{ width: '500px', height: '500px' }}></div>
    </div>
    );
};

export default Map;

