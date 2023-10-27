ymaps.ready(init);
        function init() {
            var myMap = new ymaps.Map("map", {
                center: [55.760221, 37.618561],
                zoom: 15
            });
            var myPlacemark = new ymaps.Placemark([55.760221, 37.618561], {
                balloonContent: 'Большой театр',
                iconColor: '#ff0000'});
        myMap.geoObjects.add(myPlacemark);
            myMap.controls.remove('searchControl'); // удаляем поиск
            myMap.controls.remove('trafficControl'); // удаляем контроль трафика
            myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    }