var i,t,l = (',secondi,' +
'minuto,minuti,' +
'ora,ore,' +
'giorno,giorni,' +
'settimana,settimane,' +
'mese,mesi,' +
'anno,anni').split(',');
for(i in l) l[i] = (t = (i&1?'%s ':(i==4?'un\'':(i==8?'una ':'un ')))+l[i], [t+' fa',t+' da ora']);
l[0] = ['poco fa', 'tra poco'];
/*
['poco fa', 'tra poco'],
['%s secondi fa', '%s secondi da ora'],
['un minuto fa', 'un minuto da ora'],
['%s minuti fa', '%s minuti da ora'],
['un\'ora fa', 'un\'ora da ora'],
['%s ore fa', '%s ore da ora'],
['un giorno fa', 'un giorno da ora'],
['%s giorni fa', '%s giorni da ora'],
['una settimana fa', 'una settimana da ora'],
['%s settimane fa', '%s settimane da ora'],
['un mese fa', 'un mese da ora'],
['%s mesi fa', '%s mesi da ora'],
['un anno fa', 'un anno da ora'],
['%s anni fa', '%s anni da ora']
*/
module.exports = function(number, index) {
  return l[index];
};
