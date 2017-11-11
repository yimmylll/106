'use strict';
//function a(key,count) {
  //  this.key=key;
    //this.count=count;

//}

module.exports = function countSameElements(collection)
{
    var i=0;
    var ans=[];
  var k='a';
  var c=0;
  var collection = [
        'a', 'a', 'a',
        'e', 'e', 'e', 'e', 'e', 'e', 'e',
        'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
        't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
        'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
        'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
        'g', 'g', 'g', 'g', 'g', 'g', 'g',
        'b', 'b', 'b', 'b', 'b', 'b',
        'd', 'd', 'd', 'd', 'd'
      ];
  for(let item of collection)
  {
    if(item==k)
    {
      c++;
    }
    else
    {
      ans[i]=new Object();
      ans[i].key=k;ans[i].count=c;
      i++;
      k=item;
      c=1;
    }
  }
    ans[i]=new Object();
    ans[i].key=k;ans[i].count=c;
  return ans;
}
