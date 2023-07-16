var arrayA=["orange","gauva","banana","kiwi","pineapple"];
var startingIndex=1;
var indexesLength=0;
var newWord1="Ali";
var newWord2="Hamza";
arrayA.splice(1,3,"Ali","zaidi","Hamza");
var a=[];


for(i=0; i<arrayA.length+2; i++)
{
  if(i === startingIndex && indexesLength != 0)
  {       
    // arrayA[i] = newWord1;
      for(j=i; j<= indexesLength ; j++)
           {
              if(j==1)
              {
                  
                  arrayA[j] = newWord1;
              }
              else if(j==2)
              {
                  arrayA[j] = newWord2;
              }
           }
  }
  if(i === startingIndex && indexesLength ===0)
  {

 for(i=0; i<arrayA.length; i++)
       {
              a[i]= arrayA[i]
       }
       for(i=0; i<arrayA.length;i++)
       {
              if(i==1)
              {
                arrayA[i] = newWord1;
              }
              else if(i==2)
              {
                  arrayA[i] = newWord2;
              }
              else if(i > 2)
              {
                     arrayA.pop();
              }
       }
       for(j=1;j<a.length;j++)
       {
        arrayA.push(a[j])
       }
        
  }
}
console.log(arrayA);
console.log(a);