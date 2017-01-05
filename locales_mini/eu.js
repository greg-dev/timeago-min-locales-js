var i=6,t,l = 'segundu,minutu,ordu,egun,aste,hillabete,urte'.split(',');
for(; i>=0; i--) l[i*2+1] = l[i*2] = l[i];
for(i in l) l[i] = (t = (i&1?'%s '+l[i]:l[i]+' 1'), ['duela '+t,t+' barru']);
l[0] = ['orain', 'denbora bat barru'];
/*
['orain', 'denbora bat barru'],
['duela %s segundu', '%s segundu barru'],
['duela minutu 1', 'minutu 1 barru'],
['duela %s minutu', '%s minutu barru'],
['duela ordu 1', 'ordu 1 barru'],
['duela %s ordu', '%s ordu barru'],
['duela egun 1', 'egun 1 barru'],
['duela %s egun', '%s egun barru'],
['duela aste 1', 'aste 1 barru'],
['duela %s aste', '%s aste barru'],
['duela hillabete 1', 'hillabete 1 barru'],
['duela %s hillabete', '%s hillabete barru'],
['duela urte 1', 'urte 1 barru'],
['duela %s urte', '%s urte barru']
*/
module.exports = function(number, index) {
  return l[index];
};
