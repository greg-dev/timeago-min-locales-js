var i,t,l = (/*'segundo'+*/',segundos,' +
'minuto,minutos,' +
'hora,horas,' +
'dia,dias,' +
'semana,semanas,' +
'mês,meses,' +
'ano,anos').split(',');
for(i in l) l[i] = (t = (i&1?'%s ':(i==4||i == 8?'uma ':'um '))+l[i], ['há '+t,'em '+t]);
l[0] = ['agora mesmo', 'daqui um pouco'];
/*
['agora mesmo', 'daqui um pouco'],
['há %s segundos', 'em %s segundos'],
['há um minuto', 'em um minuto'],
['há %s minutos', 'em %s minutos'],
['há uma hora', 'em uma hora'],
['há %s horas', 'em %s horas'],
['há um dia', 'em um dia'],
['há %s dias', 'em %s dias'],
['há uma semana', 'em uma semana'],
['há %s semanas', 'em %s semanas'],
['há um mês', 'em um mês'],
['há %s meses', 'em %s meses'],
['há um ano', 'em um ano'],
['há %s anos', 'em %s anos']
*/
module.exports = function(number, index) {
  return l[index];
};
