var i=6,t,l = '秒,分鐘,小時,天,周,月,年'.split(',');
for(; i>=0; i--) l[i*2+1] = l[i*2] = l[i];
for(i in l) l[i] = (t = (i&1?'%s':'1')+l[i], [t+'前',t+'後']);
l[0] = ['剛剛', '片刻後'];
/*
['剛剛', '片刻後'],
['%s秒前', '%s秒後'],
['1分鐘前', '1分鐘後'],
['%s分鐘前', '%s分鐘後'],
['1小時前', '1小時後'],
['%s小時前', '%s小時後'],
['1天前', '1天後'],
['%s天前', '%s天後'],
['1周前', '1周後'],
['%s周前', '%s周後'],
['1月前', '1月後'],
['%s月前', '%s月後'],
['1年前', '1年後'],
['%s年前', '%s年後']
*/
module.exports = function(number, index) {
  return l[index];
};
