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
var format_parquesnacionales_1 = new ol.format.GeoJSON();
var features_parquesnacionales_1 = format_parquesnacionales_1.readFeatures(json_parquesnacionales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parquesnacionales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parquesnacionales_1.addFeatures(features_parquesnacionales_1);
var lyr_parquesnacionales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parquesnacionales_1, 
                style: style_parquesnacionales_1,
                popuplayertitle: 'parquesnacionales',
                interactive: true,
                title: '<img src="styles/legend/parquesnacionales_1.png" /> parquesnacionales'
            });
var format_rios_2 = new ol.format.GeoJSON();
var features_rios_2 = format_rios_2.readFeatures(json_rios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios_2.addFeatures(features_rios_2);
var lyr_rios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rios_2, 
                style: style_rios_2,
                popuplayertitle: 'rios',
                interactive: true,
                title: '<img src="styles/legend/rios_2.png" /> rios'
            });
var group_Originales = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Originales'});
var group_Editadas = new ol.layer.Group({
                                layers: [lyr_parquesnacionales_1,lyr_rios_2,],
                                fold: 'open',
                                title: 'Editadas'});

lyr_OSMStandard_0.setVisible(true);lyr_parquesnacionales_1.setVisible(true);lyr_rios_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_Editadas];
lyr_parquesnacionales_1.set('fieldAliases', {'Name': 'Name', 'Declaracio': 'Declaracio', 'Reclasific': 'Reclasific', 'Ampliacion': 'Ampliacion', 'Fecha de d': 'Fecha de d', 'Modificaci': 'Modificaci', 'area': 'area', 'Nombre PN': 'Nombre PN', });
lyr_rios_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Texto': 'Texto', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Imagen': 'Imagen', 'Shape_Leng': 'Shape_Leng', 'Nombre Río': 'Nombre Río', });
lyr_parquesnacionales_1.set('fieldImages', {'Name': 'TextEdit', 'Declaracio': 'TextEdit', 'Reclasific': 'TextEdit', 'Ampliacion': 'TextEdit', 'Fecha de d': 'TextEdit', 'Modificaci': 'TextEdit', 'area': 'TextEdit', 'Nombre PN': 'TextEdit', });
lyr_rios_2.set('fieldImages', {'OBJECTID': 'Hidden', 'Texto': 'TextEdit', 'Longitud': 'Range', 'Categoria': 'TextEdit', 'Imagen': 'ExternalResource', 'Shape_Leng': 'TextEdit', 'Nombre Río': 'TextEdit', });
lyr_parquesnacionales_1.set('fieldLabels', {'Name': 'inline label - always visible', 'Declaracio': 'no label', 'Reclasific': 'no label', 'Ampliacion': 'no label', 'Fecha de d': 'no label', 'Modificaci': 'no label', 'area': 'no label', 'Nombre PN': 'no label', });
lyr_rios_2.set('fieldLabels', {'Texto': 'no label', 'Longitud': 'no label', 'Categoria': 'no label', 'Imagen': 'no label', 'Shape_Leng': 'no label', 'Nombre Río': 'no label', });
lyr_rios_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});