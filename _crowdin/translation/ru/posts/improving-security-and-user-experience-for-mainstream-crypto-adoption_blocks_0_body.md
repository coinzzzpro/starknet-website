Технологические инновации в блокчейне процветали в течение последних нескольких лет — STARK, SNARK, EIP-1559, слияние Ethereum — все это огромные технологические достижения. Однако дизайн UX и UI не поспевает за ними. Люди по-прежнему застревают на начальных фразах из 16 слов, и доступ к DeFi без централизованного посредника по-прежнему слишком пугает многих. Чтобы привлечь следующий миллиард пользователей к Web3, критически важно улучшить процесс адаптации пользователей.

Как показала компания FTX (а также Gemini, Celsius и Mt. Gox), критически важно сохранять самостоятельную опеку над своими активами. Однако до недавнего времени самостоятельные кошельки были неуклюжими и запутанными для обычного пользователя. Большинство людей ежемесячно забывают свои пароли Web2; как пользователи должны хранить свои исходные фразы и закрытые ключи в безопасности вечно?

Проще говоря, это кошмар безопасности. Как мы видели бесчисленное количество раз, один неверный шаг, будь то по вине недобросовестных актеров или по небрежности, может привести к потере миллионов долларов.

Как первая точка контакта для новых пользователей криптовалюты, кошельки Ethereum должны быть простыми в использовании, безопасными и настраиваемыми в соответствии с потребностями каждого пользователя. Это требует от разработчиков интеграции простоты финансовых продуктов Web2 с функциями Web3.

Это именно то, чего достигает абстракция учетной записи.

Абстракция учетной записи повышает безопасность продуктов кошелька с самостоятельным хранением, устраняя зависимость пользователей от закрытого ключа и делая кошельки более программируемыми. Благодаря этому улучшенному пользовательскому интерфейсу кошельки, не связанные с тюремным заключением, наконец-то могут масштабироваться до миллионов основных криптопользователей.

Но чтобы полностью понять влияние абстракции учетной записи, мы должны вспомнить, как работают учетные записи Ethereum.

### Основы счетов Ethereum

Существует два типа учетных записей Ethereum:

1. Аккаунты, принадлежащие внешним владельцам (EOA)
2. Контрактные счета (CA)

Давайте разберем каждый немного дальше.

### Внешние аккаунты

Внешние учетные записи, такие как MetaMask и Coinbase Wallet, являются типичным типом учетной записи для пользователей Ethereum. Каждый EOA состоит из закрытого и открытого ключа, называемого ключевой парой.

Все транзакции авторизованы и подписаны закрытыми ключами. Как только транзакция подписана, EVM проверяет действительность подписи, используя адрес учетной записи EOA. Жестко закодированная логика в EVM означает, что учетная запись (объект, содержащий ваши токены) и закрытый ключ (подписавший) связаны как одно целое.

Потеря вашего закрытого ключа означает потерю ваших средств или даже контроля над вашей учетной записью навсегда.

### Контрактные счета

Между тем, учетные записи контрактов, синоним абстракции учетной записи, представляют собой смарт-контракты, развернутые в блокчейне Ethereum. Эти контракты контролируются логикой кода и не требуют закрытых ключей. В отличие от EOA, контрактные счета не могут инициировать транзакции. Вместо этого их транзакции инициируются инструкциями EOA.

### Почему абстракция аккаунта имеет значение

Абстракция учетной записи влечет за собой абстрагирование жестко запрограммированной логики авторизации от EOA, превращая каждую учетную запись в программируемый смарт-контракт, который можно адаптировать для удовлетворения потребностей любого человека.

Как объяснил соучредитель Argent и главный научный сотрудник Жюльен Нисет на недавнем мероприятии[Stark @ Home](https://www.crowdcast.io/e/7olimxqv), эта гибкая логика авторизации дает разработчикам свободу экспериментировать с такими функциями учетной записи, как…

**аппаратных подписантов:**использование защищенного анклава iPhone или Android для превращения любого смартфона в аппаратный кошелек. Оттуда пользователи могут подтверждать транзакции, используя биометрические данные, такие как отпечаток пальца или Apple Face ID. Мы уже начали видеть, как кошельки с самостоятельным хранением, такие как Braavos[, внедряют эту функцию.](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**Paymasters:**Разрешить пользователям оплачивать комиссию за газ любым токеном или даже использовать сторонний механизм оплаты транзакций.

**Социальное восстановление:**В случае потери или компрометации закрытого ключа пользователи могут авторизовать новый ключ в качестве законного владельца кошелька. Это может включать в себя различные методы восстановления через доверенные контакты, аппаратные кошельки или сторонние сервисы. Идея состоит в том, чтобы сделать восстановление доступа к вашей учетной записи таким же простым, как восстановление пароля банковского счета по электронной почте.

**Многофакторная аутентификация:**Подобно общепринятым методам двухфакторной аутентификации Web2, пользователи могут настроить два (или более) метода аутентификации для своих криптокошельков, где транзакция подписывается только после того, как пользователь подтвердит свое согласие с помощью второго варианта, такого как электронная почта или SMS. Пользователи также могут установить дневные лимиты на переводы или списки адресов учетных записей, взаимодействие с кошельком которых автоматически блокируется.

**Квантово-устойчивые и газосберегающие подписи:**Текущая схема подписи Ethereum, ECDSA, требует больших вычислительных ресурсов (читай: более высокая плата за газ) и может быть взломана квантовыми компьютерами. Благодаря абстракции подписи в различных контрактах учетных записей используются более эффективные и квантово-безопасные схемы подписи. StarkNet использует собственную кривую, удобную для STARK.

Эти функции не только обеспечивают пользователям большую безопасность и большую гибкость, но, что более важно, приводят к**улучшению**пользовательского опыта.

Инновации, связанные с абстракцией учетных записей, в основном EIP-2938 и EIP-3074, названные Виталиком Бутериным «давней мечтой» для сообщества разработчиков Ethereum, появились с 2020 года. Однако оба требовали компромиссов между безопасностью и реализацией. [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md), наиболее многообещающая разработка на данный момент, предлагает версию абстракции учетной записи, не требующую изменений в протоколе Ethereum.

### **Абстракция учетной записи и Starknet**

В отличие от Биткойна и Эфириума, которые модернизируют свои текущие протоколы для поддержки абстракции учетной записи,[StarkNet](https://starkware.co/starknet/)внедрила абстракцию учетной записи с первого дня. В сочетании с масштабируемостью и возможностями наших доказательств STARK потенциал инноваций кошелька безграничен. Вот почему следующее поколение самостоятельных кошельков, таких как Argent и Braavos, в настоящее время создается поверх нашей сети.

Подход StarkNet аналогичен EIP-4337,[признавая, что](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)полная абстракция учетной записи все равно приведет к запутанному UX, а[может открыть дверь](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale)для атак на секвенсоры. Скорее, он направлен на достижение как абстракции подписи, так и абстракции платежей за счет взаимного объединения некоторых необходимых инфраструктур внутри и вне сети.

И хотя предстоит еще много работы, абстракция учетных записей набирает обороты за пределами узкого круга криптоаборигенов. В декабре[Visa предложила идею](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/)использования абстракции учетной записи для настройки автоматических регулярных платежей в StarkNet. Используя делегируемую учетную запись, пользователи могут предоставить разрешение на инициирование платежа по предварительно утвержденному смарт-контракту. Оттуда смарт-контракт будет запрограммирован на вычет установленной суммы платежа в определенный день в течение установленного периода времени. Хотя Visa еще не обнародовала свои планы в отношении собственных услуг, один только интерес говорит о многом и может предвещать мир, в котором крупные технологические платформы подписки, такие как Netflix и Spotify, могут принять криптовалюту.

А что нас ждет в будущем, покажет только время. Но одно несомненно. Делая кошельки более простыми и безопасными в использовании, абстрагирование учетных записей послужит мощным катализатором для самостоятельных кошельков с блокчейном, которые будут масштабироваться для миллионов основных крипто-пользователей. А пока продолжим строительство.