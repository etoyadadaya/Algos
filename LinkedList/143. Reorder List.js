// https://leetcode.com/problems/reorder-list/

// en: You are given the head of a singly linked-list. Reorder the list to be on the following form.
// ru: Дан "head" односвязного списка. Необходимо изменить порядок вершин в заданной форме.

// Входные данные:
let head = [1, 2, 3, 4];

// Ожидаемый результат:
// [1, 4, 2, 3]

// Узел односвязного списка.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Вспомогательная функция для нахождения середины списка с меньшей серединой.
function preMiddleNode(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next && fast.next.next) {
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
function reorderList (head) {
    // Записываем меньшую среднюю вершину.
    let tmp = preMiddleNode(head);
    // Разворачиваем список со следующей от средней вершины.
    let secondPointer = reverseList(tmp.next);

    // Стираем связь между первой и второй половиной списка.
    tmp.next = null;

    // Устанавливаем первый указатель в начало списка.
    let firstPointer = head;
    // Инициализируем новый "head" началом списка.
    let newHead = head;

    // Пока второй указатель не дошел до конца
    while (secondPointer) {
        // Записываем в переменную следующую вершину первого указателя.
        let firstPointerNext = firstPointer.next;
        // Меняем ссылку на следующую вершину.
        firstPointer.next = secondPointer;
        // Меняем вершину для первого указателя.
        firstPointer = secondPointer;
        // Устанавливаем вершину для второго указателя.
        secondPointer = firstPointerNext;

        // Если изначально это имело вид: 1 -> 2 -> 3 -> 4, то
        // Теперь это будет выглядеть так: 1 -> 4 -> 2 -> 3
    }

    // Возвращаемы новый список.
    return newHead;
}
