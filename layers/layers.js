var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_WindangtoSkiPark_1 = new ol.format.GeoJSON();
var features_WindangtoSkiPark_1 = format_WindangtoSkiPark_1.readFeatures(json_WindangtoSkiPark_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WindangtoSkiPark_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WindangtoSkiPark_1.addFeatures(features_WindangtoSkiPark_1);
var lyr_WindangtoSkiPark_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WindangtoSkiPark_1, 
                style: style_WindangtoSkiPark_1,
                popuplayertitle: 'Windang to Ski Park',
                interactive: true,
                title: '<img src="styles/legend/WindangtoSkiPark_1.png" /> Windang to Ski Park'
            });
var format_WarrawongtoPortKembla_2 = new ol.format.GeoJSON();
var features_WarrawongtoPortKembla_2 = format_WarrawongtoPortKembla_2.readFeatures(json_WarrawongtoPortKembla_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WarrawongtoPortKembla_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WarrawongtoPortKembla_2.addFeatures(features_WarrawongtoPortKembla_2);
var lyr_WarrawongtoPortKembla_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WarrawongtoPortKembla_2, 
                style: style_WarrawongtoPortKembla_2,
                popuplayertitle: 'Warrawong to Port Kembla',
                interactive: true,
                title: '<img src="styles/legend/WarrawongtoPortKembla_2.png" /> Warrawong to Port Kembla'
            });
var format_WarrawongtoKembleGrange_3 = new ol.format.GeoJSON();
var features_WarrawongtoKembleGrange_3 = format_WarrawongtoKembleGrange_3.readFeatures(json_WarrawongtoKembleGrange_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WarrawongtoKembleGrange_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WarrawongtoKembleGrange_3.addFeatures(features_WarrawongtoKembleGrange_3);
var lyr_WarrawongtoKembleGrange_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WarrawongtoKembleGrange_3, 
                style: style_WarrawongtoKembleGrange_3,
                popuplayertitle: 'Warrawong to Kemble Grange',
                interactive: true,
    title: 'Warrawong to Kemble Grange<br />\
    <img src="styles/legend/WarrawongtoKembleGrange_3_0.png" /> blue<br />\
    <img src="styles/legend/WarrawongtoKembleGrange_3_1.png" /> yellow<br />\
    <img src="styles/legend/WarrawongtoKembleGrange_3_2.png" /> <br />' });
var format_SkiParktoShellharboutNorth_4 = new ol.format.GeoJSON();
var features_SkiParktoShellharboutNorth_4 = format_SkiParktoShellharboutNorth_4.readFeatures(json_SkiParktoShellharboutNorth_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SkiParktoShellharboutNorth_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SkiParktoShellharboutNorth_4.addFeatures(features_SkiParktoShellharboutNorth_4);
var lyr_SkiParktoShellharboutNorth_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SkiParktoShellharboutNorth_4, 
                style: style_SkiParktoShellharboutNorth_4,
                popuplayertitle: 'Ski Park to Shellharbout North',
                interactive: true,
    title: 'Ski Park to Shellharbout North<br />\
    <img src="styles/legend/SkiParktoShellharboutNorth_4_0.png" /> blue<br />\
    <img src="styles/legend/SkiParktoShellharboutNorth_4_1.png" /> oragne<br />\
    <img src="styles/legend/SkiParktoShellharboutNorth_4_2.png" /> yellow<br />\
    <img src="styles/legend/SkiParktoShellharboutNorth_4_3.png" /> <br />' });
var format_ShellharbourtoMinamurra_5 = new ol.format.GeoJSON();
var features_ShellharbourtoMinamurra_5 = format_ShellharbourtoMinamurra_5.readFeatures(json_ShellharbourtoMinamurra_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShellharbourtoMinamurra_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShellharbourtoMinamurra_5.addFeatures(features_ShellharbourtoMinamurra_5);
var lyr_ShellharbourtoMinamurra_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShellharbourtoMinamurra_5, 
                style: style_ShellharbourtoMinamurra_5,
                popuplayertitle: 'Shellharbour to Minamurra',
                interactive: true,
    title: 'Shellharbour to Minamurra<br />\
    <img src="styles/legend/ShellharbourtoMinamurra_5_0.png" /> Dark Blue<br />\
    <img src="styles/legend/ShellharbourtoMinamurra_5_1.png" /> Yellow<br />\
    <img src="styles/legend/ShellharbourtoMinamurra_5_2.png" /> <br />\
    <img src="styles/legend/ShellharbourtoMinamurra_5_3.png" /> Purple<br />' });
var format_ShellharbourNtoWindang_6 = new ol.format.GeoJSON();
var features_ShellharbourNtoWindang_6 = format_ShellharbourNtoWindang_6.readFeatures(json_ShellharbourNtoWindang_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShellharbourNtoWindang_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShellharbourNtoWindang_6.addFeatures(features_ShellharbourNtoWindang_6);
var lyr_ShellharbourNtoWindang_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShellharbourNtoWindang_6, 
                style: style_ShellharbourNtoWindang_6,
                popuplayertitle: 'Shellharbour N to Windang',
                interactive: true,
    title: 'Shellharbour N to Windang<br />\
    <img src="styles/legend/ShellharbourNtoWindang_6_0.png" /> blue<br />\
    <img src="styles/legend/ShellharbourNtoWindang_6_1.png" /> Yellow<br />\
    <img src="styles/legend/ShellharbourNtoWindang_6_2.png" /> <br />' });
var format_MinamurratoBombo_7 = new ol.format.GeoJSON();
var features_MinamurratoBombo_7 = format_MinamurratoBombo_7.readFeatures(json_MinamurratoBombo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MinamurratoBombo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MinamurratoBombo_7.addFeatures(features_MinamurratoBombo_7);
var lyr_MinamurratoBombo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MinamurratoBombo_7, 
                style: style_MinamurratoBombo_7,
                popuplayertitle: 'Minamurra to Bombo',
                interactive: true,
                title: '<img src="styles/legend/MinamurratoBombo_7.png" /> Minamurra to Bombo'
            });
var format_KembaGrangetoYallah_8 = new ol.format.GeoJSON();
var features_KembaGrangetoYallah_8 = format_KembaGrangetoYallah_8.readFeatures(json_KembaGrangetoYallah_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KembaGrangetoYallah_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KembaGrangetoYallah_8.addFeatures(features_KembaGrangetoYallah_8);
var lyr_KembaGrangetoYallah_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KembaGrangetoYallah_8, 
                style: style_KembaGrangetoYallah_8,
                popuplayertitle: 'Kemba Grange to Yallah',
                interactive: true,
    title: 'Kemba Grange to Yallah<br />\
    <img src="styles/legend/KembaGrangetoYallah_8_0.png" /> blue<br />\
    <img src="styles/legend/KembaGrangetoYallah_8_1.png" /> yellow<br />\
    <img src="styles/legend/KembaGrangetoYallah_8_2.png" /> <br />\
    <img src="styles/legend/KembaGrangetoYallah_8_3.png" /> Light Blue<br />' });
var format_DunmoretoCroomRoad_9 = new ol.format.GeoJSON();
var features_DunmoretoCroomRoad_9 = format_DunmoretoCroomRoad_9.readFeatures(json_DunmoretoCroomRoad_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DunmoretoCroomRoad_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DunmoretoCroomRoad_9.addFeatures(features_DunmoretoCroomRoad_9);
var lyr_DunmoretoCroomRoad_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DunmoretoCroomRoad_9, 
                style: style_DunmoretoCroomRoad_9,
                popuplayertitle: 'Dunmore to Croom Road',
                interactive: true,
                title: '<img src="styles/legend/DunmoretoCroomRoad_9.png" /> Dunmore to Croom Road'
            });
var format_AlbionParktoCroomRoad_10 = new ol.format.GeoJSON();
var features_AlbionParktoCroomRoad_10 = format_AlbionParktoCroomRoad_10.readFeatures(json_AlbionParktoCroomRoad_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbionParktoCroomRoad_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbionParktoCroomRoad_10.addFeatures(features_AlbionParktoCroomRoad_10);
var lyr_AlbionParktoCroomRoad_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbionParktoCroomRoad_10, 
                style: style_AlbionParktoCroomRoad_10,
                popuplayertitle: 'Albion Park to Croom Road',
                interactive: true,
    title: 'Albion Park to Croom Road<br />\
    <img src="styles/legend/AlbionParktoCroomRoad_10_0.png" /> Blue<br />\
    <img src="styles/legend/AlbionParktoCroomRoad_10_1.png" /> Pink<br />\
    <img src="styles/legend/AlbionParktoCroomRoad_10_2.png" /> <br />\
    <img src="styles/legend/AlbionParktoCroomRoad_10_3.png" /> blue<br />\
    <img src="styles/legend/AlbionParktoCroomRoad_10_4.png" /> Yellow<br />\
    <img src="styles/legend/AlbionParktoCroomRoad_10_5.png" /> Light Blue<br />' });
var format_YallahtoSkiPark_11 = new ol.format.GeoJSON();
var features_YallahtoSkiPark_11 = format_YallahtoSkiPark_11.readFeatures(json_YallahtoSkiPark_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YallahtoSkiPark_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YallahtoSkiPark_11.addFeatures(features_YallahtoSkiPark_11);
var lyr_YallahtoSkiPark_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YallahtoSkiPark_11, 
                style: style_YallahtoSkiPark_11,
                popuplayertitle: 'Yallah to Ski Park',
                interactive: true,
    title: 'Yallah to Ski Park<br />\
    <img src="styles/legend/YallahtoSkiPark_11_0.png" /> blue<br />\
    <img src="styles/legend/YallahtoSkiPark_11_1.png" /> yellow<br />\
    <img src="styles/legend/YallahtoSkiPark_11_2.png" /> <br />\
    <img src="styles/legend/YallahtoSkiPark_11_3.png" /> Dark Blue<br />' });
var format_YallahtoDapto_12 = new ol.format.GeoJSON();
var features_YallahtoDapto_12 = format_YallahtoDapto_12.readFeatures(json_YallahtoDapto_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YallahtoDapto_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YallahtoDapto_12.addFeatures(features_YallahtoDapto_12);
var lyr_YallahtoDapto_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YallahtoDapto_12, 
                style: style_YallahtoDapto_12,
                popuplayertitle: 'Yallah to Dapto',
                interactive: true,
    title: 'Yallah to Dapto<br />\
    <img src="styles/legend/YallahtoDapto_12_0.png" /> Dark Yellow<br />\
    <img src="styles/legend/YallahtoDapto_12_1.png" /> Red<br />\
    <img src="styles/legend/YallahtoDapto_12_2.png" /> <br />\
    <img src="styles/legend/YallahtoDapto_12_3.png" /> Dark Blue<br />\
    <img src="styles/legend/YallahtoDapto_12_4.png" /> Dark Green<br />\
    <img src="styles/legend/YallahtoDapto_12_5.png" /> Purple<br />\
    <img src="styles/legend/YallahtoDapto_12_6.png" /> Grey<br />' });
var format_YallahtoAlbionPark_13 = new ol.format.GeoJSON();
var features_YallahtoAlbionPark_13 = format_YallahtoAlbionPark_13.readFeatures(json_YallahtoAlbionPark_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YallahtoAlbionPark_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YallahtoAlbionPark_13.addFeatures(features_YallahtoAlbionPark_13);
var lyr_YallahtoAlbionPark_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YallahtoAlbionPark_13, 
                style: style_YallahtoAlbionPark_13,
                popuplayertitle: 'Yallah to Albion Park',
                interactive: true,
                title: '<img src="styles/legend/YallahtoAlbionPark_13.png" /> Yallah to Albion Park'
            });
var format_WindangtoWarrawong_14 = new ol.format.GeoJSON();
var features_WindangtoWarrawong_14 = format_WindangtoWarrawong_14.readFeatures(json_WindangtoWarrawong_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WindangtoWarrawong_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WindangtoWarrawong_14.addFeatures(features_WindangtoWarrawong_14);
var lyr_WindangtoWarrawong_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WindangtoWarrawong_14, 
                style: style_WindangtoWarrawong_14,
                popuplayertitle: 'Windang to Warrawong',
                interactive: true,
    title: 'Windang to Warrawong<br />\
    <img src="styles/legend/WindangtoWarrawong_14_0.png" /> blue<br />\
    <img src="styles/legend/WindangtoWarrawong_14_1.png" /> yellow<br />\
    <img src="styles/legend/WindangtoWarrawong_14_2.png" /> <br />\
    <img src="styles/legend/WindangtoWarrawong_14_3.png" /> Dark Blue<br />\
    <img src="styles/legend/WindangtoWarrawong_14_4.png" /> Light Blue<br />\
    <img src="styles/legend/WindangtoWarrawong_14_5.png" /> Yellow<br />\
    <img src="styles/legend/WindangtoWarrawong_14_6.png" /> Light Green<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_WindangtoSkiPark_1.setVisible(true);lyr_WarrawongtoPortKembla_2.setVisible(true);lyr_WarrawongtoKembleGrange_3.setVisible(true);lyr_SkiParktoShellharboutNorth_4.setVisible(true);lyr_ShellharbourtoMinamurra_5.setVisible(true);lyr_ShellharbourNtoWindang_6.setVisible(true);lyr_MinamurratoBombo_7.setVisible(true);lyr_KembaGrangetoYallah_8.setVisible(true);lyr_DunmoretoCroomRoad_9.setVisible(true);lyr_AlbionParktoCroomRoad_10.setVisible(true);lyr_YallahtoSkiPark_11.setVisible(true);lyr_YallahtoDapto_12.setVisible(true);lyr_YallahtoAlbionPark_13.setVisible(true);lyr_WindangtoWarrawong_14.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_WindangtoSkiPark_1,lyr_WarrawongtoPortKembla_2,lyr_WarrawongtoKembleGrange_3,lyr_SkiParktoShellharboutNorth_4,lyr_ShellharbourtoMinamurra_5,lyr_ShellharbourNtoWindang_6,lyr_MinamurratoBombo_7,lyr_KembaGrangetoYallah_8,lyr_DunmoretoCroomRoad_9,lyr_AlbionParktoCroomRoad_10,lyr_YallahtoSkiPark_11,lyr_YallahtoDapto_12,lyr_YallahtoAlbionPark_13,lyr_WindangtoWarrawong_14];
lyr_WindangtoSkiPark_1.set('fieldAliases', {'id': 'id', 'Ride Name': 'Ride Name', 'Ride Type': 'Ride Type', 'Ride km': 'Ride km', 'Vidoe Mini': 'Vidoe Mini', 'Video Full': 'Video Full', });
lyr_WarrawongtoPortKembla_2.set('fieldAliases', {'id': 'id', 'colour': 'colour', 'Ride Name': 'Ride Name', 'Path Type': 'Path Type', 'Dist km': 'Dist km', 'Ride km': 'Ride km', 'Video Mini': 'Video Mini', 'Video Full': 'Video Full', });
lyr_WarrawongtoKembleGrange_3.set('fieldAliases', {'id': 'id', 'colour': 'colour', 'Ride Name': 'Ride Name', 'Ride Type': 'Ride Type', 'Dist km': 'Dist km', 'Ride km': 'Ride km', 'Video Mini': 'Video Mini', 'Video Full': 'Video Full', });
lyr_SkiParktoShellharboutNorth_4.set('fieldAliases', {'id': 'id', 'Colour': 'Colour', 'Ride Name': 'Ride Name', 'Ride Type': 'Ride Type', 'Dist km': 'Dist km', 'Ride km': 'Ride km', 'Video Mini': 'Video Mini', 'Video Full': 'Video Full', });
lyr_ShellharbourtoMinamurra_5.set('fieldAliases', {'id': 'id', 'Colour': 'Colour', 'Ride Name': 'Ride Name', 'Ride Type': 'Ride Type', 'Dist km': 'Dist km', 'Ride km': 'Ride km', 'Video Mini': 'Video Mini', 'Video Full': 'Video Full', });
lyr_ShellharbourNtoWindang_6.set('fieldAliases', {'id': 'id', 'Colour': 'Colour', 'Ride Name': 'Ride Name', 'Path Type': 'Path Type', 'Dist km': 'Dist km', 'Ride km': 'Ride km', 'Video Mini': 'Video Mini', 'Video Full': 'Video Full', });
lyr_MinamurratoBombo_7.set('fieldAliases', {'id': 'id', 'Ride Name': 'Ride Name', 'Path Type': 'Path Type', 'Dist km': 'Dist km', 'Video Mini': 'Video Mini', 'Video Full': 'Video Full', });
lyr_KembaGrangetoYallah_8.set('fieldAliases', {'id': 'id', 'Colour': 'Colour', 'Ride Name': 'Ride Name', 'Video Full': 'Video Full', 'Video Mini': 'Video Mini', 'Dist km': 'Dist km', 'Ride km': 'Ride km', 'Path Type': 'Path Type', });
lyr_DunmoretoCroomRoad_9.set('fieldAliases', {'id': 'id', 'Ride Name': 'Ride Name', 'Path Type': 'Path Type', 'Dist km': 'Dist km', 'Video Mini': 'Video Mini', 'Video Full': 'Video Full', });
lyr_AlbionParktoCroomRoad_10.set('fieldAliases', {'id': 'id', });
lyr_YallahtoSkiPark_11.set('fieldAliases', {'id': 'id', 'Colour': 'Colour', 'Ride Name': 'Ride Name', 'Video Full': 'Video Full', 'Video Mini': 'Video Mini', 'Dist km': 'Dist km', 'Ride km': 'Ride km', 'Path Type': 'Path Type', });
lyr_YallahtoDapto_12.set('fieldAliases', {'id': 'id', 'colour': 'colour', 'Ride Name': 'Ride Name', 'Path Type': 'Path Type', 'Dist km': 'Dist km', 'Ride km': 'Ride km', 'Vidoe Mini': 'Vidoe Mini', 'Video Full': 'Video Full', });
lyr_YallahtoAlbionPark_13.set('fieldAliases', {'id': 'id', 'Ride Name': 'Ride Name', 'Path Type': 'Path Type', 'Ride km': 'Ride km', 'Video Mini': 'Video Mini', 'Video Full': 'Video Full', });
lyr_WindangtoWarrawong_14.set('fieldAliases', {'id': 'id', 'Colour': 'Colour', 'Ride Name': 'Ride Name', 'Video Full': 'Video Full', 'Vdeo Mini': 'Vdeo Mini', 'Dist km': 'Dist km', 'Ride km': 'Ride km', 'Path Type': 'Path Type', });
lyr_WindangtoSkiPark_1.set('fieldImages', {'id': 'TextEdit', 'Ride Name': '', 'Ride Type': '', 'Ride km': '', 'Vidoe Mini': '', 'Video Full': '', });
lyr_WarrawongtoPortKembla_2.set('fieldImages', {'id': 'TextEdit', 'colour': 'TextEdit', 'Ride Name': '', 'Path Type': '', 'Dist km': '', 'Ride km': '', 'Video Mini': '', 'Video Full': '', });
lyr_WarrawongtoKembleGrange_3.set('fieldImages', {'id': 'TextEdit', 'colour': 'TextEdit', 'Ride Name': '', 'Ride Type': '', 'Dist km': '', 'Ride km': '', 'Video Mini': '', 'Video Full': '', });
lyr_SkiParktoShellharboutNorth_4.set('fieldImages', {'id': 'TextEdit', 'Colour': 'TextEdit', 'Ride Name': '', 'Ride Type': '', 'Dist km': '', 'Ride km': '', 'Video Mini': '', 'Video Full': '', });
lyr_ShellharbourtoMinamurra_5.set('fieldImages', {'id': 'TextEdit', 'Colour': 'TextEdit', 'Ride Name': '', 'Ride Type': '', 'Dist km': '', 'Ride km': '', 'Video Mini': '', 'Video Full': '', });
lyr_ShellharbourNtoWindang_6.set('fieldImages', {'id': 'TextEdit', 'Colour': 'TextEdit', 'Ride Name': '', 'Path Type': '', 'Dist km': '', 'Ride km': '', 'Video Mini': '', 'Video Full': '', });
lyr_MinamurratoBombo_7.set('fieldImages', {'id': 'TextEdit', 'Ride Name': '', 'Path Type': '', 'Dist km': '', 'Video Mini': '', 'Video Full': '', });
lyr_KembaGrangetoYallah_8.set('fieldImages', {'id': 'TextEdit', 'Colour': 'TextEdit', 'Ride Name': '', 'Video Full': '', 'Video Mini': '', 'Dist km': '', 'Ride km': '', 'Path Type': '', });
lyr_DunmoretoCroomRoad_9.set('fieldImages', {'id': 'TextEdit', 'Ride Name': '', 'Path Type': '', 'Dist km': '', 'Video Mini': '', 'Video Full': '', });
lyr_AlbionParktoCroomRoad_10.set('fieldImages', {'id': 'TextEdit', });
lyr_YallahtoSkiPark_11.set('fieldImages', {'id': 'TextEdit', 'Colour': 'TextEdit', 'Ride Name': '', 'Video Full': '', 'Video Mini': '', 'Dist km': '', 'Ride km': '', 'Path Type': '', });
lyr_YallahtoDapto_12.set('fieldImages', {'id': 'TextEdit', 'colour': 'TextEdit', 'Ride Name': '', 'Path Type': '', 'Dist km': '', 'Ride km': '', 'Vidoe Mini': '', 'Video Full': '', });
lyr_YallahtoAlbionPark_13.set('fieldImages', {'id': 'TextEdit', 'Ride Name': '', 'Path Type': '', 'Ride km': '', 'Video Mini': '', 'Video Full': '', });
lyr_WindangtoWarrawong_14.set('fieldImages', {'id': 'TextEdit', 'Colour': 'TextEdit', 'Ride Name': '', 'Video Full': '', 'Vdeo Mini': '', 'Dist km': '', 'Ride km': '', 'Path Type': '', });
lyr_WindangtoSkiPark_1.set('fieldLabels', {'id': 'inline label - visible with data', 'Ride Name': 'inline label - visible with data', 'Ride Type': 'inline label - visible with data', 'Ride km': 'inline label - visible with data', 'Vidoe Mini': 'inline label - visible with data', 'Video Full': 'inline label - visible with data', });
lyr_WarrawongtoPortKembla_2.set('fieldLabels', {'id': 'inline label - visible with data', 'colour': 'inline label - visible with data', 'Ride Name': 'inline label - visible with data', 'Path Type': 'inline label - visible with data', 'Dist km': 'inline label - visible with data', 'Ride km': 'inline label - visible with data', 'Video Mini': 'inline label - visible with data', 'Video Full': 'inline label - visible with data', });
lyr_WarrawongtoKembleGrange_3.set('fieldLabels', {'id': 'inline label - visible with data', 'colour': 'inline label - visible with data', 'Ride Name': 'inline label - visible with data', 'Ride Type': 'inline label - visible with data', 'Dist km': 'inline label - visible with data', 'Ride km': 'inline label - visible with data', 'Video Mini': 'inline label - visible with data', 'Video Full': 'inline label - visible with data', });
lyr_SkiParktoShellharboutNorth_4.set('fieldLabels', {'id': 'inline label - visible with data', 'Colour': 'inline label - visible with data', 'Ride Name': 'inline label - visible with data', 'Ride Type': 'inline label - visible with data', 'Dist km': 'inline label - visible with data', 'Ride km': 'inline label - visible with data', 'Video Mini': 'inline label - visible with data', 'Video Full': 'inline label - visible with data', });
lyr_ShellharbourtoMinamurra_5.set('fieldLabels', {'id': 'inline label - visible with data', 'Colour': 'inline label - visible with data', 'Ride Name': 'inline label - visible with data', 'Ride Type': 'inline label - visible with data', 'Dist km': 'inline label - visible with data', 'Ride km': 'inline label - visible with data', 'Video Mini': 'inline label - visible with data', 'Video Full': 'inline label - visible with data', });
lyr_ShellharbourNtoWindang_6.set('fieldLabels', {'id': 'inline label - visible with data', 'Colour': 'inline label - visible with data', 'Ride Name': 'inline label - visible with data', 'Path Type': 'inline label - visible with data', 'Dist km': 'inline label - visible with data', 'Ride km': 'inline label - visible with data', 'Video Mini': 'inline label - visible with data', 'Video Full': 'inline label - visible with data', });
lyr_MinamurratoBombo_7.set('fieldLabels', {'id': 'inline label - visible with data', 'Ride Name': 'inline label - visible with data', 'Path Type': 'inline label - visible with data', 'Dist km': 'inline label - visible with data', 'Video Mini': 'inline label - visible with data', 'Video Full': 'inline label - visible with data', });
lyr_KembaGrangetoYallah_8.set('fieldLabels', {'id': 'inline label - visible with data', 'Colour': 'inline label - visible with data', 'Ride Name': 'inline label - visible with data', 'Video Full': 'inline label - visible with data', 'Video Mini': 'inline label - visible with data', 'Dist km': 'inline label - visible with data', 'Ride km': 'inline label - visible with data', 'Path Type': 'inline label - visible with data', });
lyr_DunmoretoCroomRoad_9.set('fieldLabels', {'id': 'inline label - visible with data', 'Ride Name': 'inline label - visible with data', 'Path Type': 'inline label - visible with data', 'Dist km': 'inline label - visible with data', 'Video Mini': 'inline label - visible with data', 'Video Full': 'inline label - visible with data', });
lyr_AlbionParktoCroomRoad_10.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_YallahtoSkiPark_11.set('fieldLabels', {'id': 'inline label - visible with data', 'Colour': 'inline label - visible with data', 'Ride Name': 'inline label - visible with data', 'Video Full': 'inline label - visible with data', 'Video Mini': 'inline label - visible with data', 'Dist km': 'inline label - visible with data', 'Ride km': 'inline label - visible with data', 'Path Type': 'inline label - visible with data', });
lyr_YallahtoDapto_12.set('fieldLabels', {'id': 'inline label - visible with data', 'colour': 'inline label - visible with data', 'Ride Name': 'inline label - visible with data', 'Path Type': 'inline label - visible with data', 'Dist km': 'inline label - visible with data', 'Ride km': 'inline label - visible with data', 'Vidoe Mini': 'inline label - visible with data', 'Video Full': 'inline label - visible with data', });
lyr_YallahtoAlbionPark_13.set('fieldLabels', {'id': 'inline label - visible with data', 'Ride Name': 'inline label - visible with data', 'Path Type': 'inline label - visible with data', 'Ride km': 'inline label - visible with data', 'Video Mini': 'inline label - visible with data', 'Video Full': 'inline label - visible with data', });
lyr_WindangtoWarrawong_14.set('fieldLabels', {'id': 'inline label - visible with data', 'Colour': 'inline label - visible with data', 'Ride Name': 'inline label - visible with data', 'Video Full': 'inline label - visible with data', 'Vdeo Mini': 'inline label - visible with data', 'Dist km': 'inline label - visible with data', 'Ride km': 'inline label - visible with data', 'Path Type': 'inline label - visible with data', });
lyr_WindangtoWarrawong_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});