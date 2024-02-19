


class Person
{
    protected city:string='Nashik'
}
class Manager extends Person
{
   display():void
   {
    console.log(this.city)
   }
}


// let p=new Person()
// console.log(p.city)

 let mn=new Manager()
mn.display()
// console.log(mn.city)
