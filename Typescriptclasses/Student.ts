
class Student
{
    id:number;
    name:String;

    constructor (id:number ,name:string )
    {
        this.id=id;
        this.name=name;
    }
    display():void
    {
        console.log(this.id+ " == "+this.name)
    }

    showInfo():String
    {
        return 'this is method.'
    }
}

let st=new Student(100,'Kirti')
st.display()
//console.log()