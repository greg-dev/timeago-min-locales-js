var i=6,t,l = 'second,minute,hour,day,week,month,year'.split(',');
for(; i>=0; i--) l[i*2+1] = l[i*2] = l[i];
for(i in l) l[i] = (t = i&1?'%s '+l[i]+'s':'1 '+l[i], [t+' ago','in '+t]);
l[0] = ['just now', 'right now'];
/*
['just now', 'right now'],
['%s seconds ago', 'in %s seconds'],
['1 minute ago', 'in 1 minute'],
['%s minutes ago', 'in %s minutes'],
['1 hour ago', 'in 1 hour'],
['%s hours ago', 'in %s hours'],
['1 day ago', 'in 1 day'],
['%s days ago', 'in %s days'],
['1 week ago', 'in 1 week'],
['%s weeks ago', 'in %s weeks'],
['1 month ago', 'in 1 month'],
['%s months ago', 'in %s months'],
['1 year ago', 'in 1 year'],
['%s years ago', 'in %s years']
*/
module.exports = function(number, index) {
  return l[index];
};
