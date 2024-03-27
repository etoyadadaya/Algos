// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// en: Given the head of a linked list, remove the nth node from the end of the list and return its head.
// ru: Дан "head" связного списка, необходимо удалить N-ый узел с конца списка и вернуть новый "head".

// Входные данные:
let head = [1, 2, 3, 4, 5];
let n = 2;

// Ожидаемый результат:
// [1, 2, 3, 5]

// Узел односвязного списка.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Паттерн "Dummy Node".
// time: O(n), где n - число узлов.
// mem: 0(1).
function removeNthFromEnd(head, n) {
    // Инициализируем dummyNode.
    let dummyNode = new ListNode(0, head);

    // Находим длину списка с учетом dummyNode.
    let length = 0;
    let current = dummyNode;

    while (current !== null) {
        current = current.next;
        length += 1;
    }

    // Доходим до (n-1)-ой вершины с конца.
    current = dummyNode;
    for (let i = 0; i < length - n - 1; i++) {
        current = current.next;
    }

    // Удаляем "Ноду".
    current.next = current.next.next;

    // Возвращаем список без добавленной dummyNode.
    return dummyNode.next;
}


// С помощью быстрого и медленного указателя (не паттерн).
// time: O(n), где n - длина списка.
// mem: 0(1).
function removeNthFromEnd(head, n) {
    // Инициализируем dummyNode.
    let dummyNode = new ListNode(0, head);

    // Инициализируем быстрый указатель.
    let fast = dummyNode;

    // Устанавливаем указаталь на N-ый узел.
    for (let i = 0; i < n + 1; i++) {
        fast = fast.next;
    }

    // Инициализируем медленный указатель.
    let slow = dummyNode;

    // Идем по "Нодам" пока быстрый указатель не упрется в конец списка, а
    // медленный указатель не встанет на место N-го узла.
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    // Удаляем вершину.
    slow.next = slow.next.next;

    // Возвращаем список без добавленной dummyNode.
    return dummyNode.next;
}
