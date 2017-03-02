var i=0,t,l = (',,' +
'minut,minuter,' +
'timme,timmar,' +
'dag,dagar,' +
'vecka,veckor,' +
'månad,månader,' +
'år,år').split(',');
for(; i<14;) l[i] = [l[i], l[i++]];
l[1] = ['sekunder','seconder'];
for(i=1; i<14;) l[i] = (t = (i&1?'%s ':'1 '), [t+l[i][0]+' sedan', 'om '+t+l[i++][1]]);
l[0] = ['just nu', 'om en stund'];
/*
['just nu', 'om en stund'],
['%s sekunder sedan', 'om %s seconder'],
['1 minut sedan', 'om 1 minut'],
['%s minuter sedan', 'om %s minuter'],
['1 timme sedan', 'om 1 timme'],
['%s timmar sedan', 'om %s timmar'],
['1 dag sedan', 'om 1 dag'],
['%s dagar sedan', 'om %s dagar'],
['1 vecka sedan', 'om 1 vecka'],
['%s veckor sedan', 'om %s veckor'],
['1 månad sedan', 'om 1 månad'],
['%s månader sedan', 'om %s månader'],
['1 år sedan', 'om 1 år'],
['%s år sedan', 'om %s år']
*/
module.exports = function(number, index) {
  return l[index];
};
