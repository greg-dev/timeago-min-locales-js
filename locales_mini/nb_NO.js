var i,t,l = (',sekunder,' +
'minutt,minutter,' +
'time,timer,' +
'dag,dager,' +
'uke,uker,' +
'måned,måneder,' +
'år,år').split(',');
for(i in l) l[i] = (t = (i&1?'%s ':'1 ')+l[i], [t+' siden', 'om '+t]);
l[0] = ['akkurat nå', 'om litt'];
/*
['akkurat nå', 'om litt'],
['%s sekunder siden', 'om %s sekunder'],
['1 minutt siden', 'om 1 minutt'],
['%s minutter siden', 'om %s minutter'],
['1 time siden', 'om 1 time'],
['%s timer siden', 'om %s timer'],
['1 dag siden', 'om 1 dag'],
['%s dager siden', 'om %s dager'],
['1 uke siden', 'om 1 uke'],
['%s uker siden', 'om %s uker'],
['1 måned siden', 'om 1 måned'],
['%s måneder siden', 'om %s måneder'],
['1 år siden', 'om 1 år'],
['%s år siden', 'om %s år']
*/

module.exports = function(number, index) {
  return l[index];
};
