// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
// 示例：
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//
var addTwoNumbers = function(l1, l2) {
    let a = 0
    let b = new ListNode()
    let c = b
    let c1 = l1, c2 = l2
    while(c1||c2||a) {
        a += ((c1&&c1.val)||0)+((c2&&c2.val)||0)
        let node = new ListNode(a%10)
        c.next = node
        a = parseInt(a/10)
        c1 && (c1 = c1.next)
        c2 && (c2 = c2.next)
        c = c.next
    }
    return b.next
}

