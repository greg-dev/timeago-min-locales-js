var i,t,l = (/*'saniye'+*/',saniye,' +
'dakika,dakika,' +
'saat,saat,' +
'gün,gün,' +
'hafta,hafta,' +
'ay,ay,' +
'yıl,yıl').split(',');
for(i in l) l[i] = (t = (i&1?'%s ':'1 ')+l[i], [t+' önce', t+' içinde']);
l[0] = ['az önce', 'şimdi'];
/*
['az önce', 'şimdi'],
['%s saniye önce', '%s saniye içinde'],
['1 dakika önce', '1 dakika içinde'],
['%s dakika önce', '%s dakika içinde'],
['1 saat önce', '1 saat içinde'],
['%s saat önce', '%s saat içinde'],
['1 gün önce', '1 gün içinde'],
['%s gün önce', '%s gün içinde'],
['1 hafta önce', '1 hafta içinde'],
['%s hafta önce', '%s hafta içinde'],
['1 ay önce', '1 ay içinde'],
['%s ay önce', '%s ay içinde'],
['1 yıl önce', '1 yıl içinde'],
['%s yıl önce', '%s yıl içinde']
*/
module.exports = function(number, index) {
  return l[index];
};
