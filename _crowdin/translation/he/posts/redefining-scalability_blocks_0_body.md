מדרגיות בלוקצ'יין תמיד הייתה נושא לוהט. כמעט כל רשת בלוקצ'יין מציגה מספרים גבוהים של עסקאות בשנייה (TPS) כנקודת מכירה. עם זאת, TPS אינו מדד חוקי להשוות איתן רשתות בלוקצ'יין - מה שהופך את זה לאתגר להעריך את הביצועים היחסיים שלהן. יתרה מכך, למספרי TPS גדולים יש בדרך כלל מחיר - מה שמציב את השאלה: האם הרשתות הללו אכן מתרחבות, או שהן פשוט מגדילות את התפוקה שלהן?

אז, בואו נבחן כיצד להגדיר מדרגיות, אילו פשרות נעשות כדי להשיג אותה, ומדוע Validity Rollups הם פתרון המדרגיות האולטימטיבי.

### לא כל העסקאות נעשות שוות

ראשית, עלינו לבסס את הקביעה שלנו שהמדד הפשוט והנוח של TPS אינו מדד מדויק של מדרגיות.

כדי לפצות צמתים על ביצוע עסקאות (ולהרתיע משתמשים מלשלוח דואר זבל ברשת בחישוב מיותר), בלוקצ'יין גובים עמלה פרופורציונלית לנטל החישובי המוטל על הבלוקצ'יין. ב-Ethereum, מורכבות הנטל החישובי נמדדת בגז*.*מכיוון שגז הוא מדד נוח מאוד למורכבות העסקאות, המונח ישמש לאורך המאמר הזה גם עבור בלוקצ'יין שאינם Ethereum, למרות שהוא בדרך כלל ספציפי ל-Ethereum.

עסקאות שונות באופן משמעותי במורכבותן, ולכן, כמה גז הן צורכות. ביטקוין, חלוץ עסקאות עמית לעמית חסרות אמון, תומך רק בכתב הביטקוין הבסיסי. ההעברות הפשוטות הללו מכתובת לכתובת משתמשות במעט גז. לעומת זאת, רשתות חוזים חכמים כמו Ethereum או Solana תומכות במכונה וירטואלית ובשפות תכנות שלמות טיורינג המאפשרות לבצע עסקאות הרבה יותר מורכבות. לפיכך, אפליקציות dApps כמו Uniswap דורשות הרבה יותר גז.

זו הסיבה שלא הגיוני להשוות את ה-TPS של בלוקצ'יין שונים. מה שעלינו להשוות במקום זאת הוא יכולת החישוב - או התפוקה.

לכל Blockchains יש גודל בלוק (משתנה) וזמן חסימה שקובעים כמה*יחידות חישוב*ניתן לעבד בכל בלוק וכמה*מהר*ניתן להוסיף בלוק חדש. יחד, שני המשתנים הללו קובעים את תפוקת**של בלוקצ'יין.

### מה מגביל את יכולת ההרחבה?

רשתות בלוקצ'יין שואפות להיות רשתות מבוזרות ומכילות בצורה מקסימלית. כדי להשיג זאת, יש לשמור על שתי תכונות בסיסיות.

#### **1. דרישות חומרה**

הביזור של רשת בלוקצ'יין נקבע על ידי היכולת של הצומת החלש ביותר ברשת לאמת את הבלוקצ'יין ולשמור על מצבו. לכן, העלויות להפעלת צומת (חומרה, רוחב פס ואחסון) צריכות להישמר נמוכות ככל האפשר כדי לאפשר לכמה שיותר אנשים להפוך למשתתפים חסרי הרשאה ברשת חסרת האמון.

#### 2**.**צמיחת המדינה

צמיחת המדינה מתייחסת לכמה מהר הבלוקצ'יין גדל. ככל שבלוקצ'יין מאפשר להתרחש יותר ביחידת זמן, כך הבלוקצ'יין גדל מהר יותר. צמתים מלאים מאחסנים את היסטוריית הרשת, והם חייבים להיות מסוגלים לאמת את מצב הרשת. מצבו של Ethereum מאוחסן ומתייחסים אליו באמצעות מבנים יעילים כגון עצים. ככל שהמדינה גדלה, מתווספים לה עלים וענפים חדשים, מה שהופך אותו למורכב וגוזל זמן רב יותר לבצע פעולות מסוימות. ככל שהשרשרת גדלה בגודלה, היא מחמירה את הביצוע במקרה הגרוע ביותר על ידי צמתים, מה שמוביל לזמן הולך וגדל לאימות בלוקים חדשים. עם הזמן, זה גם מגדיל את הזמן הכולל שלוקח לצומת מלא להסתנכרן.

### השפעות מזיקות של הגדלת התפוקה

#### 1. ספירת צמתים

הדרישות המינימליות להפעלת צומת וספירת צומתים הן:

* ביטקוין¹: שטח דיסק קשיח של 350GB, חיבור של 5 Mbit/s, 1GB RAM, CPU >1 Ghz. **מספר צמתים: ~10,000**
* Ethereum²: 500GB+ שטח דיסק SSD, חיבור של 25 Mbit/s, 4–8GB RAM, CPU 2–4 ליבות. **מספר צמתים: ~6,000**
* Solana³: 1.5TB+ שטח דיסק SSD, חיבור של 300 Mbit/s, 128GB RAM CPU 12+ ליבות. **מספר צמתים: ~1,200**

שימו לב שככל שדרישות המעבד, רוחב הפס והאחסון גדול יותר עבור צמתים הנדרשים לתפוקה של בלוקצ'יין, כך פחות צמתים ברשת - מה שמוביל לביזור חלש יותר ולרשת פחות מכילה.

#### 2. הגיע הזמן לסנכרן צומת מלא

כאשר מפעילים צומת בפעם הראשונה, עליו לסנכרן עם כל הצמתים הקיימים, להוריד ולאמת את מצב הרשת לאורך כל הדרך מבלוק הג'נסיס ועד לקצה השרשרת. תהליך זה צריך להיות מהיר ויעיל ככל האפשר כדי לאפשר לכל אחד לפעול כמשתתף חסר רשות בפרוטוקול.

בהתייחס ל[2020 Bitcoin Node](https://blog.lopp.net/2020-bitcoin-node-performance-tests/)ו[2021 Node Sync Tests](https://blog.lopp.net/2021-altcoin-node-sync-tests/)של Jameson Lopp כאינדיקטור, טבלה 1 משווה את הזמן שלוקח לסנכרן צומת מלא של ביטקוין מול Ethereum מול Solana במחשב ממוצע ברמת צרכן.

![שולחן 1. השוואה בין תפוקת בלוקצ'יין וסנכרון צמתים](/assets/1_gmpi_1c9zipoc-znrh7b5q.png "שולחן 1. השוואה בין תפוקת בלוקצ'יין וסנכרון צמתים")

טבלה 1 מדגימה שהגדלת התפוקה מובילה לזמני סנכרון ארוכים יותר מכיוון שצריך לעבד ולאחסן יותר ויותר נתונים.

בעוד שיפורים לתוכנת הצמתים נעשים כל הזמן כדי להפחית את האתגר של הבלוקצ'יין ההולך וגדל (הורדת טביעת הרגל של הדיסק, מהירויות סנכרון מהירות יותר, עמידות חזקה יותר של קריסה, מודולריזציה של רכיבים מסוימים וכו'), ברור שהצמתים עדיין לא יכולים לעמוד בקצב העליות לתפוקה.

### כיצד יש להגדיר מדרגיות?

מדרגיות היא המונח המוטעה ביותר בתחום הבלוקצ'יין. אמנם רצוי להגדיל את התפוקה, אבל זה רק חלק אחד מהפאזל.

***מדרגיות**פירושה**עסקאות נוספות**עבור**אותן חומרה**.*

מסיבה זו, ניתן להפריד את המדרגיות לשתי קטגוריות.

#### מדרגיות של רצף

רצף מתאר את פעולת ההזמנה והעיבוד של עסקאות ברשת. כפי שנקבע בעבר, כל בלוקצ'יין יכול להגדיל באופן טריוויאלי את התפוקה שלו על ידי הגדלת גודל הבלוק וקיצור זמן החסימה שלו - עד לנקודה שבה ההשפעה השלילית על הביזור שלו נחשבת משמעותית מדי. אבל, התאמה של הפרמטרים הפשוטים האלה לא מספקת את השיפורים הנדרשים. ה-EVM של Ethereum יכול, בתיאוריה,[להתמודד עם עד ~2,000 TPS](https://twitter.com/dankrad/status/1459607325854121989), וזה לא מספיק כדי לתת שירות לדרישת שטח בלוקים לטווח ארוך. כדי להרחיב את הרצף, סולאנה עשתה כמה חידושים מרשימים: ניצול סביבת ביצוע הניתנת להקביל ומנגנון קונצנזוס חכם, המאפשר תפוקה יעילה הרבה יותר. אבל, למרות השיפורים שלו, זה לא מספיק ולא ניתן להרחבה. ככל שסולאנה מגדילה את התפוקה שלה, עלויות החומרה להפעלת צומת ועיבוד עסקאות עולות גם הן.

#### מדרגיות אימות

*מדרגיות אימות מתארת גישות המגדילות את התפוקה מבלי להעמיס על צמתים עם עלויות חומרה הולכות וגדלות.*ספציפית, זה מתייחס לחידושים קריפטוגרפיים כמו הוכחות תוקף. הם הסיבה לכך ש-Lodity Rollups יכולים להרחיב בלוקצ'יין באופן בר קיימא.

**מה זה אוסף תוקף?**

אוסף תוקף (הידוע גם בשם "ZK-Rollups") מעביר חישוב ואחסון מצב מחוץ לשרשרת, אך שומר כמות קטנה של נתונים מסוימים על השרשרת. חוזה חכם על הבלוקצ'יין הבסיסי שומר על שורש המדינה של ה-Rollup. ב-Rollup, אצווה של עסקאות דחוסות מאוד, יחד עם שורש המצב הנוכחי, נשלחות ל-Prover מחוץ לשרשרת. המוכיח מחשב את העסקאות, מייצר הוכחת תוקף של התוצאות ושורש המצב החדש, ושולח אותו לאמת על השרשרת. המאמת מאמת את הוכחת התוקף, והחוזה החכם ששומר על מצב ה-Rollup מעדכן אותו למצב החדש שסופק על ידי המוכיח.

**כיצד מתרחבים אוסף תוקף עם אותן דרישות חומרה?**

למרות ש-Provers דורשים חומרה מתקדמת, הם אינם משפיעים על ביזור הבלוקצ'יין; כי תקפותן של עסקאות מובטחת על ידי הוכחות הניתנות לאימות מתמטית.

מה שחשוב הן הדרישות לאימות ההוכחות. מכיוון שהנתונים המעורבים דחוסים מאוד ומופשטים ברובם באמצעות חישוב, השפעתם על צמתים של הבלוקצ'יין הבסיסית היא*מינימלית.*

מאמתים (צמתי Ethereum) אינם דורשים חומרה מתקדמת, וגודל האצוות אינו מגדיל את דרישות החומרה. רק מעברי מצב וכמות קטנה של נתוני שיחה צריכים להיות מעובדים ומאוחסנים על ידי הצמתים. זה מאפשר לכל צמתי Ethereum לאמת אצווה של אוסף תוקף באמצעות החומרה הקיימת שלהם.

**ככל שיותר עסקאות, כך זה נהיה זול יותר**

ב-blockchains המסורתיים, ככל שיותר עסקאות מתרחשות, כך זה יתייקר עבור כולם ככל ששטח הבלוק מתמלא - והמשתמשים צריכים להציע מחיר גבוה יותר זה על זה בשוק עמלות כדי לכלול את העסקאות שלהם.

עבור אוסף תוקף, הדינמיקה הזו הפוכה. לאימות קבוצת עסקאות ב-Ethereum יש עלות מסוימת. ככל שמספר העסקאות בתוך אצווה גדל, העלות לאימות האצווה גדלה בקצב איטי יותר באופן אקספוננציאלי. הוספת עסקאות נוספות לאצווה מובילה לעמלות עסקה זולות יותר למרות שעלות האימות האצווה עולה - מכיוון שהיא מופחתת בין כל העסקאות בתוך האצווה. אוסף תוקף רוצה כמה שיותר עסקאות בתוך אצווה - כדי שניתן יהיה לחלק את עמלת האימות בין כל המשתמשים. ככל שגודל האצווה גדל לאינסוף, עמלה מופחתת לעסקה מתכנסת לאפס, כלומר, ככל שיותר עסקאות באוסף תוקף, כך היא זולה יותר עבור כולם.

dYdX, dApp המופעל על ידי אוסף תקפות, רואה לעתים קרובות גדלי אצווה של למעלה מ-12,000 עסקאות. השוואת צריכת הגז של אותן עסקאות ב-Mainnet לעומת ב-Validity Rollup ממחישה את רווחי המדרגיות:

יישוב עסקת dYdX ב-Ethereum Mainnet:**200,000 גז**

יישוב עסקת dYdX ב-StarkEx:**<500 גז**

דרך נוספת להסתכל על זה: העלות העיקרית של Validity Rollups מתקדמת באופן ליניארי עם מספר המשתמשים באותה אצווה.

#### מדוע רשימות אופטימיות אינן ניתנות להרחבה כפי שניתן לחשוב

בתיאוריה, אוסף אופטימיסטים מספק כמעט את אותם יתרונות מדרגיות כמו אוסף תוקף. אבל יש הבחנה אחת חשובה: אוסף אופטימיסטים מבצע אופטימיזציה למקרה הממוצע, ואילו אוסף תוקף מבצע אופטימיזציה למקרה הגרוע ביותר. מכיוון שמערכות בלוקצ'יין פועלות בתנאים יריבים במיוחד, אופטימיזציה למקרה הגרוע היא הדרך היחידה להשיג אבטחה.

במקרה הגרוע ביותר של אוסף האופטימיות, עסקאות של משתמש לא ייבדקו על ידי בודקי הונאה. לכן, כדי להתחרות בהונאה, המשתמש צריך לסנכרן צומת מלא של Ethereum, צומת מלא L2 ולחשב את העסקה החשודה בעצמו.

במקרה הגרוע ביותר של אוסף התוקף, משתמש יצטרך רק לסנכרן צומת מלא של Ethereum כדי לאמת את הוכחת התוקף, ולחסוך לעצמו את הנטל החישובי.

בניגוד ל-Lodity Rollups, העלויות של Optimistic Rollups מתרחבות באופן ליניארי עם מספר העסקאות במקום מספר המשתמשים, מה שהופך אותן ליקר יותר.

### החלק האחרון של הפאזל - גישה ללא רשות למצב האוסף

כדי להבטיח את תקפות העסקאות, המשתמשים צריכים להפעיל צומת Ethereum בלבד. עם זאת, משתמשים ומפתחים עשויים לרצות להציג ולהפעיל את המצב והביצוע של האוסף למטרות שונות. צומת L2</em>של אינדקס*ממלא את הצורך הזה בצורה מושלמת. לא רק שהוא מאפשר למשתמשים לראות את העסקאות ברשת, אלא שהוא גם חלק קריטי של תשתית שנחוץ לתשתית האקולוגית לתפקד. אינדקסים כמו The Graph, Alchemy, Infura; רשתות אורקל כמו Chainlink, וחוקרי בלוקים, כל אלה נתמכים באופן מלא על ידי צומת L2 חסר הרשאות ואינדקס.</p>

### סיכום

גישות רבות להתמודדות עם מדרגיות בלוקצ'יין מתמקדות בטעות בהגדלת תפוקה של**. אבל, זה מזניח את ההשפעה של התפוקה על צמתים: דרישות החומרה ההולכות וגוברות לעיבוד בלוקים ואחסון היסטוריית רשת, וכיצד זה מעכב את הביזור של הרשת.

עם הופעתה של קריפטוגרפיה חסינת תוקף, בלוקצ'יין יכול להשיג**מדרגיות אמיתית**שאינה מעמיסה על הצמתים בעלויות הולכות וגדלות ומאפשרת ביזור רחב. כעת אפשריות יותר עסקאות עם חישובים חזקים ומורכבים יותר עבור אותה חומרה, מה שהופך את הדילמה של שוק העמלות בתהליך - ככל שתהיה יותר פעילות ב-Validity Rollup, כך היא זולה יותר!

[SwagtimusPrime.eth](https://twitter.com/SwagtimusP?t=pO0L1vGIhuC-ZgWOusQYtA&s=09)ו[לואיס גוטמן](https://twitter.com/GuthL)

¹ מ<https://bitcoin.org/en/bitcoin-core/features/requirements>

² מ<https://ethereum.org/en/developers/docs/nodes-and-clients/>

³ מ<https://docs.solana.com/running-validator/validator-reqs>

⁴ מפושט מאוד ומותאם לגדלי בלוקים דינמיים ממוצעים