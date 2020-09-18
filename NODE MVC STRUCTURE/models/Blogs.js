
const products=[]
//let id=0;
module.exports=class Blogs{
    
    
    constructor(Blog1,Blog2,Blog3){
        this.Blog1=Blog1;
        this.Blog2=Blog2;
        this.Blog3=Blog3;
        //id++;

    }
   
    save(){
        this.key=products.length
        products.push(this);
        console.log(products)
    }
    static fetch(){
        return products;
    }
    static fetchsingle(id){
       const k=products.find(p=>p.key==id) 
      // console.log(k)
       return k;
    }


}