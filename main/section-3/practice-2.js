'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var k;
  var collectionA = [
      {key: 'a', count: 3},
      {key: 'e', count: 7},
      {key: 'h', count: 11},
      {key: 't', count: 20},
      {key: 'f', count: 9},
      {key: 'c', count: 8},
      {key: 'g', count: 7},
      {key: 'b', count: 6},
      {key: 'd', count: 5}
  ];
  var objectB = {value: ['a', 'd', 'e', 'f']};
  for(var i=0;i<collectionA.length;i++)
  {
      for(var j=0;j<objectB.value.length;j++)
      {
          if(collectionA[i].key==objectB.value[j])
          {
            k=parseInt(collectionA[i].count/3)
            collectionA[i].count-=k;
          }
      }
  }
  return collectionA;
}
