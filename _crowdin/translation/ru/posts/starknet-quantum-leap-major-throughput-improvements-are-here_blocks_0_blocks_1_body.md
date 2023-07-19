## TL;DR

* Starknet alpha V0.12.0 развернут в тестовой сети
* Starknet добился значительного 10-кратного увеличения пропускной способности, внедрив Sequencer в Rust. Этому способствовало тесное сотрудничество между StarkWare и LambdaClass.
* Будет обеспечено более плавное взаимодействие с пользователем, так как статус \`PENDING\` для транзакций был удален.
* Введен новый системный вызов, позволяющий легко извлекать хэши прошлых блоков.
* Starknet alpha V0.12.0 будет поддерживать новый синтаксис Cairo, ориентированный на безопасность
* Обновление сети до этой версии пройдет голосование сообщества, что обеспечит широкое участие и вклад

## Введение

Мы рады объявить о выпуске Starknet Alpha V0.12.0. Эта версия является важной вехой, которая ознаменует собой начало большого скачка вперед в обеспечении повышенной производительности и масштабируемости. Эта версия — еще один шаг Starknet на пути к масштабированию Ethereum с акцентом на пропускную способность и задержку. Чтобы решить эти проблемы, мы выбрали Sequencer от Starknet, так как большая часть ограничения пропускной способности определяется его производительностью.\
Разработка Starknet Alpha V0.12.0 во многом является результатом продуктивного и приятного годичного сотрудничества между [LambdaClass](https://lambdaclass.com/) и StarkWare. Мы гордимся тем, что строим Starknet вместе с командой LambdaClass.

Эта версия, будучи основной, будет вынесена на голосование сообщества. Мы приглашаем сообщество принять участие в формировании будущего Starknet.

## Производительность - пропускная способность здесь!

Эта версия ориентирована на производительность и, в частности, на улучшенную пропускную способность, что привело к значительному 10-кратному увеличению. Пропускная способность выросла в среднем с 30 000 каирских шагов в секунду (CSPS) в версии 0.11.0 до впечатляющих 220 000 CSPS в этой последней версии. Это замечательное достижение является результатом целенаправленной оптимизации, которая лежит в основе эффективности Starknet Sequencer, как ранее сообщалось в нашей дорожной карте [производительности](https://www.starknet.io/en/posts/engineering/starknet-performance-roadmap). Этому улучшению производительности Starknet способствовали три ключевых компонента: Cairo-rs, Blockifier и Papyrus, и все они выигрывают от мощности Rust.

Первым улучшением Sequencer является интеграция **[Cairo-rs](https://github.com/lambdaclass/cairo-vm)**, высокоэффективного средства запуска Cairo, написанного на Rust и разработанного **LambdaClass**. Используя возможности Rust, Cairo-rs улучшила выполнение контрактов Cairo, что привело к более удобной работе для пользователей.

Кроме того, введение **[Blockifier](https://github.com/starkware-libs/blockifier)**, логики выполнения блоков на основе Rust, сыграло решающую роль в повышении пропускной способности. Благодаря оптимизации времени выполнения транзакций эта реализация эффективно сократила время ожидания и уменьшила перегрузку сети. Включение **[Papyrus](https://github.com/starkware-libs/papyrus)**, решения для локального хранения, способствовало эффективному управлению локальным состоянием Sequencer. Это усовершенствование еще больше оптимизировало общую производительность и скорость отклика системы.

### Это всего лишь первый шаг

Оптимизация секвенсора в этой версии — это далеко не конец пути к повышению производительности.

#### Каир_родной

Starknet интегрирует компилятор LambdaClass [cairo_native](https://github.com/lambdaclass/cairo_sierra2mlir), что позволит более эффективно выполнять контракты Cairo. Позволяя контрактам работать в «родном коде», таком как Rust, а не в среде Cairo, мы ожидаем еще большей эффективности и прироста производительности для Starknet.

#### Распараллеливание

Предыдущий Pythonic Sequencer от Starknet представил [распараллеливание транзакций](https://www.starknet.io/en/posts/engineering/starknet-performance-roadmap), что значительно улучшило его производительность. Однако важно отметить, что первоначальная реализация Sequencer в Rust, включенная в выпуск V0.12.0, еще не включает распараллеливание. Текущие усилия по разработке сосредоточены на распараллеливании выполнения транзакций внутри блока в духе [block-STM](https://malkhi.com/posts/2022/04/block-stm/). Основываясь на успешных демонстрациях в реализации Pythonic, эта оптимизация еще больше повысит пропускную способность Starknet, что позволит ему эффективно обрабатывать возросшие объемы транзакций.

## Нет больше ожидающих транзакций

В предыдущих версиях статус «PENDING» обозначал действительные блоки, которые были выполнены секвенсором, но еще не были заполнены, что указывает на возможность добавления дополнительных транзакций. Однако в этом последнем выпуске статус \`PENDING\` был заменен на ACCEPTED_ON_L2, отражающий статус завершения транзакций. Это изменение упрощает процесс подтверждения транзакций и обеспечивает пользователям более плавную работу. 

## get_block_hash Системный вызов

Еще одним дополнением в Starknet Alpha V0.12.0 является введение системного вызова get_block_hash. Этот новый системный вызов позволяет разработчикам получать хэш определенного блока Starknet в диапазоне \`\[first_v0_12_0_block, current_block-10]\`. Подпись этого [системного вызова](https://docs.starknet.io/documentation/architecture_and_concepts/Contracts/system-calls-cairo1/) : fn get_block_hash(u64 block_number) -> feel252\`.

Сообщение об ошибке, связанное с этим сценарием: «Заблокировать номер вне допустимого диапазона».

Чтобы реализовать это изменение, операционная система будет записывать в начале каждого блока сопоставление под адресом = 0x1 с текущим_блоком - 10 в качестве ключа и соответствующим хэшем в качестве значения.

С помощью системного вызова \`get_block_hash\` разработчики могут удобно получать хэши блоков, которые являются важными компонентами для создания и проверки [доказательств хранения](https://www.starknet.io/en/posts/developers/what-are-storage-proofs-and-how-can-they-improve-oracles). Эти доказательства обеспечивают эффективный доступ к данным между цепочками и повышают надежность данных блокчейна даже без необходимости полагаться на сторонние оракулы. Получив хэш блока с помощью этого системного вызова, разработчики могут точно ссылаться на состояние конкретного блока, транзакции или любую другую информацию, зафиксированную в заголовке блока [](https://docs.starknet.io/documentation/architecture_and_concepts/Blocks/header/#block_header)

## Каир — улучшенный синтаксис контракта

В этой версии мы вносим значительные улучшения в синтаксис смарт-контракта. Новый синтаксис ориентирован на безопасность и закладывает основу для расширяемости. Безопасность в этом контексте означает более подробное описание внешних компонентов контракта (интерфейс/хранилище/события), что дает разработчикам лучшее представление о том, чего ожидать при взаимодействии с контрактом. Расширяемость, которая будет доработана в более поздней версии, позволяет контрактам использовать компоненты из внешних библиотек. Это ключевая особенность любого языка смарт-контрактов, которая решит серьезную проблему в сообществе разработчиков Starknet. Исчерпывающее описание мотивации и изменений см. в сообщении блога [Cairo Roadmap](https://www.starknet.io/en/posts/ecosystem/cairo-roadmap-join-the-ride) и [сообщении на форуме сообщества](https://community.starknet.io/t/cairo-1-contract-syntax-is-evolving/94794).

В то время как [новая версия компилятора](https://github.com/starkware-libs/cairo/releases/tag/v2.0.0-rc0) включает критические изменения, **вы можете продолжать использовать старую версию компилятора (v1.1.0) и размещать полученные контракты в Starknet в течение следующих шести месяцев**. Это отражает наш новый протокол обновления компилятора для критических изменений: после новых версий компилятора контракты, скомпилированные старой версией компилятора, будут по-прежнему приниматься в течение как минимум шести месяцев, чтобы сообщество могло приспособиться. Конечно, как только контракт Cairo (не Cairo 0) будет объявлен в Starknet, он останется доступным для развертывания и взаимодействия на неопределенный срок.

## Что дальше?

### Краткосрочные цели: версия 0.12.1

В краткосрочной перспективе Starknet сосредоточится на улучшении пользовательского опыта и надежности транзакций. В следующей версии, 0.12.1, появится еще одно существенное улучшение: включение в блок неудачных транзакций. До сих пор неудачные транзакции не включались в блок, поэтому Sequencer не мог взимать плату и продвигать для них одноразовый номер. Это создало проблемы с UX для разработчиков. Они не могли полагаться на продвижение одноразового номера, что вынуждало их постоянно отслеживать статус транзакции перед отправкой новой. Это изменение также защищает Sequencer от пользователей, которые забрасывают систему неудачными транзакциями, не платя за них. Это обновление направлено на то, чтобы предоставить пользователям более плавный и беспроблемный опыт взаимодействия со Starknet.

### Долгосрочное видение: пропускная способность, задержка и затраты

[Забегая вперед](https://www.starknet.io/en/roadmap), всеобъемлющее видение Starknet заключается в достижении существенной масштабируемости как по масштабу, так и по стоимости. Следующим приоритетом на повестке дня является резкое снижение операционных издержек.

Снижая затраты, Starknet стремится сделать транзакции более доступными и инклюзивными, тем самым обеспечивая более широкий спектр вариантов использования и расширяя возможности разработчиков и пользователей. Стремление к снижению затрат соответствует миссии Starknet по предоставлению масштабируемой, гибкой и экономичной инфраструктуры для децентрализованных приложений.

## Старкнет Альфа V0.12.0 Голосовать

[Управление Starknet Этап 1](https://medium.com/starknet-foundation/starknets-governance-first-phase-4614c7566f40) посвящен основным обновлениям протокола Starknet.\
Каждое крупное обновление версии Starknet сначала развертывается в Testnet, что дает сообществу Starknet несколько дней на изучение и тестирование обновленной версии. В течение этого периода проверки открывается предложение Snapshot, позволяющее сообществу голосовать за утверждение обновленной версии для развертывания в основной сети.

Если предложение получает большинство голосов «ДА» в течение периода голосования, оно принимается, и основная сеть Starknet будет соответствующим образом обновлена.

Голосование Starknet Alpha V0.12.0 не за горами!\
Приглашаем всех подписаться на службу уведомлений в пространстве Starknet [Snapshot.](https://snapshot.org/#/starknet.eth/proposal/0x00889bc468509610e516e8602f00b21ca8c32466dd4f0140eca38becb7f40bef) Просмотрите [Тему профиля делегата](https://community.starknet.io/t/delegate-profile-thread/4049) & [Открытие делегирования](https://delegate.starknet.io/), чтобы стать делегатом или выбрать его, и обсудите [предложение Starknet alpha v0.12.0](https://community.starknet.io/t/proposal-starknet-alpha-v0-12-0/95997) на форуме сообщества.

## Краткое содержание

Starknet Alpha V0.12.0 фокусируется на повышении производительности и удобства работы пользователей. В новой версии представлена реализация Sequencer на основе Rust, повышающая пропускную способность в 10 раз и уменьшающая задержку транзакций. Другие функции включают новую версию компилятора, удаление статуса незавершенной транзакции и добавление системного вызова хеширования блоков. 

Разработчики Starknet имеют возможность создавать решения, которые имеют значение. Начните свой путь разработки Cairo [](https://twitter.com/Starknet/status/1674689343758168065?s=20), прочитайте [документы Cairo](https://www.cairo-lang.org/docs/), зарегистрируйтесь [в Cairo Basecamp](https://docs.google.com/forms/d/e/1FAIpQLSf2k9vjPpeymbUpJMRDuN3QqNcHtjWx8whX2wY4EbihF1EaPg/viewform)или пройдите [учебные пособия](https://www.starknet.io/en/tutorials). Хотите быть в курсе всех обновлений версии? Подпишитесь на нашу</a></p>