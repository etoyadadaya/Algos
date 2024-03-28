// https://leetcode.com/problems/linked-list-cycle/

// en: Given head, the head of a linked list, determine if the linked list has a cycle in it.
// ru: Дан односвязный список, выяснить имеется ли зацикленность.

// Входные данные:
let head = [3, 2, 0, -4];
let pos = 1;

// 3 -> 2 -> 4 -> -4
// Переходим из конца списка к вершина под номер pos = 1;

// Ожидаемый результат:
// true

// Узел односвязного списка.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function hasCycle(head) {
    // Инициализируем два указателя.
    let slow = head;
    let fast = head;

    // Пока быстрый указатель не дошел до конца списка.
    while (fast && fast.next) {
        // Медленный указатель делает один шаг.
        slow = slow.next;
        // Быстрый указатель делает два шага.
        fast = fast.next.next;

        // Если медленный и быстрый пересеклись, то
        // зацикленность существует.
        if (slow === fast) {
            return true;
        }
    }

    return false;
}
