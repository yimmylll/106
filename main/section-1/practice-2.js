'use strict';

module.exports = function collectSameElements(collectionA, collectionB)
{
    var m=0;
    var collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
    var collectionB = [['a', 'd', 'e', 'f']];
    var ans=[];
    for(var i=0;i<collectionA.length;i++)
    {
      for(var j=0;j<collectionB.length;j++)
      {
        for(var k=0;k<collectionB[j].length;k++)
        {
          if(collectionA[i]==collectionB[j][k])
          {
            ans[m]=collectionA[i];
            m++;
          }
        }
      }
    }
  return ans;
}
