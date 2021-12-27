// const proj1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let roll_no=[1,2,3,4,5,]
//         resolve(roll_no)
//     },2000);
// });



// const pobj1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let roll_no=[1,2,3,4,5,]
//         resolve(roll_no)
//     },2000);
// });
// pobj1.then((rollno)=>{
//     console.log(rollno);
// });



// const pobj1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let roll_no=[1,2,3,4,5,]
//         // resolve(roll_no)
//         reject('Error while communicating');
//     },2000);
// });
// pobj1.then((rollno)=>{
//     console.log(rollno);
// }).catch((error)=>{
//     console.log(error);
// })


// const pobj1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let roll_no=[1,2,3,4,5,]
//         // resolve(roll_no)
//         reject('Error while communicating');
//     },2000);
// });

// const getBiodata =()=>{
//     return new Promise((resolve,reject)=>{

//     })
// }

// pobj1.then((rollno)=>{
//     console.log(rollno);
// }).catch((error)=>{
//     console.log(error);
// })



// async function getdata(){
//     const rollnodata=await pobj1;
//     console.log(rollnodata);
//     const biodatas= await getBiodata(rollno(1));
//     console.log()
// }

// getdata()





var promise = new Promise(function(resolve, reject) {
    const x = "mayurigaikwad";
    const y = "mayuriwad"
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
     
  promise.then(function () {
          console.log('Success, You are a MAYURI');
    }).catch(function () {
          console.log('Some error has occurred');
      });


