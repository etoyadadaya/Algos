// https://leetcode.com/problems/merge-two-sorted-lists/

// en: You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list.
// ru: Даны "heads" двух односвязных списков, необходимо объединить их в один отсортированный список.

// Входные данные:
let list1 = [1,2,4];
let list2 = [1,3,4];

// Ожидаемый результат:
// [1, 1, 2, 3, 4, 4]

// Узел односвязного списка.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// time: O(n).
// mem: O(1).
function mergeTwoLists (head) {
    // Инициализируем фейковую вершину.
    let dummyNode = new ListNode(0, null);
    // Устанавливаем фейковую вершину в текущий элемент.
    let current = dummyNode;

    // Идем по двум спискам до конца.
    while (list1 && list2) {
        // Проверяем какое из значений больше, либо меньше.
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        // Шагаем дальше по списку.
        current = current.next;
    }

    // Устанавливаем текущую вершину в оставшейся узел.
    current.next = list1 || list2;

    // Возвращаем список.
    return dummyNode.next;
}
