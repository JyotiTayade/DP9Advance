



export class Single
{
    public x:number=20
    constructor(name:string)
    {
        console.log("This is Parent = "+name)
    }
}
class InheritanceDemo1 extends Single
{

    constructor()
    {
        super('rajesh')
    }
       public display():void{
            console.log(this.x)
        }
}

let obj=new InheritanceDemo1()
console.log(obj.x)
obj.display()