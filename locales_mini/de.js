var i,t,l = (/*'Sekunde'+*/',Sekunden,' +
'Minute,Minuten,' +
'Stunde,Stunden,' +
'Tag,Tagen,' +
'Woche,Wochen,' +
'Monat,Monaten,' +
'Jahr,Jahren').split(',');
for(i in l) l[i] = (t = (i&1?'%s ':'1 ')+l[i], ['vor '+t,'in '+t]);
l[0] = ['gerade eben', 'vor einer Weile'];
/*
['gerade eben', 'vor einer Weile'],
['vor %s Sekunden', 'in %s Sekunden'],
['vor 1 Minute', 'in 1 Minute'],
['vor %s Minuten', 'in %s Minuten'],
['vor 1 Stunde', 'in 1 Stunde'],
['vor %s Stunden', 'in %s Stunden'],
['vor 1 Tag', 'in 1 Tag'],
['vor %s Tagen', 'in %s Tagen'],
['vor 1 Woche', 'in 1 Woche'],
['vor %s Wochen', 'in %s Wochen'],
['vor 1 Monat', 'in 1 Monat'],
['vor %s Monaten', 'in %s Monaten'],
['vor 1 Jahr', 'in 1 Jahr'],
['vor %s Jahren', 'in %s Jahren']
*/
module.exports = function(number, index) {
  return l[index];
};
