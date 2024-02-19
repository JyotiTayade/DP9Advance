
class single
{
    public x:number=20
}
class inheritance extends single
{
    display ():void
    {
        console.log(this.x)
    }
}

let obj=new inheritance()
//console.log(obj.x)
obj.display()