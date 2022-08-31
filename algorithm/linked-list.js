// 数组，存储是一段连续的空间
// [1,2,3,4,,5,6]稀疏数组
// 1->2->3->4->5->6
// 双链表
// 奇链表  偶链表
// 奇链表：1-> 3 -> 5
// 偶链表：2-> 4 -> 6
// 奇链表.next = 偶链表



let node = {
    val :1
}
let node2 = {
    val:2
}
let node3 = {
    val:3
}
node.next = node2;
node2.next = node3;
console.log(node);
let current = node;
while(current){
    // 每次取下一个 单链表的遍历
    // 单链表存储互不相关，互不连续，插入的时候不会影响其他节点，不需要移动
    // 但是单链表取值要从头结点开始取
    console.log(current.val);
    current = current.next
}
// n:链表的长度
// 时间复杂度：O(n) 空间复杂度：n
var oddEvenList = function(head) {
   var l1 = {val:null,next:null}, l1Current = l1,
       l2 = {val:null,next:null}, l2Current =l2
       i=1,
       current = head;
       while(current){
           if(i%2!==0){
            //    这样写每次将current赋值给Li.next,只是替换，没有节点后移
             l1Current.next=current;
             l1Current=l1Current.next;
            //  这样做是为了保留头结点???????，每次往后移，到最后就回不到开头，而之后要将尾节点和头结点相连，so

           }else{
            l2Current.next=current;
             l2Current=l2Current.next;

           }
           i++;
           current=current.next;
       }
    //    根据基偶去掉尾巴
    //    if(i%2!==0){
    //        l1Current.next=null
    //    }else{
    //        l2Current.next=null;
    //    }
       l1Current.next=l2.next;
        l2Current.next=null;
    
    //    头尾节点相连 l1的尾节点和l2的头结点
    console.log(l1.next)
    // l1,l2输出来发现next有问题，比如基数或者偶数最后的next后面还会有数字
    return l1.next;

};
oddEvenList({ val: 1, next: { val: 2, next: {val: 3, next: { val: 4, next: {val: 5, next: null}}} } });




//     let node = {
//         val:1
//     }
//     let node2 ={
//         val:2
//     }
//     let node3 = {
//         val:3
//     }

// node.next = node2;
// node2.next = node3;
// console.log(node);
// // node->node2->node3
// let current = node;
// while(current){
//     console.log(current.val);
//     current = current.next;
// }
