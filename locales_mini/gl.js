var i,l = (',segundos,' +
'minuto,minutos,' +
'hora,horas,' +
'día,días,' +
'semana,semanas,' +
'mes,meses,' +
'ano,anos').split(',');
for(i in l) l[i] = ['hai '+(i&1?'%s ':'1 ')+l[i],(i%2?'en %s ':(i==4||i==8)?'nunha ':'nun ')+l[i]];
l[0] = ['xusto agora', 'daquí a un pouco'];
/*
['xusto agora', 'daquí a un pouco'],
['hai %s segundos', 'en %s segundos'],
['hai 1 minuto', 'nun minuto'],
['hai %s minutos', 'en %s minutos'],
['hai 1 hora', 'nunha hora'],
['hai %s horas', 'en %s horas'],
['hai 1 día', 'nun día'],
['hai %s días', 'en %s días'],
['hai 1 semana', 'nunha semana'],
['hai %s semanas', 'en %s semanas'],
['hai 1 mes', 'nun mes'],
['hai %s meses', 'en %s meses'],
['hai 1 ano', 'nun ano'],
['hai %s anos', 'en %s anos']
*/
module.exports = function(number, index) {
  return l[index];
};
