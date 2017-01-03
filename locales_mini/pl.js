var i,t,l = (/*'sekundę'+*/',sekund,' +
'minutę,minut,' +
'godzinę,godzin,' +
'dzień,dni,' +
'tydzień,tygodni,' +
'miesiąc,miesięcy,' +
'rok,lat,' +
'sekundy,minuty,godziny,dni,tygodnie,miesiące,lata').split(',');
for(i in l) l[i] = (t = (i&1||i>12?'%s ':'1 ')+l[i], [t+' temu','za '+t]);
l[0] = ['w tej chwili','za chwilę'];
// l[6] = ['wczoraj','jutro'];
/*
['w tej chwili', 'za chwilę'],
['%s sekund temu', 'za %s sekund'],
['1 minutę temu', 'za 1 minutę'],
['%s minut temu', 'za %s minut'],
['1 godzinę temu', 'za 1 godzinę'],
['%s godzin temu', 'za %s godzin'],
['1 dzień temu', 'za 1 dzień'],
['%s dni temu', 'za %s dni'],
['1 tydzień temu', 'za 1 tydzień'],
['%s tygodni temu', 'za %s tygodni'],
['1 miesiąc temu', 'za 1 miesiąc'],
['%s miesięcy temu', 'za %s miesięcy'],
['1 rok temu', 'za 1 rok'],
['%s lat temu', 'za %s lat'],
['%s sekundy temu', 'za %s sekundy'],
['%s minuty temu', 'za %s minuty'],
['%s godziny temu', 'za %s godziny'],
['%s dni temu', 'za %s dni'],
['%s tygodnie temu', 'za %s tygodnie'],
['%s miesiące temu', 'za %s miesiące'],
['%s lata temu', 'za %s lata']
*/
module.exports = function(number, index) {
  return l[index&1?(number%10>4||number%10<2||1===~~(number/10)%10?index:++index/2+13):index];
};
