/**
 * Created by lizheng on 2014-11-13.
 */
/**
 * 界面原型使用的模拟数据
 */
var disasterFeatures = [];
var warehouseFeatures = [];
var hiddenTroubleFeatures = [];
var sheltersFeatures = [];
var baseInfoFeatures = [];
var expertFeatures = [];
var rescueTeamFeatures = [];
var messengerFeatures = [];

var disasterStyle = new ol.style.Style({
            image: new ol.style.Icon(/* @type {olx.style.IconOptions}*/ ({
            anchor: [0.5, 16],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            src: 'data/icon/emergency_32.png'
        }))
    });

var warehouseStyle = new ol.style.Style({
            image: new ol.style.Icon(/* @type {olx.style.IconOptions}*/ ({
            anchor: [0.5, 16],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            src: 'data/icon/house_32.png'
        }))
    });

var hiddenTroubleStyle = new ol.style.Style({
            image: new ol.style.Icon(/* @type {olx.style.IconOptions}*/ ({
            anchor: [0.5, 16],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            src: 'data/icon/hiddenTrouble_32.png'
        }))
    });

var shelterStyle = new ol.style.Style({
            image: new ol.style.Icon(/* @type {olx.style.IconOptions}*/ ({
            anchor: [0.5, 16],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 0.75,
            src: 'data/icon/shelter_32.png'
        }))
    });

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

var expertStyle = new ol.style.Style({
        image: new ol.style.Icon(/* @type {olx.style.IconOptions}*/ ({
        //anchor: [0.5, 46],
        anchor: [0.5, 20],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: 'data/icon/expert_32.png'
    }))
});

var rescueTeamStyle = new ol.style.Style({
    image: new ol.style.Icon(/* @type {olx.style.IconOptions}*/ ({
        //anchor: [0.5, 46],
        anchor: [0.5, 20],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: 'data/icon/rescueTeam_32.png'
    }))
});

var messengerStyle = new ol.style.Style({
    image: new ol.style.Icon(/* @type {olx.style.IconOptions}*/ ({
        //anchor: [0.5, 46],
        anchor: [0.5, 20],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: 'data/icon/messenger_32.png'
    }))
});

function simulatedData(){
    /******************************************************************/
//模拟几个灾情
    disasterFeatures[0] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([105.3647, 35.3576], 'EPSG:4326', 'EPSG:3857')),
        name: '甘南藏族自治州舟曲县城于2014-10-09 22:00:40发生洪涝',
        text:"昨晚10点开始，舟曲县上游突降强暴雨，雨量达到93.8毫米，大暴雨引发<br/>滑坡泥石流冲进舟曲县城，截断了城中的白龙江，形成堰塞湖",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.disasterPoint
    });

    disasterFeatures[1] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([103.2773, 34.7099], 'EPSG:4326', 'EPSG:3857')),
        name: '甘肃省兰州市城关区于2014-07-02 08:21:23发生干旱灾害',
        text:"截止目前该灾情已经造成兰州市城关区10.8万人受灾、5.28万头牲畜饮水困难、<br/>92.45万亩农作物受灾",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.disasterPoint
    });

    disasterFeatures[2] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([103.4091, 37.3220], 'EPSG:4326', 'EPSG:3857')),
        name: '甘肃省平凉市、天水市等地区于2014-03-11 09:42:23发生了冰雹灾害',
        text:"该灾害造成全省１４人死亡和大量民房倒塌、大面积农作物受损，受灾地区直接经济<br/>损失很大",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.disasterPoint
    });

    disasterFeatures[3] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([99.4437, 38.8771], 'EPSG:4326', 'EPSG:3857')),
        name: '甘肃省张掖市等地区于2014-02-12 02:20:12发生了冰雹灾害',
        text:"该灾害造成大量民房倒塌、大面积农作物受损，受灾地区直接经济损失很大",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.disasterPoint
    });

    disasterFeatures[4] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([94.4437, 39.8771], 'EPSG:4326', 'EPSG:3857')),
        name: '甘肃省白银市地区于2013-09-20 12:23:12发生干旱灾害',
        text:" 持续干旱涉及48个乡镇，415个村，2648个社，受灾群众达15.05万户，67.58万人。<br/>目前，全市除保证灌溉的130万亩水地以外，干旱山区367.98万亩耕地全部受旱，农<br/>作物面临全部绝收",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.disasterPoint
    });

    disasterFeatures.forEach(function(item, index, array){
       item.setStyle(disasterStyle);
    });

//iconFeature.setStyle(iconStyle);

    layers.featureLayers.disasters.getSource().addFeatures(disasterFeatures);

//模拟物资库


    warehouseFeatures[0] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([104.2661, 36.0001], 'EPSG:4326', 'EPSG:3857')),
        name: '名称：嘉峪关市新城镇物资储备库<br>负责人：王晓<br>负责人联系电话：0971-6124881',
        text: '保存物资',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.warehousePoint
    });

    warehouseFeatures[1] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([100.7065, 38.5695], 'EPSG:4326', 'EPSG:3857')),
        name: '名称：兰州市七里河区物资储备库<br>负责人：王晓<br>负责人联系电话：0971-6124881',
        text: '保存物资',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.warehousePoint
    });

    warehouseFeatures[2] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([96.3340, 40.5179], 'EPSG:4326', 'EPSG:3857')),
        name: '名称：嘉峪关市文殊镇物资储备库<br>负责人：王晓<br>负责人联系电话：0971-6124881',
        text: '保存物资',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.warehousePoint
    });



    warehouseFeatures[0].setStyle(warehouseStyle);
    warehouseFeatures[1].setStyle(warehouseStyle);
    warehouseFeatures[2].setStyle(warehouseStyle);

    layers.featureLayers.warehouses.getSource().addFeatures(warehouseFeatures);

//模拟隐患点

    hiddenTroubleFeatures[0] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([104.2221, 34.1844], 'EPSG:4326', 'EPSG:3857')),
        name: '隐患点1',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.hiddenTroublePoint
    });

    hiddenTroubleFeatures[1] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([105.2988, 33.7471], 'EPSG:4326', 'EPSG:3857')),
        name: '隐患点2',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.hiddenTroublePoint
    });

    hiddenTroubleFeatures[2] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([107.3642, 36.0179], 'EPSG:4326', 'EPSG:3857')),
        name: '隐患点3',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.hiddenTroublePoint
    });

    hiddenTroubleFeatures[3] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([102.8159, 38.6554], 'EPSG:4326', 'EPSG:3857')),
        name: '隐患点4',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.hiddenTroublePoint
    });

    hiddenTroubleFeatures[4] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([97.1469, 39.9475], 'EPSG:4326', 'EPSG:3857')),
        name: '隐患点5',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.hiddenTroublePoint
    });



    hiddenTroubleFeatures[0].setStyle(hiddenTroubleStyle);
    hiddenTroubleFeatures[1].setStyle(hiddenTroubleStyle);
    hiddenTroubleFeatures[2].setStyle(hiddenTroubleStyle);
    hiddenTroubleFeatures[3].setStyle(hiddenTroubleStyle);
    hiddenTroubleFeatures[4].setStyle(hiddenTroubleStyle);

    layers.featureLayers.hiddenTrouble.getSource().addFeatures(hiddenTroubleFeatures);

//模拟避难场所
    sheltersFeatures[0] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([103.7827, 36.0856], 'EPSG:4326', 'EPSG:3857')),
        name: '名称：东方红广场<br>类型：广场<br>地址：甘肃省兰州市永登县<br>容纳人数（人）:1000',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.shelterPoint
    });

    sheltersFeatures[1] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([102.6584, 37.9292], 'EPSG:4326', 'EPSG:3857')),
        name: '名称：伏羲广场<br>类型：广场<br>地址：甘肃省酒泉市金塔县<br>容纳人数（人）:2000',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.shelterPoint
    });


    sheltersFeatures[0].setStyle(shelterStyle);
    sheltersFeatures[1].setStyle(shelterStyle);

    layers.featureLayers.shelters.getSource().addFeatures(sheltersFeatures);


    //基础信息
    baseInfoFeatures[0] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([103.8244, 36.0585], 'EPSG:4326', 'EPSG:3857')),
        name: '兰州',
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.baseInfoPoint
    });

    baseInfoFeatures[0].setStyle(baseInfoStyle);

    layers.featureLayers.baseInfo.getSource().addFeatures(baseInfoFeatures);


    //模拟专家信息
    expertFeatures[0] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([103.9434, 36.0601], 'EPSG:4326', 'EPSG:3857')),
        name: '专家信息',
        text:"专家1",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.expertPoint
    });
    expertFeatures[1] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([104.1356, 36.5603], 'EPSG:4326', 'EPSG:3857')),
        name: '专家信息',
        text:"专家2",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.expertPoint
    });
    expertFeatures[2] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([102.6470, 37.9138], 'EPSG:4326', 'EPSG:3857')),
        name: '专家信息',
        text:"专家3",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.expertPoint
    });
    expertFeatures.forEach(function(item, index, array){
       item.setStyle(expertStyle);
    });
    layers.featureLayers.expert.getSource().addFeatures(expertFeatures);

    //模拟救援队伍信息
    rescueTeamFeatures[0] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([102.2885, 37.7489], 'EPSG:4326', 'EPSG:3857')),
        name: '名称：甘肃省地震队<br>负责人：肖志<br>负责人联系电话：0971-6124881',
        text:"救援1",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.rescueTeamPoint
    });

    rescueTeamFeatures[1] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([103.8582, 36.2808], 'EPSG:4326', 'EPSG:3857')),
        name: '名称：甘肃省地震队<br>负责人：肖志<br>负责人联系电话：0971-6124881',
        text:"救援2",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.rescueTeamPoint
    });

    rescueTeamFeatures[2] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([104.6059, 35.6112], 'EPSG:4326', 'EPSG:3857')),
        name: '名称：甘肃省地震队<br>负责人：肖志<br>负责人联系电话：0971-6124881',
        text:"救援3",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.rescueTeamPoint
    });

    rescueTeamFeatures[3] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([105.6180, 34.5990], 'EPSG:4326', 'EPSG:3857')),
        name: '名称：甘肃省地震队<br>负责人：肖志<br>负责人联系电话：0971-6124881',
        text:"救援4",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.rescueTeamPoint
    });

    rescueTeamFeatures.forEach(function (item, index, array) {
        item.setStyle(rescueTeamStyle);
    });
    layers.featureLayers.rescueTeam.getSource().addFeatures(rescueTeamFeatures);

    //模拟灾害信息员
    messengerFeatures[0] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([97.6303, 39.7198], 'EPSG:4326', 'EPSG:3857')),
        name: '灾害信息员',
        text:"灾害信息员1",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.messengerPoint
    });

    messengerFeatures[1] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([107.6356,35.7081], 'EPSG:4326', 'EPSG:3857')),
        name: '灾害信息员',
        text:"灾害信息员2",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.messengerPoint
    });
    messengerFeatures[2] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([104.8891,33.4103], 'EPSG:4326', 'EPSG:3857')),
        name: '灾害信息员',
        text:"灾害信息员3",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.messengerPoint
    });
    messengerFeatures[3] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([103.2088,35.6000], 'EPSG:4326', 'EPSG:3857')),
        name: '灾害信息员',
        text:"灾害信息员4",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.messengerPoint
    });
    messengerFeatures[4] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([102.8847,37.5117], 'EPSG:4326', 'EPSG:3857')),
        name: '灾害信息员',
        text:"灾害信息员5",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.messengerPoint
    });
    messengerFeatures[5] = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.transform([102.1228,38.4922], 'EPSG:4326', 'EPSG:3857')),
        name: '灾害信息员',
        text:"灾害信息员6",
        population: 4000,
        rainfall: 500,
        type: vectorFeatures.messengerPoint
    });

    messengerFeatures.forEach(function (item, index, array) {
        item.setStyle(messengerStyle);
    });
    layers.featureLayers.messenger.getSource().addFeatures(messengerFeatures);

}

function getDisaster(index){
    return disasterFeatures[index];
}

function getWareHouse(index){
    return warehouseFeatures[index];
}

function getHiddenTrouble(index){
    return hiddenTroubleFeatures[index];
}

function getShelter(index){
    return sheltersFeatures[index];
}

function getBaseInfo(index){
    return baseInfoFeatures[index];
}

function getExpert(index){
    return expertFeatures[index];
}

function getRescueTeam(index){
    return rescueTeamFeatures[index];
}

function getMessenger(index){
    return messengerFeatures[index];
}


function featurePlot(featureType){

    switch(featureType){
        case vectorFeatures.disasterPoint:
            if(!layers.featureLayers.disasters.getVisible()){
                $("#chkDisasterLayerShow").click();
            }
            draw = new ol.interaction.Draw({
                source: layers.featureLayers.disasters.getSource(),
                type: /** @type {ol.geom.GeometryType} */ (ol.geom.GeometryType.POINT),
                style: disasterStyle
            });
            map.addInteraction(draw);

            draw.on('drawend',
                function(evt) {
                    evt.feature.setStyle(disasterStyle);
                    map.removeInteraction(draw);
                }, this);
            break;
        case vectorFeatures.warehousePoint:
            if(!layers.featureLayers.warehouses.getVisible()){
                $("#chkWarehouseLayerShow").click();
            }
            draw = new ol.interaction.Draw({
                source: layers.featureLayers.warehouses.getSource(),
                type: /** @type {ol.geom.GeometryType} */ (ol.geom.GeometryType.POINT),
                style: warehouseStyle
            });
            map.addInteraction(draw);

            draw.on('drawend',
                function(evt) {
                    evt.feature.setStyle(warehouseStyle);
                    map.removeInteraction(draw);
                }, this);
            break;
        case vectorFeatures.hiddenTroublePoint:
            if(!layers.featureLayers.hiddenTrouble.getVisible()){
                $("#chkHiddenTroubleLayerShow").click();
            }
            draw = new ol.interaction.Draw({
                source: layers.featureLayers.hiddenTrouble.getSource(),
                type: /** @type {ol.geom.GeometryType} */ (ol.geom.GeometryType.POINT),
                style: hiddenTroubleStyle
            });
            map.addInteraction(draw);

            draw.on('drawend',
                function(evt) {
                    evt.feature.setStyle(hiddenTroubleStyle);
                    map.removeInteraction(draw);
                }, this);
            break;
        case vectorFeatures.shelterPoint:
            if(!layers.featureLayers.shelters.getVisible()){
                $("#chkSheltersLayerShow").click();
            }
            draw = new ol.interaction.Draw({
                source: layers.featureLayers.shelters.getSource(),
                type: /** @type {ol.geom.GeometryType} */ (ol.geom.GeometryType.POINT),
                style: shelterStyle
            });
            map.addInteraction(draw);

            draw.on('drawend',
                function(evt) {
                    evt.feature.setStyle(shelterStyle);
                    map.removeInteraction(draw);
                }, this);
            break;
    }
}
