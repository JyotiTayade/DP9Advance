



class StringPass
{
    revserStr(str:string):string{
        
           let  word:string=''
            for(let i=str.length-1;i>=0;i--)
            {
                    word=word+str.charAt(i)
            }

            return word

    }


    static vowelCount(str:string):number{
       let count:number=0

       for(let i=0;i<str.length;i++)
       {
          if(str.charAt(i)=='a'||str.charAt(i)=='u'||str.charAt(i)=='o'||str.charAt(i)=='e'||str.charAt(i)=='i')
          {
              count++;
          }
       }
       return count

    }
}


let s=new StringPass()

console.log(s.revserStr('Jyoti'))

let cnt=StringPass.vowelCount('India')

console.log(cnt)