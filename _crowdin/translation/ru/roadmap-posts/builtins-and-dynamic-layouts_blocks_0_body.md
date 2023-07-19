Мы рады объявить, что в версии 0.12.1 в Starknet будет включена встроенная функция Keccak.

Стек Cairo и протокол Starknet используют встроенные функции. Эти встроенные функции упрощают процесс вычислений, уменьшая количество необходимых ячеек трассировки, что приводит к более эффективным доказательствам. Однако текущий подход к использованию статического списка макетов для различных встроенных функций имеет ограничения.

Чтобы решить эту проблему, команда разработчиков планирует внедрить динамические макеты с использованием Keccak, которые адаптируют макет к каждой задаче проверки, оптимизируя распределение ячеек трассировки. Такой динамичный подход повысит эффективность, упростит интеграцию новых встроенных функций и сократит ненужные затраты для пользователей, сделав процесс проверки более рациональным и эффективным.

Вы можете узнать больше о встроенных функциях и динамических макетах [здесь](https://starkware.medium.com/builtins-and-dynamic-layouts-e419a73e29e).