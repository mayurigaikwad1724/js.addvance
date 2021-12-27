// class Student{
//     constructor(name){
//         this.name=name;
//     }
// }
// var student1=new Student("mayuri");
// console.log(student1);

// let student2={name:"mayu"};
// console.log(student2)




var Mobile = function(model_no,sprice){
    this.model=model_no;
    this.color="white";
    this.price=3000
    this.sp=sprice;
    this.sellingprice=function(){
        return (this.price+this.sp);
    }
    this.data=function(){
        console.log("model no: "+
        this.sellingprice());
    }
}
var samsung=new Mobile("Galaxy",2000);
var nokia=new Mobile("3310",1000)
nokia.data();