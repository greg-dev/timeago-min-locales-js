var i=0,t,l = (/*'secundă'+*/',secunde,' +
'minut,minute,' +
'oră,ore,' +
'zi,zile,' +
'săptămână,săptămâni,' +
'lună,luni,' +
'an,ani').split(',');
for(; i<14;) {
  t = i ? (t = (i&1?'%s ':(2==i%10?'un ':'o '))+l[i], 'acum '+t+',peste '+t) : 'chiar acum,chiar acum';
  l[i+14] = t.replace(/%s/g, '%s de').split(',');
  l[i++] = t.split(',');
}
/*
['chiar acum', 'chiar acum'],
['acum %s secunde', 'peste %s secunde'],
['acum un minut', 'peste un minut'],
['acum %s minute', 'peste %s minute'],
['acum o oră', 'peste o oră'],
['acum %s ore', 'peste %s ore'],
['acum o zi', 'peste o zi'],
['acum %s zile', 'peste %s zile'],
['acum o săptămână', 'peste o săptămână'],
['acum %s săptămâni', 'peste %s săptămâni'],
['acum o lună', 'peste o lună'],
['acum %s luni', 'peste %s luni'],
['acum un an', 'peste un an'],
['acum %s ani', 'peste %s ani']
*/
module.exports = function(number, index) {
  return l[number < 20 ? index : index + 14];
};
