## Введение

Starknet — это накопительный уровень достоверности 2. Он обеспечивает высокую пропускную способность, низкие затраты на газ и сохраняет уровни безопасности Ethereum Layer 1.

Учитывая головоломку судоку, проверить решение проще, чем решать с нуля. Если наша цель состоит в том, чтобы убедить людей в утверждении «эта головоломка решена», мы можем сэкономить много вычислений, если один человек вычислит решение, а затем распространит его для проверки другими. В этой стратегии каждое вычисление решения становится разовым событием, не требующим тиражирования обществом. В том же ключе Starknet масштабирует Ethereum, заменяя тяжелые вычисления L1 более легкими (следовательно, более дешевыми!) Проверка L1 с использованием доказательств STARK, вычисленных вне сети.

## Как это работает

Имея в виду приведенную выше аналогию, настало время для некоторого жаргона. Starknet — это не требующий разрешений Validity-Rollup (также известный как «ZK-Rollup»), который поддерживает общие вычисления и в настоящее время работает как сеть L2 через Ethereum. Возможная безопасность L1 Starknet обеспечивается за счет использования самой безопасной и масштабируемой системы криптографической защиты — [STARK](https://starkware.co/stark/).

Контракты Starknet (по большей части) написаны на языке Cairo — полном языке программирования Тьюринга, разработанном для доказательств STARK.