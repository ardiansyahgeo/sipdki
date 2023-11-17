var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BatasKecamatan_3 = new ol.format.GeoJSON();
var features_BatasKecamatan_3 = format_BatasKecamatan_3.readFeatures(json_BatasKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_3.addFeatures(features_BatasKecamatan_3);
var lyr_BatasKecamatan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKecamatan_3, 
                style: style_BatasKecamatan_3,
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_3.png" /> Batas Kecamatan'
            });
var format_BatasKotaMadya_4 = new ol.format.GeoJSON();
var features_BatasKotaMadya_4 = format_BatasKotaMadya_4.readFeatures(json_BatasKotaMadya_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKotaMadya_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKotaMadya_4.addFeatures(features_BatasKotaMadya_4);
var lyr_BatasKotaMadya_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKotaMadya_4, 
                style: style_BatasKotaMadya_4,
                interactive: true,
                title: '<img src="styles/legend/BatasKotaMadya_4.png" /> Batas Kota Madya'
            });
var format_JAKTIM_5 = new ol.format.GeoJSON();
var features_JAKTIM_5 = format_JAKTIM_5.readFeatures(json_JAKTIM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKTIM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKTIM_5.addFeatures(features_JAKTIM_5);
var lyr_JAKTIM_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JAKTIM_5, 
                style: style_JAKTIM_5,
                interactive: true,
                title: '<img src="styles/legend/JAKTIM_5.png" /> JAKTIM'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_BatasKecamatan_3.setVisible(true);lyr_BatasKotaMadya_4.setVisible(true);lyr_JAKTIM_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ESRISatellite_1,lyr_GoogleSatellite_2,lyr_BatasKecamatan_3,lyr_BatasKotaMadya_4,lyr_JAKTIM_5];
lyr_BatasKecamatan_3.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'LUASWH': 'LUASWH', 'SRS_ID': 'SRS_ID', });
lyr_BatasKotaMadya_4.set('fieldAliases', {'WADMKK': 'WADMKK', 'KDPKAB': 'KDPKAB', 'LUASWH': 'LUASWH', 'SRS_ID': 'SRS_ID', });
lyr_JAKTIM_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOURUT': 'No Urut', 'ALAMAT_RUM': 'Alamat Rumah', 'NO__RUMAH': 'No Rumah', 'NO__FORM': 'No Form', 'NAMA_PENGH': 'Nama Penghuni', 'PENGELUARA': 'Terbit SIP', 'BERAKHIR': 'Akhir SIP', 'PEMILIK': 'Pemilik', 'WADMRW': 'RW (Tentatif)', 'WADMKD': 'Kelurahan', 'WADMKC': 'Kecamatan', 'WADMKK': 'Kota Madya', 'link': 'Rute', });
lyr_BatasKecamatan_3.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'LUASWH': 'TextEdit', 'SRS_ID': 'TextEdit', });
lyr_BatasKotaMadya_4.set('fieldImages', {'WADMKK': 'TextEdit', 'KDPKAB': 'TextEdit', 'LUASWH': 'TextEdit', 'SRS_ID': 'TextEdit', });
lyr_JAKTIM_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOURUT': 'TextEdit', 'ALAMAT_RUM': 'TextEdit', 'NO__RUMAH': 'TextEdit', 'NO__FORM': 'TextEdit', 'NAMA_PENGH': 'TextEdit', 'PENGELUARA': 'DateTime', 'BERAKHIR': 'DateTime', 'PEMILIK': 'TextEdit', 'WADMRW': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'link': 'TextEdit', });
lyr_BatasKecamatan_3.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'no label', 'KDCPUM': 'no label', 'KDPKAB': 'no label', 'LUASWH': 'no label', 'SRS_ID': 'no label', });
lyr_BatasKotaMadya_4.set('fieldLabels', {'WADMKK': 'no label', 'KDPKAB': 'no label', 'LUASWH': 'no label', 'SRS_ID': 'no label', });
lyr_JAKTIM_5.set('fieldLabels', {'OBJECTID': 'inline label', 'NOURUT': 'inline label', 'ALAMAT_RUM': 'inline label', 'NO__RUMAH': 'inline label', 'NO__FORM': 'inline label', 'NAMA_PENGH': 'inline label', 'PENGELUARA': 'inline label', 'BERAKHIR': 'inline label', 'PEMILIK': 'inline label', 'WADMRW': 'inline label', 'WADMKD': 'inline label', 'WADMKC': 'inline label', 'WADMKK': 'inline label', 'link': 'inline label', });
lyr_JAKTIM_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});