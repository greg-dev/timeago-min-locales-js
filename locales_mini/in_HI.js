var i=6,t,l = ('सेकंड,' +
'मिनट,' +
'घंटे,' +
'दिन,' +
'सप्ताह,' +
'महीने,' +
'साल').split(',');
for(; i>=0; i--) l[2*i+1] = l[i*2] = l[i];
for(i in l) l[i] = (t = (i&1?'%s ':'1 '), [t+(i==9?'हफ्ते':l[i])+' पहले',t+(i==9?'हफ्तों':(i==7?'दिनों':(i==11?'महीनों':l[i])))+' में']);
l[0] = ['अभी', 'कुछ समय'];
/*
['अभी', 'कुछ समय'],
['%s सेकंड पहले', '%s सेकंड में'],
['1 मिनट पहले', '1 मिनट में'],
['%s मिनट पहले', '%s मिनट में'] ,
['1 घंटे पहले', '1 घंटे में'] ,
['%s घंटे पहले', '%s घंटे में'] ,
['1 दिन पहले', '1 दिन में'] ,
['%s दिन पहले', '%s दिनों में'] ,
['1 सप्ताह पहले', '1 सप्ताह में'] ,
['%s हफ्ते पहले', '%s हफ्तों में'] ,
['1 महीने पहले', '1 महीने में'] ,
['%s महीने पहले', '%s महीनों में'] ,
['1 साल पहले', '1 साल में'] ,
['%s साल पहले','%s साल में']
*/
module.exports = function(number, index) {
  return l[index];
};