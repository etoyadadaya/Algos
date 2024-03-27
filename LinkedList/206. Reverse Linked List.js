// https://leetcode.com/problems/reverse-linked-list/

// en: Given the head of a singly linked list, reverse the list, and return the reversed list.
// ru: Дан "head" односвязного списка, необходимо развернуть список и вернуть уже развернутый список.

// Входные данные:
let head = [1, 2, 3, 4, 5];

// Ожидаемый результат:
// [5, 4, 3, 2, 1]

// Узел односвязного списка.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


// Модифицируем исходный список.
// time: O(n).
// mem: O(1).
function reverseList (head) {
    let prev = null;
    let current = head; // [1, 2, 3, 4, 5]

    // На каждом шагу двигаем current по списку на 1 вершину вперед, а
    // prev - поддерживает массив в котором будет ответ.

    // Если изначально массив выглядит таком образом:
    // 1 -> 2 -> 3 -> 4 -> 5 -> null

    // То через несколько шагов он будет таким:
    // null <- 1 <- 2   3 -> 4 -> 5 -> null
    //           prev   curr

    // Таком образом, prev будет содержать конечный результат.

    // Идем от начала до конца списка
    while (current !== null) {
        // Запоминаем текущую вершину.
        let tmp = current;

        // // Сдвигаем текущую вершину.
        current = current.next;

        // Меняем ссылку со следующей вершины на предыдущую, тем самым разрушаю старую связь.
        tmp.next = prev;

        // Сдвигаем предыдущую вершину на место текущей вершины до того, как ее передвинули на одну вершину вперед.
        prev = tmp;
    }

    // возвращаем развернутый список
    return prev;
}
