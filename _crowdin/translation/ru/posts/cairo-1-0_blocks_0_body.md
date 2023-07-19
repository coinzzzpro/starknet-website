### TL;DR

* Cairo 1.0 —[крупный выпуск после выпуска Cairo](https://medium.com/starkware/hello-cairo-3cb43b13b209)два года назад.
* Cairo 1.0 предоставит разработчикам более безопасный, простой и удобный язык программирования.
* В основе Cairo 1.0 будет**Sierra**, промежуточный уровень представления, который обещает большую долгосрочную стабильность для программ Cairo.
* Sierra продвигает Cairo для работы в сети без разрешений:\
  Защита сети</strong>**обеспечивает более надежную защиту от DoS-атак\
  Защита пользователя**: обеспечивает устойчивость к цензуре**EthereumCairo 1.0 повлияет на StarkNet разными способами. Это также повлияет на[Регенезис](https://medium.com/starkware/regenesis-starknets-no-sweat-state-reset-e296b12b80ae). Мы опубликуем дополнительную информацию о Regenesis в ближайшие недели.</li> </ul>

### Введение

В 2020 году мы выпустили Cairo, полный по Тьюрингу язык программирования, и сделали большой шаг к поддержке проверяемых вычислений с использованием STARK. Сегодня мы анонсируем**Cairo 1.0**, самое большое улучшение Cairo на сегодняшний день. Он представит улучшенный язык с функциями, которые повысят удобство использования, безопасность и удобство. Он разработан для поддержки требований StarkNet как сети без разрешений, что позволяет протоколу стать проще и безопаснее.\
Разработка уже идет, и мы ожидаем скорого выхода первого релиза.

В этом посте мы опишем путешествие Каира до сих пор и поделимся подробностями о предстоящих функциях.

### Каирское путешествие

До 2020 года для создания STARK-доказуемых программ для общих вычислений требовались специальные знания. Это было возможно только для тех, кто понимал сложную математику, стоящую за STARK. В частности, для каждой бизнес-логики, т. е. для каждого вычисления, необходимо было сгенерировать алгебраическое промежуточное представление (AIR) — набор полиномиальных ограничений, который представляет конкретное вычисление.

Cairo родился из осознания того, что проверяемые вычисления должны быть доступны разработчикам повсюду. Cairo позволяет разработчикам использовать возможности STARK.

С тех пор сообщество разработчиков с энтузиазмом ухватилось за Cairo. Сегодня все в процветающей экосистеме StarkNet основано на Каире. Между[StarkNet](https://starkware.co/starknet/)и[StarkEx](https://starkware.co/starkex/)приложения на базе Cairo обработали более 220 миллионов транзакций, создали более 65 миллионов NFT и обработали сделки на сумму 700 миллиардов долларов, все расчеты проводились на Ethereum.

Хотя Каир сделал STARK доступным, он изначально был разработан как язык ассемблера и поэтому был написан как язык низкого уровня.

![Пример ранних программ, написанных в Каире.](/assets/cairocode_01.png "Пример ранних программ, написанных в Каире.")

Благодаря отзывам разработчиков и развитию[StarkNet](https://starkware.co/starknet/), мы постепенно сделали Cairo более выразительным и удобным для разработчиков.

![Пример из контракта ERC-20 Cairo, демонстрирующий поддержку переменных, операторов if, ошибок и библиотеки UINT256.](/assets/cairocode_02.png "Пример из контракта ERC-20 Cairo, демонстрирующий поддержку переменных, операторов if, ошибок и библиотеки UINT256.")

Но вскоре мы пришли к выводу, что пора сделать большой шаг вперед и вместо постепенных улучшений Каира пойти на более смелую трансформацию.

### Каир 1.0

Для Cairo 1.0 мы создали совершенно новый компилятор с нуля, который предоставит разработчикам функции безопасности и позволит им писать контракты более простым и выразительным способом.

#### Представляем Sierra: гарантия того, что каждый запуск Cairo может быть проверен

Основным дополнением в Cairo 1.0 является Sierra (**S**afe**I**nt**e**rmediate**R**ep**r**esent**a**tion). Sierra представляет собой новый промежуточный уровень представления между Cairo 1.0 и байт-кодом Cairo. Цель Sierra — гарантировать, что каждый запуск Cairo — т. е. программа Cairo и ее ввод — могут быть проверены (подробнее см. ниже).

Sierra обещает разработчикам Cairo лучший код, ориентированный на будущее. Дальнейшая стабильность обеспечивается тем, что контракты StarkNet не нуждаются в перекомпиляции в случае усовершенствований базовой системы (например, изменения архитектуры ЦП AIR, усовершенствования окончательного перевода байт-кода из Sierra в Cairo).

**Доказательство каждого запуска Каира.**В старом Каире запуск в Каире может привести к трем случаям: ИСТИНА, ЛОЖЬ или неудача. Неудачные запуски не могут быть доказаны. Sierra, гарантирует, что запуск Cairo никогда не завершится ошибкой и может привести только к TRUE или FALSE. Это, в свою очередь, гарантирует, что каждый запуск Cairo может быть доказан.

Это введение Sierra имеет важные последствия для StarkNet как сети без разрешений. Sierra гарантирует, что даже отмененные транзакции могут быть включены в блоки StarkNet. Это свойство позволит протоколу StarkNet оставаться компактным и простым без необходимости добавления сложных криптоэкономических механизмов.\
Два значимых примера:

1. Секвенсоры смогут взимать комиссию за отмененные транзакции, что позволит StarkNet предотвращать DoS-атаки секвенсора общепринятым способом.
2. Реализация принудительных транзакций L1 станет возможной, что позволит StarkNet унаследовать полную устойчивость к цензуре Ethereum.

### **Особенности языка**

Cairo 1.0 предложит множество улучшений самого языка программирования. Не все перечисленное ниже будет частью первого релиза, но это часть дорожной карты.

#### **Улучшенный синтаксис**

* Не более*локальный*и*tempvar*. Теперь нам нужно только*пусть*, чтобы управлять всеми переменными.
* Улучшен синтаксис операторов*, если*.

```python
# Старый
if cond != 0 {
  tempvar x = x+1;
} else {
  tempvar x = x;
}
__________________________________
#Новый
if cond { x = x + 1; }
```

#### **Гарантии безопасности типа**

Компилятор будет использовать строгую типизацию для повышения безопасности кода. Например:

* Указатели всегда будут указывать на инициализированную память.
* Словари всегда будут сжаты, вместо того, чтобы оставлять ответственность за вызов squash_dict программисту.

#### **Проще использовать языковые конструкции**

Например:

* Для петель

```
пусть sum = 0
для x в iter {
  sum = sum + x;
}
```

* Логические выражения
* Целые числа (с обычным целочисленным делением 👯)
* Защита от переполнения для соответствующих типов
* Логические условия

```
# Старый
If cond1:
  if cond2:
       # Какой-то код
  else if cond3:
       # Тот же код
__________________________________
# Новый
If cond1 && (cond2 || cond3) { … }
```

#### **Полноценная система типов**

* Абстрактные типы данных (т.е. Ржавоподобное перечисление)

```
enum Option<T> {
 Some: T,
 None,
}
результат совпадения {
 Some(r) => {..},
 None => {..},
}
```

* Черты

```
черта Add<Uint256> {
    fn add(…) { … }
}

пусть a: Uint256 = 1;
буква b: Uint256 = 4;
а + б; // Оценивается как 5 типа Uint256.
```

#### **Более интуитивно понятные библиотеки**

(например, словарь, массивы)

* Дикт<Uint256, MyStruct>;
* Множество<MyOtherStruct>;

#### **Более оптимизированный код**

Нет необходимости явно указывать выделение локальных переменных — автоматически определяется и выполняется автоматически.

#### **Улучшенная интеграция с компилятором**

Включение лучшей поддержки IDE, управления пакетами и облегчения вклада сообщества.

### **Заключение**

Спустя два года после того, как Cairo был впервые использован в производственной среде, мы разрабатываем Cairo 1.0, который обеспечит улучшенную выразительность, безопасность и синтаксис. Это сделает большой шаг вперед, позволяя разработчикам легче писать свои контракты StarkNet.

В другом посте, который скоро появится, мы поделимся более подробной информацией о том, как Cairo 1.0 повлияет на возрождение StarkNet и как разработчикам следует подготовиться к его выпуску.