
class Reversting
{
    revserStr(str:string):string
    {
        
        let  word:string=''
         for(let i=str.length-1;i>=0;i--)
         {
                 word=word+str.charAt(i)
         }

         return word

 }
}

let str=new Reversting()

console.log(str.revserStr('Jyoti'))