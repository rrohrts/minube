var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ComunidadesAutnomas_1 = new ol.format.GeoJSON();
var features_ComunidadesAutnomas_1 = format_ComunidadesAutnomas_1.readFeatures(json_ComunidadesAutnomas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunidadesAutnomas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesAutnomas_1.addFeatures(features_ComunidadesAutnomas_1);
var lyr_ComunidadesAutnomas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunidadesAutnomas_1, 
                style: style_ComunidadesAutnomas_1,
                popuplayertitle: 'Comunidades Autónomas',
                interactive: true,
                title: '<img src="styles/legend/ComunidadesAutnomas_1.png" /> Comunidades Autónomas'
            });
var format_ParquesNacionales_2 = new ol.format.GeoJSON();
var features_ParquesNacionales_2 = format_ParquesNacionales_2.readFeatures(json_ParquesNacionales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquesNacionales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquesNacionales_2.addFeatures(features_ParquesNacionales_2);
var lyr_ParquesNacionales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquesNacionales_2, 
                style: style_ParquesNacionales_2,
                popuplayertitle: 'Parques Nacionales',
                interactive: true,
                title: '<img src="styles/legend/ParquesNacionales_2.png" /> Parques Nacionales'
            });
var format_Ros_3 = new ol.format.GeoJSON();
var features_Ros_3 = format_Ros_3.readFeatures(json_Ros_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ros_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ros_3.addFeatures(features_Ros_3);
var lyr_Ros_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ros_3, 
                style: style_Ros_3,
                popuplayertitle: 'Ríos',
                interactive: true,
                title: '<img src="styles/legend/Ros_3.png" /> Ríos'
            });
var group_Originales = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Originales'});
var group_Editadas = new ol.layer.Group({
                                layers: [lyr_ComunidadesAutnomas_1,lyr_ParquesNacionales_2,lyr_Ros_3,],
                                fold: 'open',
                                title: 'Editadas'});

lyr_OSMStandard_0.setVisible(true);lyr_ComunidadesAutnomas_1.setVisible(true);lyr_ParquesNacionales_2.setVisible(true);lyr_Ros_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_Editadas];
lyr_ComunidadesAutnomas_1.set('fieldAliases', {'ID': 'ID', 'TIPO_0101': 'TIPO_0101', 'CODIGO_INE': 'CODIGO_INE', 'ETIQUETA': 'ETIQUETA', 'COD_INE': 'COD_INE', 'TOT_FOR': 'TOT_FOR', 'ARB': 'ARB', 'NO_ARB': 'NO_ARB', 'area': 'Área (hectáreas)', 'CCAA': 'CCAA', });
lyr_ParquesNacionales_2.set('fieldAliases', {'Name': 'Name', 'Declaracio': 'Declaracio', 'Reclasific': 'Reclasific', 'Ampliacion': 'Ampliacion', 'Fecha de d': 'Fecha de d', 'Modificaci': 'Modificaci', 'area': 'area', 'Nombre PN': 'Nombre PN', });
lyr_Ros_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Texto': 'Texto', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Imagen': 'Imagen', 'Shape_Leng': 'Shape_Leng', 'Nombre Río': 'Nombre Río', });
lyr_ComunidadesAutnomas_1.set('fieldImages', {'ID': 'TextEdit', 'TIPO_0101': 'TextEdit', 'CODIGO_INE': 'TextEdit', 'ETIQUETA': 'TextEdit', 'COD_INE': 'Range', 'TOT_FOR': 'TextEdit', 'ARB': 'TextEdit', 'NO_ARB': 'TextEdit', 'area': 'TextEdit', 'CCAA': 'TextEdit', });
lyr_ParquesNacionales_2.set('fieldImages', {'Name': 'TextEdit', 'Declaracio': 'TextEdit', 'Reclasific': 'TextEdit', 'Ampliacion': 'TextEdit', 'Fecha de d': 'TextEdit', 'Modificaci': 'TextEdit', 'area': 'TextEdit', 'Nombre PN': 'TextEdit', });
lyr_Ros_3.set('fieldImages', {'OBJECTID': 'Hidden', 'Texto': 'TextEdit', 'Longitud': 'Range', 'Categoria': 'TextEdit', 'Imagen': 'ExternalResource', 'Shape_Leng': 'TextEdit', 'Nombre Río': 'TextEdit', });
lyr_ComunidadesAutnomas_1.set('fieldLabels', {'ID': 'no label', 'TIPO_0101': 'no label', 'CODIGO_INE': 'no label', 'ETIQUETA': 'no label', 'COD_INE': 'no label', 'TOT_FOR': 'no label', 'ARB': 'no label', 'NO_ARB': 'no label', 'area': 'no label', 'CCAA': 'no label', });
lyr_ParquesNacionales_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Declaracio': 'no label', 'Reclasific': 'no label', 'Ampliacion': 'no label', 'Fecha de d': 'no label', 'Modificaci': 'no label', 'area': 'no label', 'Nombre PN': 'no label', });
lyr_Ros_3.set('fieldLabels', {'Texto': 'no label', 'Longitud': 'no label', 'Categoria': 'no label', 'Imagen': 'no label', 'Shape_Leng': 'no label', 'Nombre Río': 'no label', });
lyr_Ros_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});