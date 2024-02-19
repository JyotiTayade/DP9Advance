
class Student
{
    id:number
    name:string
    sub1:number
    sub2:number
    sub3:number


    constructor(id:number,name:string,sub1:number,sub2:number,sub3:number)
    {
        this.id=id;
        this.name=name;
        this.sub1=sub1;
        this.sub2=sub2;
        this.sub3=sub3;
    }
     percentage():void
     {
        console.log("percentage = " +((this.sub1+this.sub2+this.sub3)*100/300))
     }


    display():void
    {
        console.log(this.id+"=="+this.name+"=="+this.sub1+"=="+this.sub2+"=="+this.sub3)
    }
}

let st = new Student(11, 'Jyoti',67, 78 , 69)
st.display()
st.percentage()