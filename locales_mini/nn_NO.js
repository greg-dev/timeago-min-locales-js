var i,t,l = (',sekund,' +
'minutt,minutt,' +
'time,timar,' +
'dag,dagar,' +
'veke,veker,' +
'månad,månadar,' +
'år,år').split(',');
for(i in l) l[i] = (t = (i&1?'%s ':'1 ')+l[i], [t+' sidan', 'om '+t]);
l[0] = ['nett no', 'om litt'];
/*
['nett no', 'om litt'],
['%s sekund sidan', 'om %s sekund'],
['1 minutt sidan', 'om 1 minutt'],
['%s minutt sidan', 'om %s minutt'],
['1 time sidan', 'om 1 time'],
['%s timar sidan', 'om %s timar'],
['1 dag sidan', 'om 1 dag'],
['%s dagar sidan', 'om %s dagar'],
['1 veke sidan', 'om 1 veke'],
['%s veker sidan', 'om %s veker'],
['1 månad sidan', 'om 1 månad'],
['%s månadar sidan', 'om %s månadar'],
['1 år sidan', 'om 1 år'],
['%s år sidan', 'om %s år']
*/
module.exports = function(number, index) {
  return l[index];
};
