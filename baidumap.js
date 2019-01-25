//全局变量
var mapData = {};
var typeId=null;
var pestTypeId=null;
var map = new BMap.Map("allmap", { mapType: BMAP_HYBRID_MAP });
// $.getJSON('custom_map_config1.json', function (data) {
// 	map.setMapStyleV2({ styleJson: data });
// });
$.getJSON('static/front/data/mapData.json', function (data) {
	mapData = data;
    $(".farmland").html(farmland1((data.farmland)[0]));
    (data.farmland)[0].img.forEach(function (item, index) {
        $('.imgList').append(farmlandImg(item))
    })
    $(".cooperative").html(farmland((data.cooperative)[0]));
    (data.cooperative)[0].img.forEach(function (item, index) {
        $('.cooperative .imgList').append(farmlandImg(item))
    })
});
// map.setMapStyle({style:'darkgreen'});
var point = new BMap.Point(109.892887, 30.510033);
map.centerAndZoom(point, 11);
map.enableScrollWheelZoom();
function theLocation() {
	map.centerAndZoom(new BMap.Point(109.892887, 30.510033), 11);
}
map.addControl(new BMap.MapTypeControl({ mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP] }));
var bdary = new BMap.Boundary().get("建始", function (rs) {
	//获取行政区域  
	var count = rs.boundaries.length; //行政区域的点有多少个
	var pointArray = [];
	for (var i = 0; i < count; i++) {
		var ply = new BMap.Polygon(rs.boundaries[i], { strokeWeight: 2, strokeOpacity: 0.8, strokeColor: "#ff0000", fillOpacity: 0.1 }); //建立多边形覆盖物
		map.addOverlay(ply);  //添加覆盖物
		pointArray = pointArray.concat(ply.getPath());
	}
	// map.setViewport(pointArray);    //调整视野                
});
var iconMap = [{ "id": 1, "name": "点1", "lng": 109.80435, "lat": 30.73081, 'img': 'static/front/img/map-small-dian.png' },
{ "id": 2, "name": "点2", "lng": 109.984873, "lat": 30.649321, 'img': 'static/front/img/map-small-dian.png' },
{ "id": 3, "name": "点3", "lng": 110.023968, "lat": 30.415401, 'img': 'static/front/img/map-small-dian.png' },
{ "id": 4, "name": "点4", "lng": 109.771005, "lat": 30.682124, 'img': 'static/front/img/map-small-dian.png' },
{ "id": 5, "name": "点5", "lng": 109.771005, "lat": 30.802304, 'img': 'static/front/img/map-small-dian.png' }];
var iconMap1 = [
{ "id": 1, "name": "点2", "lng": 109.904873, "lat": 30.619321, 'img': 'static/front/img/map-small-dian.png' },
{ "id": 2, "name": "点3", "lng": 110.013968, "lat": 30.425401, 'img': 'static/front/img/map-small-dian.png' },
{ "id": 3, "name": "点4", "lng": 109.721005, "lat": 30.632124, 'img': 'static/front/img/map-small-dian.png' },
{ "id": 4, "name": "点5", "lng": 110.013968, "lat": 30.802304, 'img': 'static/front/img/map-small-dian.png' }];
var iconMap2 = [
    { "id": 1, "name": "点2", "lng": 109.904873, "lat": 30.619321, 'img': 'static/front/img/dwd_mr_wlw.png' },
    { "id": 2, "name": "点3", "lng": 110.013968, "lat": 30.425401, 'img': 'static/front/img/dwd_mr_wlw.png' },
    { "id": 3, "name": "点4", "lng": 109.721005, "lat": 30.632124, 'img': 'static/front/img/dwd_mr_wlw.png' },
    { "id": 4, "name": "点5", "lng": 110.013968, "lat": 30.802304, 'img': 'static/front/img/dwd_mr_wlw.png' }];
var iconMap3 = [
    { "id": 1, "name": "点2", "lng": 109.904873, "lat": 30.619321, 'img': 'static/front/img/dwd_mr_bch.png' },
    { "id": 2, "name": "点3", "lng": 110.013968, "lat": 30.425401, 'img': 'static/front/img/dwd_mr_bch.png' },
    { "id": 3, "name": "点4", "lng": 109.721005, "lat": 30.632124, 'img': 'static/front/img/dwd_mr_bch.png' },
    { "id": 4, "name": "点5", "lng": 110.013968, "lat": 30.802304, 'img': 'static/front/img/dwd_mr_bch.png' }];
var personMarker = [];
function onc(id) {
	clearAll()
	if (id == 1) {
		for (var i = 0; i < iconMap.length; i++) {
			var point = new BMap.Point(iconMap[i].lng, iconMap[i].lat);
			var myIcon = new BMap.Icon(iconMap[i].img, new BMap.Size(62, 62), // 视窗大小
				{
					imageSize: new BMap.Size(62, 62), // 引用图片实际大小
					imageOffset: new BMap.Size(0, 0)  // 图片相对视窗的偏移
				}
			);
			var marker = new BMap.Marker(point, { icon: myIcon });
			addMarker(marker, iconMap[i].id, iconMap[i].name,1,iconMap[i]);
		}

	}
	if (id == 2) {
		for (var j = 0; j < iconMap1.length; j++) {
			var point1 = new BMap.Point(iconMap1[j].lng, iconMap1[j].lat);
			var myIcon1 = new BMap.Icon(iconMap1[j].img, new BMap.Size(62, 62), // 视窗大小
				{
					imageSize: new BMap.Size(62, 62), // 引用图片实际大小
					imageOffset: new BMap.Size(0, 0)  // 图片相对视窗的偏移
				}
			);
			var marker1 = new BMap.Marker(point1, { icon: myIcon1 });
			addMarker(marker1, iconMap1[j].id, iconMap1[j].name,2,iconMap1[j]);
		}

	}
	if (id == 3) {
		for (var i = 0; i < iconMap2.length; i++) {
			var point = new BMap.Point(iconMap2[i].lng, iconMap2[i].lat);
			var myIcon = new BMap.Icon(iconMap2[i].img, new BMap.Size(62, 62), // 视窗大小
				{
					imageSize: new BMap.Size(62, 62), // 引用图片实际大小
					imageOffset: new BMap.Size(0, 0)  // 图片相对视窗的偏移
				}
			);
			var marker = new BMap.Marker(point, { icon: myIcon });
			addMarker(marker, iconMap2[i].id, iconMap2[i].name,3,iconMap2[i]);
		}
        $('.equipment ul').eq(0).show()
        $('.videoList').hide()
        $('.control').hide()
	}
	if (id == 4) {
		for (var i = 0; i < iconMap3.length; i++) {
			var point = new BMap.Point(iconMap3[i].lng, iconMap3[i].lat);
			var myIcon = new BMap.Icon(iconMap3[i].img, new BMap.Size(62, 62), // 视窗大小
				{
					imageSize: new BMap.Size(62, 62), // 引用图片实际大小
					imageOffset: new BMap.Size(0, 0)  // 图片相对视窗的偏移
				}
			);
			var marker = new BMap.Marker(point, { icon: myIcon });
			addMarker(marker, iconMap3[i].id, iconMap3[i].name,4);
		}
        $('.pest ul').eq(0).hide()
        $('.bchState').show()
        $('.bchControl').hide()
	}
}

for (var i = 0; i < iconMap.length; i++) {
	var point = new BMap.Point(iconMap[i].lng, iconMap[i].lat);
	var myIcon = new BMap.Icon(iconMap[i].img, new BMap.Size(62, 62), // 视窗大小
		{
			imageSize: new BMap.Size(62, 62), // 引用图片实际大小
			imageOffset: new BMap.Size(0, 0)  // 图片相对视窗的偏移
		}
	);
	var marker = new BMap.Marker(point, { icon: myIcon });
	addMarker(marker, iconMap[i].id, iconMap[i].name);
}
// 编写自定义函数,创建标注
onc(1)
function addMarker(marker, id, name,type,items) {
	var marker = marker;

    if(type==3){
        var infoWindow = new BMap.InfoWindow(sContent(name));  // 创建信息窗口对象
    }else if(type==4){
        var infoWindow = new BMap.InfoWindow(sContent1(name));  // 创建信息窗口对象
    }
	/*marker.addEventListener("mouseover", function () {
		this.openInfoWindow(new BMap.InfoWindow(name));
		//图片加载完毕重绘infowindow
		// document.getElementById('imgDemo').onload = function () {
		// 	infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
		// }
	});
	marker.addEventListener("mouseout", function () {
		this.closeInfoWindow();
	});*/
	marker.addEventListener("click", function () {
        console.log(items)
        /*var data = mapData.farmland;
        data.forEach(function (item, index) {
            if (id == item.id) {
                $(".farmland").html(farmland(item))
                item.img.forEach(function (item, index) {
                    $('.farmland .imgList').append(farmlandImg(item))
                })
            }
        })*/
	    if(type==3||type==4){
            this.openInfoWindow(infoWindow);
        }
        iconMap.forEach(function(item){
            item.img='static/front/img/map-small-dian.png'
        })
        iconMap1.forEach(function(item){
            item.img='static/front/img/map-small-dian.png'
        })
        iconMap2.forEach(function(item){
            item.img='static/front/img/dwd_mr_wlw.png'
        })
	    if(type==1){
            items.img='static/front/img/dwd_nt.gif'
            onc(1)
            var data = mapData.farmland;
            data.forEach(function (item, index) {
                if (id == item.id) {
                    $(".farmland").html(farmland1(item))
                    item.img.forEach(function (item, index) {
                        $('.farmland .imgList').append(farmlandImg(item))
                    })
                }
            })
        }else if(type==2){
            items.img='static/front/img/dwd_nt.gif'
            onc(2)
            var cooperative = mapData.cooperative;
            cooperative.forEach(function (items, index) {
                if (id == items.id) {
                    $(".cooperative").html(farmland(items))
                    items.img.forEach(function (item, index) {
                        $('.cooperative .imgList').append(farmlandImg(item))
                    })
                }
            })
        }else if(type==3){
            typeId=id
        }else if(type==4){
            pestTypeId = id
        }

	});

	map.addOverlay(marker);
	personMarker.push(marker);
}
//获取覆盖物位置
function attribute(e) {
	var p = e.target;
	alert("marker的位置是" + p.getPosition().lng + "," + p.getPosition().lat);
}

function sContent(name) {
	// var sContent = "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>" + name + "</h4></div>";
    var sContent = '<div class="dn">'+
                        '<ul>'+
                        '<li onclick="itemList(1,this)" class="backCol">环境</li>'+
                        '<li onclick="itemList(2,this)">视频</li>'+
                         '<li onclick="itemList(3,this)">控制</li>'+
                        '</ul>'+
                    '</div>';

	return sContent;
}
function sContent1(name) {
    // var sContent = "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>" + name + "</h4></div>";
    return '<div class="dn">'+
        '<ul>'+
        '<li onclick="itemList(1,this)">环境</li>'+
        '<li onclick="itemList(2,this)" class="backCol">状态</li>'+
        '<li onclick="itemList(3,this)">控制</li>'+
        '</ul>'+
        '</div>';
}
function clearAll() {
	for (var i = 0; i < personMarker.length; i++) {
		map.removeOverlay(personMarker[i]);
	}
	personMarker = [];
}
function farmland(item) {
	return '<em>名称： <span>' + item.name + '</span></em>' +
		'<em>电话： <span>' + item.Telephone + '</span></em>' +
		'<em>产业: <span>' + item.industry + '</span></em>' +
		'<em>面积： <span>' + item.acreage + '</span></em>' +
		'<p>乡镇: <i>' + item.Township + '</i></p>' +
		'<p>官网： <a href="' + item.officialWeb + '">' + item.officialWeb + '</a></p>' +
		'<p>地址： <i>' + item.address + '</i></p>' +
		'<div class="clearfix">' +
		'<p style="float: left;height: 120px;">简介：</p>' +
		'<i style="float: left;height: 120px; width: 80%;margin-top: 20px;overflow:hidden">' + item.describe + '</i>' +
		'</div>' +
		'<p>产品图：</p>' +
		'<div class="imgList">' +
		'</div>'
}

function farmland1(item) {
    return '<em>户主： <span>' + item.name + '</span></em>' +
        '<em>户主文化程度： <span>' + item.culture + '</span></em>' +
        '<em>家庭人口: <span>' + item.population + '人</span></em>' +
        '<em>是否贫困户： <span>' + item.poor + '</span></em>' +
        '<em>耕地面积： <span>' + item.acreage + '</span></em>' +
        '<em>主要农作物： <span>' + item.industry + '</span></em>' +
        '<p>联系电话： <i>' + item.Telephone + '</i></p>' +
        '<p>所在地： <i>' + item.address + '</i></p>' +
        '<p>作物图：</p>' +
        '<div class="imgList">' +
        '</div>'
}
function farmlandImg(item) {
	return '<img src="' + item + '" alt="">'
}


//物联网设备环境HTML
function equipmentHuanJing(item){
    return '<li class="clearfix" onclick="map_detail(7)">'+
                '<em></em>'+
                '<div class="pestInfo">'+
                '<p>风速</p>'+
                '<span>'+item.windSpeed+'<i>m/s</i></span>'+
            '</div>'+
            '</li>'+
            '<li  onclick="map_detail(8)">'+
                '<em></em>'+
                '<div class="pestInfo">'+
                '<p>雨量</p>'+
                '<span>'+item.rainfall+'<i>mm</i></span>'+
            '</div>'+
            '</li>'+
            '<li  onclick="map_detail(9)">'+
                '<em></em>'+
                '<div class="pestInfo">'+
                '<p>大气温度</p>'+
                '<span>'+item.atmosphericT+'<i>°C</i></span>'+
            '</div>'+
            '</li>'+
            '<li  onclick="map_detail(10)">'+
                '<em></em>'+
                '<div class="pestInfo">'+
                '<p>大气湿度</p>'+
                '<span>'+item.atmosphericH+'<i>RH</i></span>'+
            '</div>'+
            '</li>'+
            '<li  onclick="map_detail(11)">'+
                '<em></em>'+
                '<div class="pestInfo">'+
                '<p>数字气压</p>'+
                '<span>'+item.pressure+'<i>hpa</i></span>'+
            '</div>'+
            '</li>'+
            '<li  onclick="map_detail(12)">'+
                '<em></em>'+
                '<div class="pestInfo">'+
                '<p>简易总辐射</p>'+
                '<span>'+item.radiation+'<i>w/㎡</i></span>'+
            '</div>'+
            '</li>'+
            '<li  onclick="map_detail(13)">'+
                '<em></em>'+
                '<div class="pestInfo">'+
                '<p>风向</p>'+
                '<span>'+item.windDirection+'</span>'+
            '</div>'+
            '</li>'+
            '<li  onclick="map_detail(14)">'+
                '<em></em>'+
                '<div class="pestInfo">'+
                '<p>雨量累计</p>'+
                '<span>'+item.rainfallAcc+'<i>mm</i></span>'+
            '</div>'+
            '</li>'+
            '<li  onclick="map_detail(15)">'+
                '<em></em>'+
                '<div class="pestInfo">'+
                '<p>土壤温度</p>'+
                '<span>'+item.soilT+'<i>°C</i></span>'+
            '</div>'+
            '</li>'+
            '<li  onclick="map_detail(16)">'+
                '<em></em>'+
                '<div class="pestInfo">'+
                '<p>土壤湿度</p>'+
                '<span>'+item.soilH+'<i>RH</i></span>'+
            '</div>'+
            '</li>'
}

//害虫环境HTML
function pestHuanJing(item){
    return '<li class="clearfix" onclick="map_detail(1)">'+
        '<em></em>'+
        '<div class="pestInfo">'+
        '<p>空气温度</p>'+
        '<span>'+item.atmosphericT+'<i>°C</i></span>'+
    '</div>'+
    '</li>'+
    '<li onclick="map_detail(2)">'+
        '<em></em>'+
        '<div class="pestInfo">'+
        '<p>空气湿度</p>'+
        '<span>'+item.atmosphericH+'<i>RH</i></span>'+
    '</div>'+
    '</li>'+
    '<li onclick="map_detail(3)">'+
        '<em></em>'+
        '<div class="pestInfo">'+
        '<p>CO2含量</p>'+
        '<span>'+item.CO+'</span>'+
        '</div>'+
        '</li>'+
        '<li onclick="map_detail(4)">'+
        '<em></em>'+
        '<div class="pestInfo">'+
        '<p>土壤温度</p>'+
        '<span>'+item.soilT+'<i>°C</i></span>'+
    '</div>'+
    '</li>'+
    '<li onclick="map_detail(5)">'+
        '<em></em>'+
        '<div class="pestInfo">'+
        '<p>土壤湿度</p>'+
        '<span>'+item.soilH+'<i>RH</i></span>'+
    '</div>'+
    '</li>'+
    '<li onclick="map_detail(6)">'+
        '<em></em>'+
        '<div class="pestInfo">'+
        '<p>土壤PH值</p>'+
        '<span>'+item.PH+'</span>'+
        '</div>'+
        '</li>'
}
function itemList(value,dom){
    $(dom).addClass("backCol").siblings().removeClass("backCol");
    if(value==1){
        $('.equipment ul').eq(0).show()
        $('.videoList').hide()
        $('.control').hide()

        $('.pest ul').eq(0).show()
        $('.bchState').hide()
        $('.bchControl').hide()
        var equipment = mapData.equipment;
        equipment.forEach(function (items, index) {
            if (typeId == items.id) {
                $(".huanjing").html(equipmentHuanJing(items))
            }
        })
        var pest = mapData.pest;
        pest.forEach(function (items, index) {
            if (pestTypeId == items.id) {
                $(".pest ul").eq(0).html(pestHuanJing(items))
            }
        })
    }else if(value==2){
        $('.equipment ul').eq(0).hide()
        $('.videoList').show()
        $('.control').hide()

        $('.pest ul').eq(0).hide()
        $('.bchState').show()
        $('.bchControl').hide()

    }else if(value==3){
        $('.equipment ul').eq(0).hide()
        $('.videoList').hide()
        $('.control').show()

        $('.pest ul').eq(0).hide()
        $('.bchState').hide()
        $('.bchControl').show()
    }
}

//地图导航切换
$('.mapDetails').eq(0).show()
$('.mapNav span').click(function () {
    $('.mapDetails').hide();
    $('.yx_map_alert').hide();
    $(this).addClass("col").siblings().removeClass("col");
    $('.mapDetails').eq($(this).index()).show()
})
//单击获取点击的经纬度
// map.addEventListener("click", function (e) {
// 	alert(e.point.lng + "," + e.point.lat);
// });