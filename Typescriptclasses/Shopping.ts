
class shopping
{
    proid:number;
    proname:string;
    proquan:number;
    proprice:number;
    total:number;

    constructor(proid:number,proname:string,proquan:number,proprice:number)
    {
        this.proid=proid;
        this.proname=proname;
        this.proquan=proquan;
        this.proprice=proprice;
    }

    calculatebill():void
    {
        var total='X'
        if(this.proquan<=0)
        {
            console.log("somthing is going wrong.....")
        }
        else 
        {
            this.total = (this.proquan*this.proprice)

            console.log(this.proid+" , "+this.proname+" ,  "+this.proquan+"  , "+this.proprice+"==Total bill== "+this.total)
        }
    }
}

let sh =new shopping(500,'roomfreshner' ,2 , 250)
    sh.calculatebill()
