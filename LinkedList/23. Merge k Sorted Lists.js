// https://leetcode.com/problems/merge-k-sorted-lists/

// en: You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.
// ru: Дан массив "k" связных списков, каждый список отсортирован по возврастанию.
// Нужно объединить все списки в один отсортированный по возврастанию список.

// Входные данные:
let lists = [[1, 4, 5], [1, 3, 4], [2, 6]];

// Ожидаемый результат:
// [1, 1, 2, 3, 4, 4, 5, 6]

// Узел односвязного списка.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function merge(list1, list2) {
    if (list1 === null)
        return list2;
    if (list2 === null)
        return list1;

    if (list1.val < list2.val) {
        list1.next = merge(list1.next, list2);
        return list1;
    } else {
        list2.next = merge(list1, list2.next);
        return list2;
    }
}

function mergeKLists(head) {
    let answerList = null;

    for (let i = 0; i < lists.length; i++) {
        answerList = merge(answerList, lists[i]);
    }

    return answerList;
}
