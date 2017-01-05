var i,t,l = (/*'sekund'+*/',sekunder,' +
'minut,minutter,' +
'time,timer,' +
'dag,dage,' +
'uge,uger,' +
'måned,måneder,' +
'år,år').split(',');
for(i in l) l[i] = (t = (i&1?'%s ':'1 ')+l[i], ['for '+t+' siden','om '+t]);
l[0] = ['for et øjeblik siden', 'om et øjeblik'];
/*
['for et øjeblik siden', 'om et øjeblik'],
['for %s sekunder siden', 'om %s sekunder'],
['for 1 minut siden', 'om 1 minut'],
['for %s minutter siden', 'om %s minutter'],
['for 1 time siden', 'om 1 time'],
['for %s timer siden', 'om %s timer'],
['for 1 dag siden', 'om 1 dag'],
['for %s dage siden', 'om %s dage'],
['for 1 uge siden', 'om 1 uge'],
['for %s uger siden', 'om %s uger'],
['for 1 måned siden', 'om 1 måned'],
['for %s måneder siden', 'om %s måneder'],
['for 1 år siden', 'om 1 år'],
['for %s år siden', 'om %s år']
*/
module.exports = function(number, index) {
  return l[index];
};
