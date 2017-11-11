'use strict';

module.exports = function collectSameElements(collectionA, objectB)
{
  var ans=[];
  var collectionA = [{key: 'a'}, {key: 'e'}, {key: 'h'}, {key: 't'}, {key: 'f'}, {key: 'c'}, {key: 'g'}, {key: 'b'}, {key: 'd'}];
  var collectionB = {value: ['a', 'd', 'e', 'f']};
  for(var i=0;i<collectionA.length;i++)
  {
    for(var j=0;j<collectionB.value.length;j++)
    {
      if(collectionA[i].key==collectionB.value[j])
      {ans.push(collectionA[i].key);}
    }
  }
  return ans;
}
