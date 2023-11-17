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

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_HASILSURVEYJAKBARJAKTIM_2 = new ol.format.GeoJSON();
var features_HASILSURVEYJAKBARJAKTIM_2 = format_HASILSURVEYJAKBARJAKTIM_2.readFeatures(json_HASILSURVEYJAKBARJAKTIM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HASILSURVEYJAKBARJAKTIM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HASILSURVEYJAKBARJAKTIM_2.addFeatures(features_HASILSURVEYJAKBARJAKTIM_2);
var lyr_HASILSURVEYJAKBARJAKTIM_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HASILSURVEYJAKBARJAKTIM_2, 
                style: style_HASILSURVEYJAKBARJAKTIM_2,
                interactive: true,
                title: '<img src="styles/legend/HASILSURVEYJAKBARJAKTIM_2.png" /> HASIL SURVEY JAKBAR JAKTIM'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_HASILSURVEYJAKBARJAKTIM_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,lyr_HASILSURVEYJAKBARJAKTIM_2];
lyr_HASILSURVEYJAKBARJAKTIM_2.set('fieldAliases', {'NO__FORM': 'No Formulir', 'ALAMAT_RUM': 'Alamat Rumah', 'NO__RUMAH': 'No Rumah', 'PEMILIK': 'Pemilik (Berdasarkan Surat SIP)', 'NAMA_PENGH': 'Nama Penghuni', 'PENGELUARA': 'Tanggal SIP', 'BERAKHIR': 'SIP Berakhir', 'Kota': 'Kota', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'No_Urut': 'No Urut', 'Nama_Pewaw': 'Surveyor', 'Nama_Super': 'Supervisi', 'Isi_kuesio': 'Isi kuesioner', 'nama_surve': 'nama surveyor', 'tanggal_pe': 'tanggal pelaporan', 'Nama_Pemil': 'Nama Pemilik SIP (Hasil Survey)', 'Tempat_Lah': 'Tempat Lahir', 'Tanggal_la': 'Tanggal lahir', 'Jenis_Kela': 'Jenis Kelamin', 'Pekerjaan': 'Pekerjaan', 'Lama_Mengh': 'Lama Menghuni', 'Kegiatan': 'Kegiatan', 'Kegiatan_l': 'Kegiatan_lainnya', 'Apakah_bap': 'Apakah bapak ibu mengertahui rumah ini ber SIP', 'Apakah_b_1': 'Apakah bapak ibu masih rutin membayar sewa', 'Status_tan': 'Status tanah', 'luas_tanah': 'luas tanah m2', 'luas_bangu': 'luas bangunan m2', 'jumlah_lan': 'jumlah lantai', 'Y': 'Y', 'X': 'X', 'foto_oby_1': 'Foto Obyek', 'foto_lok_1': 'Foto Lokasi', });
lyr_HASILSURVEYJAKBARJAKTIM_2.set('fieldImages', {'NO__FORM': 'TextEdit', 'ALAMAT_RUM': 'TextEdit', 'NO__RUMAH': 'TextEdit', 'PEMILIK': 'TextEdit', 'NAMA_PENGH': 'TextEdit', 'PENGELUARA': 'DateTime', 'BERAKHIR': 'DateTime', 'Kota': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'No_Urut': 'TextEdit', 'Nama_Pewaw': 'TextEdit', 'Nama_Super': 'TextEdit', 'Isi_kuesio': 'TextEdit', 'nama_surve': 'TextEdit', 'tanggal_pe': 'DateTime', 'Nama_Pemil': 'TextEdit', 'Tempat_Lah': 'TextEdit', 'Tanggal_la': 'DateTime', 'Jenis_Kela': 'TextEdit', 'Pekerjaan': 'TextEdit', 'Lama_Mengh': 'TextEdit', 'Kegiatan': 'TextEdit', 'Kegiatan_l': 'TextEdit', 'Apakah_bap': 'TextEdit', 'Apakah_b_1': 'TextEdit', 'Status_tan': 'TextEdit', 'luas_tanah': 'TextEdit', 'luas_bangu': 'TextEdit', 'jumlah_lan': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'foto_oby_1': 'ExternalResource', 'foto_lok_1': 'ExternalResource', });
lyr_HASILSURVEYJAKBARJAKTIM_2.set('fieldLabels', {'NO__FORM': 'inline label', 'ALAMAT_RUM': 'inline label', 'NO__RUMAH': 'inline label', 'PEMILIK': 'inline label', 'NAMA_PENGH': 'inline label', 'PENGELUARA': 'inline label', 'BERAKHIR': 'inline label', 'Kota': 'inline label', 'Kecamatan': 'inline label', 'Kelurahan': 'inline label', 'No_Urut': 'inline label', 'Nama_Pewaw': 'inline label', 'Nama_Super': 'inline label', 'Isi_kuesio': 'inline label', 'nama_surve': 'inline label', 'tanggal_pe': 'inline label', 'Nama_Pemil': 'inline label', 'Tempat_Lah': 'inline label', 'Tanggal_la': 'inline label', 'Jenis_Kela': 'inline label', 'Pekerjaan': 'inline label', 'Lama_Mengh': 'inline label', 'Kegiatan': 'inline label', 'Kegiatan_l': 'inline label', 'Apakah_bap': 'inline label', 'Apakah_b_1': 'inline label', 'Status_tan': 'inline label', 'luas_tanah': 'inline label', 'luas_bangu': 'inline label', 'jumlah_lan': 'inline label', 'Y': 'inline label', 'X': 'inline label', 'foto_oby_1': 'inline label', 'foto_lok_1': 'inline label', });
lyr_HASILSURVEYJAKBARJAKTIM_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});