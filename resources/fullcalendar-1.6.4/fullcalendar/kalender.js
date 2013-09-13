// asumsi tgl 1-9-2013 M = 25-10-2500 K
// maka tgl 6-11-2013 M = 1-1-2501 K
// 8-8-2014 M = 1-10-2500 K
// untuk menghitung tanggal K dapat dilakukan dengan menghitung selisih hari tanggal yang dimaksud 
// dengan tanggal yang sudah diketahui di modulus 30 ditambah 1 untuk mendapatkan tanggal
// untuk mendapatkan bulan dengan cara selisih hari div 30


function getWari(tgl) {
	var tahunK = 2500;
	var bulanK = 10;
	var tanggalK = 1;
	var tanggal = 8;
	var bulan = 7;
	var tahun = 2013;
	var tanggalAwal = new Date(tahun, bulan, tanggal);
	var selisih = 0;
	if (tgl > tanggalAwal) {
		selisih = daySpan(tanggalAwal, tgl);
		return (selisih % 30) + 1;
	} else {
		selisih = daySpan(tgl, tanggalAwal);
		return Math.abs((selisih % 30)-30);
	}
	
}

function daySpan(tgl1, tgl2) {
	var oneDay = 1000 * 60 * 60 * 24;
	var selisih = Math.floor(Math.abs(tgl2.getTime() - tgl1.getTime())/oneDay);
	return selisih;
}