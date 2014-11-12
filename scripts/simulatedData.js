/**
 * Created by lizheng on 2014-11-13.
 */
/**
 * 界面原型使用的模拟数据
 */

function simulatedData(){
    /******************************************************************/
//模拟几个灾情
    var disasterFeatures = new Array();

    var disasterStyle = new ol.style.Style({
        image: new ol.style.Icon(/* @type {olx.style.IconOptions}*/ ({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            src: 'data/icon/emergency_32.png'
        }))
    });

    disasterFeatures[0] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([105.3647, 35.3576], 'EPSG:4326', 'EPSG:3857')),
        name: 'Null Island1',
        population: 4000,
        rainfall: 500,
        type: ol.geom.GeometryType.POINT
    });

    disasterFeatures[1] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([103.2773, 34.7099], 'EPSG:4326', 'EPSG:3857')),
        name: 'Null Island2',
        population: 4000,
        rainfall: 500,
        type: ol.geom.GeometryType.POINT
    });

    disasterFeatures[2] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([103.4091, 37.3220], 'EPSG:4326', 'EPSG:3857')),
        name: 'Null Island3',
        population: 4000,
        rainfall: 500,
        type: ol.geom.GeometryType.POINT
    });

    disasterFeatures[3] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([99.4437, 38.8771], 'EPSG:4326', 'EPSG:3857')),
        name: 'Null Island4',
        population: 4000,
        rainfall: 500,
        type: ol.geom.GeometryType.POINT
    });

    disasterFeatures[4] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([94.4437, 39.8771], 'EPSG:4326', 'EPSG:3857')),
        name: 'Null Island5',
        population: 4000,
        rainfall: 500,
        type: ol.geom.GeometryType.POINT
    });

    disasterFeatures[0].setStyle(disasterStyle);
    disasterFeatures[1].setStyle(disasterStyle);
    disasterFeatures[2].setStyle(disasterStyle);
    disasterFeatures[3].setStyle(disasterStyle);
    disasterFeatures[4].setStyle(disasterStyle);

//iconFeature.setStyle(iconStyle);

    layers.featureLayers.disasters.getSource().addFeatures(disasterFeatures);

//模拟物资库
    var warehouseFeatures;
    var warehouseStyle = new ol.style.Style({
        image: new ol.style.Icon(/* @type {olx.style.IconOptions}*/ ({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            src: 'data/icon/house_32.png'
        }))
    });

//模拟隐患点
    var hiddenTrouleFeatures;
    var hiddenTroubleStyle = new ol.style.Style({
        image: new ol.style.Icon(/* @type {olx.style.IconOptions}*/ ({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            src: 'data/icon/hiddenTrouble_32.png'
        }))
    });

//模拟避难场所
    var sheltersFeatures;
    var shelterStyle = new ol.style.Style({
        image: new ol.style.Icon(/* @type {olx.style.IconOptions}*/ ({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            src: 'data/icon/shelter_32.png'
        }))
    });

}