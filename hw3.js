
// function system (a,b){
// let r=[]
// for(let i=a;i<=b;i++){
//     r.push(i)
// }
// return r
// }
// console.log(system(1,4));
// task 2
// function system (a){
//     let ch=0
//     let nech=0
//     let r=[]
//     a.forEach(function (e){
//         if(e%2==0)ch+=e
//         if(e%2!=0)nech+=e
//     })
//     r.push(ch,nech)
//     return r
// }
// console.log(system([1,3,4,5,6]));
// task 
// function system (a){
//     t=0

//     cnt=0
//     s=0
//     r=[]
//     a.forEach(function (e){
//         s+=e
//         cnt++
//     })
//     t=s/cnt
//     for(let i=0;i<=cnt;i++){
//         r.push(t)
//     }
//     return r
// }
// console.log( system([1,2,3,4,5]));
// task 4
// function system (a){
//     s=[]
//     r=[]
//     for(let i=1;i<=a;i++){
//         s.push(r)
//     }
//     for(let  t=1;t<=a;t++){
//         r.push(a)
//     }
//     return s
// }
// console.log(system(3));

//task  5
// function system (a,b){
//     cnt =0
//     s=0
//     for(let i=0;i<=a.length-1;i+=b){
// s+=a[i]
// cnt++

//     }
//     return s
// }
// console.log(system([7, 3, 10, 4, 5, 8, 4, 9, 6, 9, 10, 1, 4],4))
//task 8
// function system (...a){
// let r=[]
// a.forEach(function(e){
//     r.push(
//         e.reduce(function(ac,cu){
// return ac+cu
//         },0)
//     )
// })

// return r.sort()
// }
// console.log(system([1,3,4,5],[2,3,5,6]));
// task 9
// function system (a){
//     r=[]
    

//     a.forEach(function(e){
//         let factorial=1
//         for(let i=1;i<=e;i++){
//             factorial*=i
//         }
//         r.push(factorial)
//     })
//     return r
// }
// console.log(system([1,2,3,4,5]));
// task 10
// function system (a){
//     cnt=0
//     a.forEach(function (e){
//         for(let i=2;i<e;i++){
//             if(e%i==0)cnt++

//         }
//     })
//     if(cnt>0)return false
//     return true
// }
// console.log(system([19,1]));
//task 11
// function system (a,b){
//     r=[]
//     a.forEach(function (e,i){
//         if(e.includes(b)==true)r.push(i)
//     })
// return r
// }
// console.log(system([[1, 2], [1, 2]], 2));
// task 12
// function system (a){
//     cnt=0
//     a.forEach(function (e,i){
//         if(e!=i)cnt++
//     })
//     if(cnt>0)return false
//     return true
// }
// console.log(system([0]));
// task 13
// function system (a,b,c){+
//     let  arr = []
      
//       for(let i=1;i<=a;i++){
//           arr.push(Math.floor(Math.random()*(c-b))+b)
//       }
//       return arr
//   }
//   console.log(system());
// task 14
// function system (a){
// cnt=0
// a.forEach(function (e){
//     cnt++
// })
// return cnt
// }
// console.log(system([3,4,5,67]));

/////////////////////////////////// Home work

// function system (a){
//     let s=0
//     a.forEach(function (e){
//         s+=e**3
//     })
//     return s
// }
// console.log(system([1,5,9]));
// task 2
// function system (a){
//     let r=[]
//     a.forEach(function (e){
//         if(e!=false && e!=0 && e!=null && e!="" && e!=undefined && e!=NaN )r.push(e)
//     })
// return r
// }
// console.log(system([0,1,3,2,4,NaN,"",]));
// task 3
// function system (a){
//     cnt=0
//     for(let i=0;i<=a.length-1;i++){
//         if(a[i]!=a[i+1])cnt++
//     }
//     if(cnt>0)return cnt
//     return true
// } 
// console.log(system([true,true]));
// task 4
// function system (a){
//     let s=0
//     for(let i=0;i<=a.length-1;i++){
//         if(i%2==0)s+=a[i]
//     }
//     return s*5
// }
// console.log(system([2,3,4,5]));
// task 5
// function system (a,b){
//     for(let i=0;i<=a.length-1;i++){
//         if(a[i]!=b[i])return false
//     }
//     return true
// }
// console.log(system([1,2,3,4],[4,3,2,1]));
// task 6
// function system (a,b){
//     r=[]
//     for(let i=0;i<=a.length-1;i++){
// if(a[i]!=undefined && b[i]!=undefined)r.push(a[i],b[i])
//     }
// return r
// }
// console.log(system([1,2,3,4],[5,6,7,8]));
// task 7
// function system (a){
//     r=[]
//     d=a*a
//     j=[]
//     cnt=0
//     for(let i=0;i<a;i++){
//         r.push(j)
//         for(let y=0;y<=d;y++){
//             cnt++
//             j.push[y]
//             if(cnt==3)break


//         }
//         y=cnt-1
//         cnt==0

//     }
//     return r
// }
// console.log(system([3]));