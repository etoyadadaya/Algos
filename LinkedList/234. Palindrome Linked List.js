// https://leetcode.com/problems/palindrome-linked-list/

// en: Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
// ru: Дан "head" односвязного списка, необходимо вернуть true, если это палиндром иначе false.

// Входные данные:
let head = [1, 2, 2, 1];

// Ожидаемый результат:
// true

// Узел односвязного списка.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Вспомогательная функция для нахождения середины списка.
function middleNode(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// Вспомогательная функция для разворачивания списка.
function reverseList(head) {
    let prev = null;
    let current = head;

    while (current) {
        let tmp = current;
        current = current.next;
        tmp.next = prev;
        prev = tmp;
    }

    return prev;
}

// time: O(n).
// mem: O(1).
function isPalindrome (head) {
    // Инициализируем переменную - второй половиной списка.
    let firstHalfEndNode = middleNode(head);
    // Разворачиваем эту половину списка.
    let secondHalfBeginNode = reverseList(firstHalfEndNode);

    // Ставим указатель в начало списка
    let firstPointer = head;
    // Ставим указатель на начало развернутого списка.
    let secondPointer = secondHalfBeginNode;

    // Начинаем перебор вершин.
    while (firstPointer && secondPointer) {
        // Если значения в вершинах не равны, то это не палиндром.
        if (firstPointer.val !== secondPointer.val) {
            return false;
        }
        // Переходим на следующую вершину.
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }

    return true;
}
