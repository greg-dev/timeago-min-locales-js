var i=6,t,l = (/*'sekuntia'+*/',sekuntia,sekunnin,' +
'minuutti,minuuttia,minuutin,' +
'tunti,tuntia,tunnin,' +
'päivä,päivää,päivän,' +
'viikko,viikkoa,viikon,' +
'kuukausi,kuukautta,kuukauden,' +
'vuosi,vuotta,vuoden').split(',');
for(; i>=0; i--) (t = i*3, l[t] = [l[t],l[++t+1]], l[t] = [l[t],l[++t]], l.splice(t,1));
for(i in l) l[i] = (t = (i&1?'%s ':''), [t+l[i][0]+' sitten',t+l[i][1]+' päästä']);
l[0] = ['juuri äsken', 'juuri nyt'];
/*
['juuri äsken', 'juuri nyt'],
['%s sekuntia sitten', '%s sekunnin päästä'],
['minuutti sitten', 'minuutin päästä'],
['%s minuuttia sitten', '%s minuutin päästä'],
['tunti sitten', 'tunnin päästä'],
['%s tuntia sitten', '%s tunnin päästä'],
['päivä sitten', 'päivän päästä'],
['%s päivää sitten', '%s päivän päästä'],
['viikko sitten', 'viikon päästä'],
['%s viikkoa sitten', '%s viikon päästä'],
['kuukausi sitten', 'kuukauden päästä'],
['%s kuukautta sitten', '%s kuukauden päästä'],
['vuosi sitten', 'vuoden päästä'],
['%s vuotta sitten', '%s vuoden päästä']
*/
module.exports = function(number, index) {
  return l[index];
};
