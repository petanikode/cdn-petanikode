var thumbnail_mode = 'no-float';
summary_noimg = 100;
summary_img = 100;

/**
 * Fungsi untuk menghapus tag html pada body artikel
 * @param  {[type]} strx [description]
 * @param  {[type]} chop [description]
 * @return {[type]}      [description]
 */
// function removeHtmlTag(strx, chop) {
//     if (strx.indexOf("<") != -1) {
//         var s = strx.split("<");
//         for (var i = 0; i < s.length; i++) {
//             if (s[i].indexOf(">") != -1) {
//                 s[i] = s[i].substring(s[i].indexOf(">") + 1, s[i].length);
//             }
//         }
//         strx = s.join("");
//     }
//     chop = (chop < strx.length - 1) ? chop : strx.length - 2;
//     while (strx.charAt(chop - 1) != ' ' && strx.indexOf(' ', chop) != -1) chop++;
//     strx = strx.substring(0, chop - 1);
//     return strx + ' ';
// }

/**
 * Buat ringkasan artikel berserta thumbnail-nya untuk ditampilkan di halaman utama
 * @param  {int} pID    id artikel/post
 * @param  {string} judul  judul artikel
 * @param  {string} alamat alamat/link artikel
 * @param  {string} img    link image yang akan jadi thumbnail
 * @return {void}
 */
function createSummaryAndThumb(pID, judul, alamat, img) {
    var div = document.getElementById(pID);
    var imgtag = "";
    var img = img.replace("s72-c", "s200-c");
    var summ = summary_noimg;
    //if(img.length>=1) {
    imgtag = '<a href="' + alamat + '"><img src="' + img + '"/></a>';
    summ = summary_noimg;
    //}
    //var summary = imgtag + '<h4>' + removeHtmlTag(div.innerHTML,summ) + '<a href=' + alamat + '>[ Lanjutkan Baca... ]</a></h4>';
    var summary = imgtag + '<a href=' + alamat + '><b>' + judul + '</b></a>';
    div.innerHTML = summary;
}
