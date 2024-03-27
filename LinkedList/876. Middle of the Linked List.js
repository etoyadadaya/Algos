// https://leetcode.com/problems/middle-of-the-linked-list/

// en: Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// ru: Дан "head" односвязного списка, необходимо вернуть среднюю вершину связного списка.
// Если две вершины в списке, то вернуть вторую.

// Входные данные:
let head = [1, 2, 3, 4, 5];

// Ожидаемый результат:
// [3, 4, 5]

// Узел односвязного списка.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Мое решение в лоб
// time: O(n).
// mem: O(1).
function middleNode (head) {
    let dummyNode = new ListNode(0, head);
    let current = dummyNode;
    let length = 0;

    while (current !== null) {
        current = current.next;
        length += 1;
    }

    current = dummyNode;

    for (let i = 0; i < length / 2; i++) {
        current = current.next;
    }

    return current;
}


// Решение с помощью двух указателей
// time: O(n).
// mem: O(1).
function middleNode (head) {
    // Инициализируем быстрый указатель.
    let slow = head;

    // Инициализируем медленный указатель.
    let fast = head;

    // Пока fast и fast.next не равен null.
    // Сдвигаем медленный на 1 вершину, а быстрый на 2.
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Возвращаем вершину середины списка.
    return slow;
}
