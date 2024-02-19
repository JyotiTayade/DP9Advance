
class modifier
{
    private x:number=100;
    public name:String='Aarti'

    display():void
    {
        console.log(this.x)
        console.log(this.x+" == "+this.name)
    }
}

let m=new modifier()
m.display()
console.log(m.name)
