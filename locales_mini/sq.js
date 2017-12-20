var i,t,l = (',sekondash,' +
'minute,minutash,' +
'ore,orësh,' +
',ditësh,' +
'jave,javësh,' +
'muaji,muajsh,' +
'viti,vjetësh').split(',');
for(i in l) l[i] = (t = (i&1?'%s ':'një ')+l[i], ['para '+t, 'pas '+t]);
l[0] = ['pak më parë', 'pas pak'];
l[6] = ['dje', 'nesër'];
/*
['pak më parë', 'pas pak'],
['para %s sekondash', 'pas %s sekondash'],
['para një minute', 'pas një minute'],
['para %s minutash', 'pas %s minutash'],
['para një ore', 'pas një ore'],
['para %s orësh', 'pas %s orësh'],
['dje', 'nesër'],
['para %s ditësh', 'pas %s ditësh'],
['para një jave', 'pas një jave'],
['para %s javësh', 'pas %s javësh'],
['para një muaji', 'pas një muaji'],
['para %s muajsh', 'pas %s muajsh'],
['para një viti', 'pas një viti'],
['para %s vjetësh', 'pas %s vjetësh']
*/
module.exports = function(number, index) {
  return l[index];
}
