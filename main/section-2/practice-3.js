'use strict';
function getnum(str) {
  var ans=[];
  for(var i=0;i<str.length;i++)
  {
    if(str[i]<='9'&&str[i]>='0')
    {ans.push(str[i]);}
  }
  var num=ans[0];
  for(i=1;i<ans.length;i++)
  {num=num+ans[i];}
  return parseInt(num);
}

module.exports = function countSameElements(collection)
{
    var ans=[];
    var i=0;
    var k='a';
    var c=0;
    var tempk,tempc;
    collection = [
        'a', 'a', 'a',
        'e', 'e', 'e', 'e', 'e', 'e', 'e',
        'h', 'h', 'h', 'h', 'h', 'h', 'h[3]', 'h', 'h',
        't', 't-2', 't', 't', 't', 't', 't', 't', 't[10]',
        'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
        'c:8',
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
                ans[i].name=k;ans[i].summary=c;
                i++;
                k=item;
                c=1;
            }
        }
        else
        {
            tempk=item.substring(0,1);
            tempc=getnum(item);
            if(tempk==k)
            {
                c+=tempc;
            }
            else
            {
                ans[i]=new Object();
                ans[i].name=k;ans[i].summary=c;
                i++;
                k=tempk;
                c=tempc;
            }

        }
    }
    ans[i]=new Object();
    ans[i].name=k;ans[i].summary=c;
    return ans;
}
