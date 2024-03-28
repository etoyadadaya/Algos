// https://leetcode.com/problems/intersection-of-two-linked-lists/

// en: Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
// If the two linked lists have no intersection at all, return null.
// ru: Даны односвязные списки "headA" и "headB", необходимо вернуть вершину, где они пересекаются.
// Если пересечений нет, то вернуть null.

// Входные данные:
let headA = [4, 1, 8, 4, 5];
let headB = [5, 6, 1, 8, 4, 5];

// Узел односвязного списка.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function getIntersectionNode(headA, headB) {
    // Устанавливаем указатели в начало списков.
    let firstPointer = headA;
    let secondPointer = headB;

    // Если списки одинаковой длины и не имеет пересечений, то получим null
    while (firstPointer !== secondPointer) {
        // Если не конец первого списка,
        if (firstPointer) {
            // То идем к следующей вершине.
            firstPointer = firstPointer.next;
        } else {
            // Иначе дойдем до начала второго списка.
            firstPointer = headB;
        }

        // Аналогично записи сверху.
        if (secondPointer) {
            secondPointer = secondPointer.next;
        } else {
            secondPointer = headA;
        }
    }

    return firstPointer;
}
