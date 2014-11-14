/**
 * Created by lizheng on 2014-11-13.
 */
/**
 * 界面原型使用的模拟数据
 */
var disasterFeatures = new Array();
var warehouseFeatures = new Array();
var hiddenTrouleFeatures = new Array();
var sheltersFeatures = new Array();
var baseInfoFeatures = new Array();

function simulatedData(){
    /******************************************************************/
//模拟几个灾情


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
        name: '灾情1',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.disasterPoint
    });

    disasterFeatures[1] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([103.2773, 34.7099], 'EPSG:4326', 'EPSG:3857')),
        name: '灾情2',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.disasterPoint
    });

    disasterFeatures[2] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([103.4091, 37.3220], 'EPSG:4326', 'EPSG:3857')),
        name: '灾情3',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.disasterPoint
    });

    disasterFeatures[3] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([99.4437, 38.8771], 'EPSG:4326', 'EPSG:3857')),
        name: '灾情4',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.disasterPoint
    });

    disasterFeatures[4] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([94.4437, 39.8771], 'EPSG:4326', 'EPSG:3857')),
        name: '灾情5',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.disasterPoint
    });

    disasterFeatures[0].setStyle(disasterStyle);
    disasterFeatures[1].setStyle(disasterStyle);
    disasterFeatures[2].setStyle(disasterStyle);
    disasterFeatures[3].setStyle(disasterStyle);
    disasterFeatures[4].setStyle(disasterStyle);

//iconFeature.setStyle(iconStyle);

    layers.featureLayers.disasters.getSource().addFeatures(disasterFeatures);

//模拟物资库
    var warehouseStyle = new ol.style.Style({
        image: new ol.style.Icon(/* @type {olx.style.IconOptions}*/ ({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            src: 'data/icon/house_32.png'
        }))
    });

    warehouseFeatures[0] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([104.2661, 36.0001], 'EPSG:4326', 'EPSG:3857')),
        name: '物资库1',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.warehousePoint
    });

    warehouseFeatures[1] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([100.7065, 38.5695], 'EPSG:4326', 'EPSG:3857')),
        name: '物资库2',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.warehousePoint
    });

    warehouseFeatures[2] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([96.3340, 40.5179], 'EPSG:4326', 'EPSG:3857')),
        name: '物资库3',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.warehousePoint
    });



    warehouseFeatures[0].setStyle(warehouseStyle);
    warehouseFeatures[1].setStyle(warehouseStyle);
    warehouseFeatures[2].setStyle(warehouseStyle);

    layers.featureLayers.warehouses.getSource().addFeatures(warehouseFeatures);

//模拟隐患点
    var hiddenTroubleStyle = new ol.style.Style({
        image: new ol.style.Icon(/* @type {olx.style.IconOptions}*/ ({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            src: 'data/icon/hiddenTrouble_32.png'
        }))
    });

    hiddenTrouleFeatures[0] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([104.2221, 34.1844], 'EPSG:4326', 'EPSG:3857')),
        name: '隐患点1',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.hiddenTroublePoint
    });

    hiddenTrouleFeatures[1] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([105.2988, 33.7471], 'EPSG:4326', 'EPSG:3857')),
        name: '隐患点2',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.hiddenTroublePoint
    });

    hiddenTrouleFeatures[2] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([107.3642, 36.0179], 'EPSG:4326', 'EPSG:3857')),
        name: '隐患点3',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.hiddenTroublePoint
    });

    hiddenTrouleFeatures[3] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([102.8159, 38.6554], 'EPSG:4326', 'EPSG:3857')),
        name: '隐患点4',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.hiddenTroublePoint
    });

    hiddenTrouleFeatures[4] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([97.1469, 39.9475], 'EPSG:4326', 'EPSG:3857')),
        name: '隐患点5',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.hiddenTroublePoint
    });



    hiddenTrouleFeatures[0].setStyle(hiddenTroubleStyle);
    hiddenTrouleFeatures[1].setStyle(hiddenTroubleStyle);
    hiddenTrouleFeatures[2].setStyle(hiddenTroubleStyle);
    hiddenTrouleFeatures[3].setStyle(hiddenTroubleStyle);
    hiddenTrouleFeatures[4].setStyle(hiddenTroubleStyle);

    layers.featureLayers.hiddenTrouble.getSource().addFeatures(hiddenTrouleFeatures);

//模拟避难场所
    var shelterStyle = new ol.style.Style({
        image: new ol.style.Icon(/* @type {olx.style.IconOptions}*/ ({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            src: 'data/icon/shelter_32.png'
        }))
    });

    sheltersFeatures[0] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([103.7827, 36.0856], 'EPSG:4326', 'EPSG:3857')),
        name: '避难场所1',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.shelterPoint
    });

    sheltersFeatures[1] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([102.6584, 37.9292], 'EPSG:4326', 'EPSG:3857')),
        name: '避难场所2',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.shelterPoint
    });


    sheltersFeatures[0].setStyle(shelterStyle);
    sheltersFeatures[1].setStyle(shelterStyle);

    layers.featureLayers.shelters.getSource().addFeatures(sheltersFeatures);


    //基础信息
    var baseInfoStyle = new ol.style.Style({
        image: new ol.style.Icon(/* @type {olx.style.IconOptions}*/ ({
            //anchor: [0.5, 46],
            anchor: [0.5, 20],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            src: 'data/icon/star_32.png'
        }))
    });

    baseInfoFeatures[0] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([103.8244, 36.0585], 'EPSG:4326', 'EPSG:3857')),
        name: '兰州',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.baseInfoPoint
    });

    baseInfoFeatures[0].setStyle(baseInfoStyle);

    layers.featureLayers.baseInfo.getSource().addFeatures(baseInfoFeatures);

}

function getDisaster(index){
    return disasterFeatures[index];
}

function getWareHouse(index){
    return warehouseFeatures[index];
}

function getHiddenTrouble(index){
    return hiddenTrouleFeatures[index];
}

function getShelter(index){
    return sheltersFeatures[index];
}

