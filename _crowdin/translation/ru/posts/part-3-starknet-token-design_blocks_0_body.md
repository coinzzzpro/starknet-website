В этом посте мы углубимся в дизайн токена StarkNet, график его выпуска и ожидаемые сроки.

### Соображения

Дизайн токена StarkNet сформирован необходимостью питания сети, состоящей из (i)**Пользователей**StarkNet, (ii)**Операторов**— людей, обеспечивающих сеть вычислительными ресурсами, которые выполняют последовательность транзакций, генерацию Доказательства STARK и поставщики долгосрочных хранилищ, а также (iii)**Разработчики**, пишущие программное обеспечение для своей инфраструктуры и приложений, работающих на ней.

Механизмы структуры комиссий и чеканки токенов должны быть:

* В значительной степени автоматизирован, в отличие от основанного на значительном вмешательстве человека
* Известен и проверен в других блокчейн-системах
* Простота анализа и объяснения; прозрачный
* Устойчивость к спекулятивным манипуляциям и геймификации, не создающей ценности
* Считается, что у него хороший пользовательский опыт (UX)

Эти предпочтения будут определять механизм распределения токенов от новой чеканки и комиссий за транзакции, уплачиваемых Пользователями:

**Операторы**обеспечивают постоянную жизнедеятельность StarkNet и обеспечивают высокое качество работы протокола, которое требуется пользователям.

**Разработчики**создают и поддерживают программное обеспечение, используемое операторами для защиты сети, и создают приложения, расширяющие функциональные возможности сети для пользователей. Следовательно, часть сборов и нового чеканки будет поступать разработчикам смарт-контрактов и основным разработчикам, а именно:

* **Разработчики смарт-контрактов:**протокол StarkNet может автоматически измерять стоимость, предоставляемую смарт-контрактами, посредством комиссий L1 и L2, уплачиваемых пользователями этих контрактов. Протокол StarkNet автоматически распределяет часть комиссий и текущих новых чеканок разработчикам смарт-контрактов. Смарт-контракты, которые предлагают пользователям большую ценность, измеряемую платой за них, получат большую часть токенов, выделенных для этой цели.
* **основных разработчиков:**Протокол StarkNet не имеет автоматического способа количественной оценки вклада основных разработчиков, таких как те, кто пишет код для пруверов, секвенсоров, полных узлов и т. д. Следовательно, выделение токенов таким основным разработчикам и другим участникам, чей вклад не поддается измерению протоколом, обязательно требует некоторого человеческого усмотрения. Будет создана модель для применения этого в соответствии с целью децентрализации.
* Точный механизм распределения токенов от новой чеканки и сборов между обоими типами разработчиков еще предстоит определить. Принципы дизайна будут включать антигеймификацию и прозрачность.

### Первоначальное размещение токенов StarkNet

StarkWare выпустила десять миллиардов токенов вне сети. Для уточнения: эти токены StarkNet не представляют собой долю в StarkWare и не предоставляют никаких прав на участие в StarkWare или предоставляют какие-либо права требования от StarkWare. Циркуляционный запас токенов со временем будет увеличиваться по мере чеканки новых токенов протоколом в соответствии с графиком, который будет определен сообществом позднее.\
*Циркуляционная подача поэтому не может оставаться постоянной.*

Распределение таким образом:

**17%**— Инвесторы StarkWare

**32,9%**— Основные участники: StarkWare, ее сотрудники и консультанты, а также партнеры-разработчики программного обеспечения StarkNet.

**50,1%**предоставлено StarkWare Фонду на следующие цели:

* **9%**— Положения сообщества — для тех, кто выполнял работу для StarkNet и приводил в действие или разрабатывал базовую технологию, например, посредством прошлого использования систем StarkEx L2. Важно отметить, что все Положения сообщества будут основаны на поддающейся проверке работе, выполненной в прошлом. Например, если Положения сообщества будут предоставлены бывшим пользователям StarkEx, распределение будет определяться на основе поддающегося проверке использования технологии StarkEx, которое имело место до**июня 2022 года.**
* **9%**— Коммунальные скидки — скидки в токенах StarkNet до**частично**покрывают расходы на подключение к StarkNet из Ethereum. Чтобы предотвратить геймификацию, скидки сообщества будут применяться только к транзакциям, которые происходят**после**объявления механизма скидки.
* **12%**— Гранты на исследования и работу по разработке, тестированию, развертыванию и поддержке протокола StarkNet
* **10%**— стратегический резерв для финансирования экосистемной деятельности, связанной с миссией Фонда, как описано во[предыдущем посте](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)этой серии.
* **2%**— Пожертвования уважаемым учреждениям и организациям, таким как университеты, неправительственные организации и т. д., по решению держателей токенов StarkNet и Фонда.
* **8,1%**Нераспределено — нераспределенное казначейство Фонда предназначено для дальнейшей поддержки сообщества StarkNet в порядке, определяемом сообществом.

Чтобы согласовать долгосрочные стимулы основных участников и инвесторов с интересами сообщества StarkNet и в соответствии с общепринятой практикой в децентрализованных экосистемах, все токены, выделенные основным участникам и инвесторам, будут заблокированы на 4-летний период с линейный релиз и годовой обрыв.

![](/assets/1_qcosthgskfd-q6bn3yzghq-1.png)

### Есть ли способ получить токены StarkNet?

Короткий ответ — да, но коротких путей для получения токенов нет.

Распределение токенов StarkNet, рынок комиссий и новый дизайн чеканки отдают предпочтение разработчикам базовой инфраструктуры и dApps, а также другим сторонам, способствующим безопасности и работоспособности экосистемы. Что это означает практически по отношению к токену?

Если вы разработчик и уже написали программное обеспечение либо для инфраструктуры StarkNet, либо для смарт-контракта, которое действительно ценится и используется конечными пользователями StarkNet, то вы можете рассчитывать на автоматическое получение токенов через протокол. Одной из многих мер защиты от геймификации этого механизма является то, что сборы, получаемые разработчиками, будут строго меньше сборов, уплачиваемых пользователями.

Разработчики также могут получать токены за работу, проделанную для разработки, тестирования и поддержки протокола StarkNet. Любые такие гранты будут определены в установленном порядке Фондом в соответствии с его миссией.

Если вы являетесь разработчиком блокчейна и считаете, что StarkNet является ответом на потребности Ethereum в масштабировании, мы рекомендуем вам узнать больше о[StarkNet](https://starknet.io/)и его языке программирования[Cairo](https://www.cairo-lang.org/), а также приступить к разработке собственных смарт-контрактов.

Если вы являетесь конечным пользователем, используйте StarkNet — но только в том случае, если он соответствует вашим потребностям сегодня. Используйте его для тех транзакций и приложений, которые вы цените,*не ожидая какой-либо будущей награды в виде токенов StarkNet.*Когда будут объявлены Положения сообщества, они будут относиться только к моментальным снимкам, которые произошли до даты объявления, и будут фильтровать и исключать использование, которое рассматривается как злоупотребление и геймификация сети, на основе информации, доступной на этом этапе. момент времени. Когда вводятся скидки сообщества, они никогда не будут применяться к транзакциям, совершенным до объявления скидки, поэтому совершать сделки сегодня в ожидании будущей скидки бесполезно.

### Заключительные замечания

Построение открытой сети означает охват неизвестного. Интернет, Биткойн и Эфириум были изобретены новаторами, которые верили, что их инструменты могут изменить мир, но не знали, как именно. Мы скромно надеемся, что способность StarkNet масштабировать блокчейны будет полезна для Ethereum и децентрализованной сети. Мы не можем знать, что будет построено. Но мы верим, что StarkNet передает замечательные технологические возможности в руки творческого сообщества, и мы надеемся увидеть, что это сообщество использует их множеством способов, многие из которых пока невообразимы.