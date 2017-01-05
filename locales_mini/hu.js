var i=12,t,l = (
'másodperce,másodpercen,' +
'perce,percen,' +
'órája,órán,' +
'napja,napon,' +
'hete,héten,' +
'hónapja,hónapon,' +
'éve,éven').split(',');
for(; i>=0; i-=2) l[i] = l[i+1] = [l[i],l[i+1]];
for(i in l) l[i] = (t = (i&1?'%s ':'1 '), [t+l[i][0],t+l[i][1]+' belül']);
l[0] = ['éppen most', 'éppen most'];
/*
['éppen most', 'éppen most'],
['%s másodperce', '%s másodpercen belül'],
['1 perce', '1 percen belül'],
['%s perce', '%s percen belül'],
['1 órája', '1 órán belül'],
['%s órája', '%s órán belül'],
['1 napja', '1 napon belül'],
['%s napja', '%s napon belül'],
['1 hete', '1 héten belül'],
['%s hete', '%s héten belül'],
['1 hónapja', '1 hónapon belül'],
['%s hónapja', '%s hónapon belül'],
['1 éve', '1 éven belül'],
['%s éve', '%s éven belül']
*/
module.exports = function(number, index) {
  return l[index];
};
