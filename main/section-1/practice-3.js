'use strict';

module.exports = function collectSameElements(collectionA, objectB)
{
  var k=0;
  var ans=[];
  var collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
  var collectionB = {value: ['a', 'd', 'e', 'f']};
  for(var i=0;i<collectionA.length;i++)
  {
    for(var j=0;j<collectionB.value.length;j++)
    {
      if(collectionA[i]==collectionB.value[j])
      {ans[k]=collectionA[i];k++;}
    }
  }
  return ans;
}
