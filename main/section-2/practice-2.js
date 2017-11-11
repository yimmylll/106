'use strict';

module.exports = function countSameElements(collection)
{
  var ans=[];
  var i=0;
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
      'd-5'
  ];
    for(let item of collection)
    {
        if(item.length==1)
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
        else
        {
            ans[i]=new Object();
            ans[i].key=k;ans[i].count=c;
            i++;
            k=item.substring(0,1);
            c=parseInt(item.substring(2));
        }
    }
    ans[i]=new Object();
    ans[i].key=k;ans[i].count=c;
    return ans;
}
