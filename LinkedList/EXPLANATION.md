# Задача из "19. Remove Nth Node From End of List"

### Успехом к решению подобного рода задач будет:

1. Понимание базовых концепций "Связного списка".
2. Знание паттерна "Dummy Node".
3. Правильный алгоритм действий.

#### В первом варианте задачи, мы прибегнули к паттерну "Dummy Node":

**Для начала нам было необходимо:**

1. Инициализировать "Dummy Node".
2. Найти длину списка с включенной в него "Dummy Node".
3. Перебрать вершины до необходимого значения "N". (n-1)-ой вершины с конца.
4. Удалить вершину.
5. Вернуть список без добавленной dummyNode.

#### Во втором варианте задачи, мы использовали два указателя (не паттерн):

**Для начала нам было необходимо:**

1. Инициализировать "Dummy Node".
2. Инициализировать fast - быстрый указатель.
3. Установить fast в значение (n+1) вершины.
4. Инициализировать slow - быстрый указатель.
5. Дойти указателем fast до конца списка, а указателем slow - до "N" вершины.
6. Удалить вершину.
7. Вернуть список без добавленной dummyNode.