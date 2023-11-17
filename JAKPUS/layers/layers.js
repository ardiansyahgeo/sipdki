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
var format_JAKPUS_5 = new ol.format.GeoJSON();
var features_JAKPUS_5 = format_JAKPUS_5.readFeatures(json_JAKPUS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKPUS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKPUS_5.addFeatures(features_JAKPUS_5);
var lyr_JAKPUS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JAKPUS_5, 
                style: style_JAKPUS_5,
                interactive: true,
                title: '<img src="styles/legend/JAKPUS_5.png" /> JAKPUS'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_BatasKecamatan_3.setVisible(true);lyr_BatasKotaMadya_4.setVisible(true);lyr_JAKPUS_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ESRISatellite_1,lyr_GoogleSatellite_2,lyr_BatasKecamatan_3,lyr_BatasKotaMadya_4,lyr_JAKPUS_5];
lyr_BatasKecamatan_3.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'LUASWH': 'LUASWH', 'SRS_ID': 'SRS_ID', });
lyr_BatasKotaMadya_4.set('fieldAliases', {'WADMKK': 'WADMKK', 'KDPKAB': 'KDPKAB', 'LUASWH': 'LUASWH', 'SRS_ID': 'SRS_ID', });
lyr_JAKPUS_5.set('fieldAliases', {'NOURUT': 'NOURUT', 'No_Form_': 'No Form', 'Jen_SIP': 'Jenis SIP', 'No_SIP': 'No SIP', 'Terbit_SIP': 'Terbit SIP', 'Akh_SIP': 'Akhir SIP', 'Alamat': 'Alamat', 'status': 'Status', 'koor': 'Koordinat', 'Pemegang': 'Pemegang SIP', 'Nama_Pengh': 'Nama Penghuni', 'TL': 'Tempat Lahir Pemilik', 'TGL': 'Tanggal Lahir Pemilik', 'JK': 'Jenis Kelamin Pemilik', 'Pekerjaan': 'Pekerjaan Pemilik', 'Lama_Tingg': 'Lama Tinggal (tahun)', 'Kegiatan': 'Jenis Kegiatan', 'Data_SIP': 'Apakah Pemilik Paham Rumah Ber-SIP', 'Sewa': 'Pembayaran Sewa', 'LT': 'Luas Tanah', 'LB': 'Luas Bangunan', 'LANTAI': 'Jumlah Lantai', 'FOTO': 'FOTO', 'FOTO2': 'FOTO2', 'Status_Lap': 'Hak Atas Tanah (Survei Lapangan)', 'Stat_BPN': 'Status Tanah (Jakarta 1)', 'nourutt20': 'NOurut2020', 'rute': 'rute', });
lyr_BatasKecamatan_3.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'LUASWH': 'TextEdit', 'SRS_ID': 'TextEdit', });
lyr_BatasKotaMadya_4.set('fieldImages', {'WADMKK': 'TextEdit', 'KDPKAB': 'TextEdit', 'LUASWH': 'TextEdit', 'SRS_ID': 'TextEdit', });
lyr_JAKPUS_5.set('fieldImages', {'NOURUT': 'TextEdit', 'No_Form_': 'TextEdit', 'Jen_SIP': 'TextEdit', 'No_SIP': 'TextEdit', 'Terbit_SIP': 'TextEdit', 'Akh_SIP': 'TextEdit', 'Alamat': 'TextEdit', 'status': 'TextEdit', 'koor': 'TextEdit', 'Pemegang': 'TextEdit', 'Nama_Pengh': 'TextEdit', 'TL': 'TextEdit', 'TGL': 'TextEdit', 'JK': 'TextEdit', 'Pekerjaan': 'TextEdit', 'Lama_Tingg': 'TextEdit', 'Kegiatan': 'TextEdit', 'Data_SIP': 'TextEdit', 'Sewa': 'TextEdit', 'LT': 'TextEdit', 'LB': 'TextEdit', 'LANTAI': 'TextEdit', 'FOTO': 'ExternalResource', 'FOTO2': 'ExternalResource', 'Status_Lap': 'TextEdit', 'Stat_BPN': 'TextEdit', 'nourutt20': 'TextEdit', 'rute': '', });
lyr_BatasKecamatan_3.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'no label', 'KDCPUM': 'no label', 'KDPKAB': 'no label', 'LUASWH': 'no label', 'SRS_ID': 'no label', });
lyr_BatasKotaMadya_4.set('fieldLabels', {'WADMKK': 'no label', 'KDPKAB': 'no label', 'LUASWH': 'no label', 'SRS_ID': 'no label', });
lyr_JAKPUS_5.set('fieldLabels', {'NOURUT': 'inline label', 'No_Form_': 'inline label', 'Jen_SIP': 'inline label', 'No_SIP': 'inline label', 'Terbit_SIP': 'inline label', 'Akh_SIP': 'inline label', 'Alamat': 'inline label', 'status': 'inline label', 'koor': 'inline label', 'Pemegang': 'inline label', 'Nama_Pengh': 'inline label', 'TL': 'inline label', 'TGL': 'inline label', 'JK': 'inline label', 'Pekerjaan': 'inline label', 'Lama_Tingg': 'inline label', 'Kegiatan': 'inline label', 'Data_SIP': 'inline label', 'Sewa': 'inline label', 'LT': 'inline label', 'LB': 'inline label', 'LANTAI': 'inline label', 'FOTO': 'inline label', 'FOTO2': 'inline label', 'Status_Lap': 'inline label', 'Stat_BPN': 'inline label', 'nourutt20': 'inline label', 'rute': 'no label', });
lyr_JAKPUS_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});