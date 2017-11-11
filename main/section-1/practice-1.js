'use strict';

module.exports = function collectSameElements(collectionA, collectionB)
{
  var ans=[];
  var collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
  var collectionB = ['a', 'd', 'e', 'f'];
  //length=collectionA.length>collectionB.length?collectionA.length:collectionB.length;
  for(let item of collectionA)
  {
    for(let ch of collectionB)
    {
      if (item==ch)
      {
          ans.push(item);
      }
    }
  }
  return ans;
}
