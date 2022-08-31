// var twoSum;
// console.log(typeof twoSum);//undefined
// twoSum=null;//值为空 研究为什么null是object不是null
// console.log(typeof twoSum)
// // let a = 2;//全局作用域
// 时间复杂度,n*n=O(n^2)
// 
   
//   var twoSum = function(nums,target){
//    let arr=[];//坐标放进去
//    for(let i=0;i<nums.lenght;i++){
//     //    循环一遍
//     for(let j =i+1;j<nums.lenght;j++){
//         // 内层循环 不能自己加自己
//         if(nums[i] + nums[j] === target){
//             arr=[i,j];
//             return arr;        }
//     }
//    }
// }
   
    // 局部
    // console.log(typeof twoSum);
    // var twoSum = function(nums, target) {
    //     let arr = []; //坐标放进去
    //     for (let i = 0;  i < nums.length; i++) {  //暴力解法
    //       // 循环一遍
    //       for (let j = i + 1;  j < nums.length; j++) { //内层循环
    //         // 不能自恋
    //         if (nums[i] + nums[j] === target) {
    //           arr = [i, j];
    //           return arr;
    //         }
    //       }
    //     }
    //   }
      
    // 省时间 O(n^2)->O(n)
    const twoSum = function(nums,target){

        let map = {};//对象字面量
        nums.forEach(function(e,i){
            map[e] =i; //map[e]=i;
        })
    //    console.log(map[7]);
        for(let i=0;i<nums.length;i++){
            let j = map[target-nums[i]];
            if(j && j!==i){
                return[i,j];
            }
        }
        
    };//声明常量时必须赋值，并且后面不能改变
    twoSum([2,7,11,15],9);
    // 时间复杂度 n+n=2n O（n）
