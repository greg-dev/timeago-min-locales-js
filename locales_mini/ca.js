var i,t,l = (/*'segon'+*/',segons,' +
'minut,minuts,' +
'hora,hores,' +
'dia,dies,' +
'setmana,setmanes,' +
'mes,mesos,' +
'any,anys').split(',');
for(i in l) l[i] = (t = (i&1?'%s ':'1 ')+l[i], ['fa '+t,"d'aquí "+t]);
l[0] = ['fa un moment', "d'aquí un moment"];
/*
['fa un moment', "d'aquí un moment"],
['fa %s segons', "d'aquí %s segons"],
['fa 1 minut', "d'aquí 1 minut"],
['fa %s minuts', "d'aquí %s minuts"],
['fa 1 hora', "d'aquí 1 hora"],
['fa %s hores', "d'aquí %s hores"],
['fa 1 dia', "d'aquí 1 dia"],
['fa %s dies',"d'aquí %s dies"],
['fa 1 setmana', "d'aquí 1 setmana"],
['fa %s setmanes', "d'aquí %s setmanes"],
['fa 1 mes', "d'aquí 1 mes"],
['fa %s mesos', "d'aquí %s mesos"],
['fa 1 any', "d'aquí 1 any"],
['fa %s anys', "d'aquí %s anys"]
*/
module.exports = function(number, index) {
  return l[index];
};
