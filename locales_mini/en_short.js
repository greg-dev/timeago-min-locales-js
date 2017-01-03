var i,t,l = /*'s'+*/',s,m,m,h,h,d,d,w,w,mo,mo,yr,yr'.split(',');
for(i in l) l[i] = (t = (i&1?'%s':'1')+l[i], [t+' ago','in '+t]);
l[0] = ['just now', 'right now'];
/*
['just now', 'right now'],
['%ss ago', 'in %ss'],
['1m ago', 'in 1m'],
['%sm ago', 'in %sm'],
['1h ago', 'in 1h'],
['%sh ago', 'in %sh'],
['1d ago', 'in 1d'],
['%sd ago', 'in %sd'],
['1w ago', 'in 1w'],
['%sw ago', 'in %sw'],
['1mo ago', 'in 1mo'],
['%smo ago', 'in %smo'],
['1yr ago', 'in 1yr'],
['%syr ago', 'in %syr']
*/
module.exports = function(number, index) {
  return l[index];
};
