## TL;DR

* Каир продолжает развиваться. Для удобства сообщества мы создали общедоступную доску с описанием будущих интересных функций.
* Вскоре вместе со Starknet alpha v0.12.0 будет запущен новый синтаксис контракта, требующий минимальных изменений кода и значительно расширяющий язык смарт-контрактов.
* С Cairo 1.1.0 в Starknet Mainnet и v2, который скоро появится в Starknet, мы достигли важной вехи в зрелости языка. Между документами [](https://cairo-lang.org/docs/v1.0/), книгой [](https://cairo-book.github.io/title-page.html)и дискордом Starknet [](https://discord.gg/qypnmzkhbc)у вас должно быть достаточно ресурсов, чтобы начать работу и мигрировать из Каира 0.



## Введение

Cairo v1 претерпел значительные изменения с момента своего раннего альфа-тестирования, достигнув паритета функций с Cairo 0 и добавив новые функции (теперь доступны базовые циклы, и многие другие возможности находятся в стадии разработки). Наша цель в этом посте — пролить больше света на краткосрочную дорожную карту Каира: над чем сейчас работают и что разработчики могут ожидать в ближайшие недели и месяцы. В будущем вы сможете быть в курсе последних разработок или планов по языку, отслеживая доску [cairo-roadmap](https://github.com/orgs/starkware-libs/projects/1/views/1) на Github.



## Почему Каир?

Наряду с основными достижениями в языке высокого уровня мы считаем важным подчеркнуть фундаментальное преимущество Cairo и то, почему мы считаем его основой будущего масштабирования блокчейна. 

С самого начала Cairo разрабатывался с единственной целью — стать наиболее эффективным языком для написания доказуемых программ. Архитектура виртуальной машины Cairo, как описано [в исходной статье](https://eprint.iacr.org/2021/1063.pdf), была разработана для эффективного создания доказательств STARK для выполнения программ Cairo, что делает ее идеальной основой для сверток достоверности. Cairo v2, новый rust-подобный язык, который у нас есть сегодня, построен на этих основах, но предназначен для обслуживания широкого сообщества разработчиков с точки зрения эргономики, безопасности и простоты изучения и написания. Эволюция, которую Cairo претерпела за последние два года, превратила его из нишевого языка низкого уровня в язык высокого уровня, удобный для разработчиков, который дает преимущество, когда речь идет о доказательствах и эффективности масштабирования.

## Просто скажи Каир

Больше не говорите «Cairo 1 — версия компилятора vX.YZ». Отныне просто говорите Каир. Яй! 

С новым компилятором Cairo мы следуем стандарту [семантического управления версиями](https://semver.org/) ; то есть версии компилятора состоят из трех цифр, и изменение старшей цифры означает критические изменения. В следующей версии Cairo у нас есть критические изменения в синтаксисе смарт-контракта (описанные далее в посте), поэтому правильно будет поднять версию до Cairo v2. Чтобы избежать громоздких обозначений, мы перестанем говорить Cairo 1 и с этого момента будем идентифицировать версию языка с (единственной) версией компилятора. Исходный язык, который в будущем можно будет использовать в различных контекстах за пределами Starknet, будет называться «Cairo 0».

![](/assets/screenshot-2023-06-29-at-17.04.49.png)

## Что ждет Каир?

В следующих разделах мы рассмотрим предстоящие основные изменения в языке и объясним, как они повлияют на работу разработчиков в Cairo.

### Предстоящие функции

Хотя паритет функций с Cairo 0 был важной вехой, это определенно не конечный пункт назначения. Язык высокого уровня всегда можно улучшить, и многие другие функции находятся в разработке. Вы можете ознакомиться с дорожной картой [](https://github.com/orgs/starkware-libs/projects/1/views/1) , чтобы увидеть функции, над которыми ведется работа, и отследить невыполненные работы. Несколько примечательных упоминаний:

* **Компоненты**: следующий этап в новом синтаксисе контракта, позволяющий контрактам импортировать компоненты, определенные во внешних библиотеках.
* **Keccak и Secp-k1**: Уже включенные в Cairo v2, они позволят проверять подписи Ethereum в будущей версии Starknet.
* **Поддержка целых чисел со знаком**
* **Кривая операций Secp-r1**: это позволит использовать собственное оборудование для подписи транзакций, что приведет к гораздо более простому UX для взаимодействия со Starknet.
* **Strings**: Родной тип для (длинных) строк, допускающий стандартные манипуляции со строками. Это базовая функция, которая также пользуется большим спросом у NFT и игровых проектов.
* **Iterators**: это позволит нам обогатить синтаксис цикла и намного удобнее перебирать массивы/промежутки.



### Cairo v2 — новый синтаксис контракта

Текущий синтаксис смарт-контракта Starknet в основном наследуется от предыдущего дизайна Cairo 0. Этот дизайн страдает от нескольких проблем, которые мы хотели бы решить. Наша цель при переходе на новый синтаксис — повысить безопасность, сделав поведение контракта более явным. Внеся дополнительную структуру во внешние функции, хранилище и события контракта, мы можем значительно снизить вероятность ошибок. Это поможет защитить протоколы от возможных взломов и потери средств. Кроме того, новый синтаксис позволяет нам ввести *расширяемость*, функцию, очень востребованную сообществом, которая позволяет разработчикам легко использовать компоненты, написанные во внешних библиотеках.

Новый синтаксис требует критических изменений. Хотя на данном этапе мы предпочитаем максимально избегать нарушения изменений, после внутренних обсуждений и обсуждений в сообществе мы пришли к выводу, что это правильный путь, который принесет дивиденды в будущем.

Эти изменения подробно обсуждаются в технической публикации [, которая была опубликована на форуме сообщества (обратитесь к](https://community.starknet.io/t/cairo-1-contract-syntax-is-evolving/94794/20) для полного обзора предстоящих изменений). Здесь мы хотели бы только подчеркнуть, что **только «внешний слой» вашего контракта (определение внешних функций и событий) нуждается в изменении**. Ваш существующий код Cairo v1 требует лишь незначительных корректировок (см. документацию для [руководства по миграции](https://docs.starknet.io/documentation/architecture_and_concepts/Cairo_on_Starknet/contract-syntax/)). Преимущество нового синтаксиса, с другой стороны, весьма существенное: использование компонентов из внешних библиотек (важная функция при работе над большими проектами) станет обыденным и больше не потребует специальных обходных путей.

### Гарантия обратной совместимости

Некоторые из предстоящих изменений, описанных в посте (в частности, новый синтаксис контракта), будут означать критические изменения в языке. Несмотря на то, что после Cairo v2 основная часть критических изменений уже позади, переход на обратную совместимость с этого момента все еще является преждевременным. Тем не менее, проекты, разрабатывающие смарт-контракты поверх Starknet, требуют стабильности и тщательного аудита, и это представляет для нас важное соображение. Чтобы решить эти проблемы, мы предоставляем следующие гарантии стабильности:

1. Любой класс, объявленный в Starknet, будет продолжать работать, как и раньше, и на него не повлияют изменения языка.
2. Любой контракт, развернутый в Starknet, продолжит работать, как и раньше, и на него не повлияют изменения языка.
3. Для каждого критического обновления языка контракты, написанные в предыдущей версии, будут по-прежнему подлежать объявлению в Starknet в течение как минимум шести месяцев.

Например, если вы разрабатываете свой проект (или близки к развертыванию/на этапе аудита) с Cairo версии X, а Cairo Y выпущен с критическими изменениями, **контрактов, написанных с версией X, по-прежнему будут приниматься в Starknet в течение как минимум шесть месяцев**. То есть у вас есть период не менее шести месяцев, чтобы ваши контракты были развернуты в Starknet, после чего они навсегда защищены пунктами 1 & 2.

## Когда мне следует мигрировать?

С выпуском нового синтаксиса контракта (и доступного в Starknet в грядущей версии 0.12.0) и основной частью критических изменений позади, Cairo теперь стабилен и достаточно богат, чтобы поддерживать сложные приложения и портировать существующую логику Cairo 0. Кроме того, гарантии обратной совместимости в Starknet гарантируют, что даже в случае критических изменений в языке у вас будет достаточно времени (не менее шести месяцев) для завершения разработки или проверки и развертывания ваших контрактов.

## Краткое содержание

Cairo продолжает развиваться и достиг точки, когда он значительно обходит исходный язык. Если вы еще этого не сделали, сейчас самое время принять участие. Мы приветствуем активное участие сообщества разработчиков в обсуждениях, либо непосредственно в репозитории компилятора [](https://github.com/starkware-libs/cairo) , поднимая вопросы, либо размещая сообщения на канале [cairo discord](https://discord.gg/qypnmzkhbc) или на форуме сообщества Starknet [](https://community.starknet.io/latest). Будем надеяться, что этот пост (наряду с более техническим [аналогом](https://docs.google.com/document/d/1qemNmIWYuYyVg0f9J_SO6SqGQVDPOBVt10wXH0rrT_U/edit#)) помог пролить свет на ожидаемые изменения и рассеять большую часть сомнений относительно будущего Каира.