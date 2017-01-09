var i=6,t,l = 'giây,phút,giờ,ngày,tuần,tháng,năm'.split(',');
for(; i>=0; i--) l[i*2+1] = l[i*2] = l[i];
for(i in l) l[i] = (t = (i&1?'%s ':'1 ')+l[i], [t+' trước','trong '+t]);
l[0] = ['vừa xong', 'một lúc'];
/*
['vừa xong', 'một lúc'],
['%s giây trước', 'trong %s giây'],
['1 phút trước', 'trong 1 phút'],
['%s phút trước', 'trong %s phút'],
['1 giờ trước', 'trong 1 giờ'],
['%s giờ trước', 'trong %s giờ'],
['1 ngày trước', 'trong 1 ngày'],
['%s ngày trước', 'trong %s ngày'],
['1 tuần trước', 'trong 1 tuần'],
['%s tuần trước', 'trong %s tuần'],
['1 tháng trước', 'trong 1 tháng'],
['%s tháng trước', 'trong %s tháng'],
['1 năm trước', 'trong 1 năm'],
['%s năm trước', 'trong %s năm']
*/
module.exports = function(number, index) {
  return l[index];
};
