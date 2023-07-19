#### TL;DR

אנו בונים את Starknet בארבעה שלבים:

* שלב 0 - יסודות (הושלם*)
* שלב א' - כוכבי לכת: אוסף אפליקציות בודדות
* שלב ב' - קונסטלציות: אוסף אפליקציות מרובות
* שלב שלישי - יקום: אוסף מבוזר

אנו מצפים לפרוס את שלב I בעוד מספר חודשים קצרים, ולהיות בדרך לשלבים II & III עד סוף 2021.

### מבוא

StarkWare בונה את Starknet, L2 ZK-Rollup מבוזר, חסר הרשאות ועמיד לצנזורה המופעל על ידי STARK, התומך בחישוב כללי על Ethereum. הוא מבוסס על שפת טיורינג [קהיר](https://www.cairo-lang.org/).

מפתחים, משתמשים וצמתי Starknet יוכלו לעשות כל מה שאפשר לצפות מאוסף L2 חסר הרשאות: מפתחים עשויים לבנות יישומים המיישמים את ההיגיון העסקי שלהם ולפרוס אותם ב-Starknet. משתמשים עשויים לשלוח עסקאות ל-Starknet לביצוע, בדיוק כמו שהם מקיימים אינטראקציה עם Ethereum היום. צמתים ומשתתפי Starknet יקבלו תמריצים קריפטו-כלכליים כדי להבטיח שהרשת תפעל בצורה יעילה והוגנת.

כל העסקאות של Starknet יתבצעו מדי פעם באצווה, ותקפותן תוכח בהוכחת STARK, שתאומת ב-Ethereum. מכיוון שהמאמץ החישובי הנדרש לאימות הוכחות STARK קטן באופן אקספוננציאלי בהשוואה לחישוב שהוכח, Starknet תשנה את ה-Ethereum בסדרי גודל.

מכיוון שכל מעברי מדינת Starknet יהיו מוכחים STARK, רק תקפים יתקבלו ב-Ethereum. כל הנתונים הנדרשים כדי לשחזר את מצב Starknet המלא יפורסמו ברשת. כל אחד יוכל להפעיל צומת Starknet משלו. מאפיינים אלה יהפכו את Starknet למאובטחת וחסרת רשות כמו Ethereum.

אנחנו עוסקים בזה כבר שלוש שנים, וכבר השגנו כמה אבני דרך יוצאות דופן בהפיכת "Moon Math" לתוכנה יעילה ברמה ייצור הפועלת על Ethereum. הדרך שבה StarkWare עושה דברים היא להתמודד תחילה עם הבעיות הקשות, לבנות את טכנולוגיית הליבה ולאחר מכן לשחרר אותה לייצור באופן חלקי. אנו נמשיך לבנות בצורה זו ככל שנביא את Starknet להשלמתו.

שלב 0 - יסודות

StarkWare השלימה את הנחת כמה יסודות חשובים עבור Starknet.

#### קהיר

[Cairo](https://twitter.com/StarkWareLtd/status/1300353049836376066?s=20) היא המסגרת שלנו לשפה & ברמה גבוהה של Turing-Complete להפקת הוכחות STARK לחישוב כללי. במקום ליצור "מעגלים" מורכבים או AIRs מורכבים, מפתח יישומים עשוי להשתמש בקהיר כדי להגדיר כל היגיון עסקי, להוכיח אותו מחוץ לשרשרת ולאמת אותו ברשת. קהיר היא [בייצור ב- Mainnet](https://twitter.com/StarkWareLtd/status/1320695603492507648?s=20), והיא גם [זמינה למפתחים](http://cairo-lang.org/).

בעוד מספר שבועות נשיק ברשת Ethereum ציבורית גרסת אלפא של שירות ההוכחה הגנרי (GPS) של קהיר. זה יאפשר למפתחים לבנות יישומים משלהם באמצעות קהיר, תוך יישום כל היגיון עסקי שהם רוצים. הם ישלחו את קוד קהיר שלהם ל-GPS כדי שיוכח, ולאחר מכן יאמתו על השרשרת.

GPS מאפשר הוכחה יחידה כדי לקבוע את שלמות הביצוע של יישומים נפרדים ועצמאיים לחלוטין, ובכך נותן ליישומים אלה את היכולת להפחית את הוצאות הגז של אימות ההוכחה ביניהם.

קהיר ו-GPS הם הבסיס של Starknet - ההחלטה שלנו להחצין את שניהם למפתחים מספקת להם חשיפה מוקדמת לטכנולוגיה הזו, לא רק כדי שהם יוכלו להתחיל לבנות עליה, אלא גם כדי שהם עשויים להשפיע על האבולוציה של Starknet.

נמשיך לפתח את קהיר בהתבסס על הצרכים והמשוב של קהילת המפתחים. נשפר את השפה הזו עם תכונות חדשות, תחביר ומובנה המשפרים את השימושיות שלה, ונמשיך לפתח ולשפר כלי עבודה של קהיר: מהדרים, מעקב/מאתר באגים ואינטגרציות ל-IDEs נפוצים.

סטארקנט תפעיל את קהיר מתחת למכסה המנוע.

#### ערימת התוכנה של STARK

StarkWare פיתחה את מערכת ההוכחה החזקה ביותר במערכת האקולוגית, והיא [ב- Mainnet](https://medium.com/starkware/starks-over-mainnet-b83e63db04c0) במשך חודשים. StarkWare פיתחה גם את [ethSTARK](https://twitter.com/StarkWareLtd/status/1264911004099543040?s=20), מוכיח הקוד הפתוח שלנו, שהוא מהיר פי 20 מכל מוכיח אחר; הוא מציע גם [חתימות אפס ידע וגם חתימות פוסט-קוונטי מאובטח](https://twitter.com/StarkWareLabs/status/1331930111227080709).

מדידות קנה המידה שלנו - לא אקסטרפולציות, וגם לא הבטחות - כוללות עיבוד של 300K עסקאות בהוכחה אחת ב-Mainnet, השגת [שיא העולם בתפוקה של אוסף: 3K tps](https://twitter.com/StarkWareLtd/status/1287770381525422082?s=20). תוך כדי כך, השגנו את שיא העולם ביעילות גז Rollup: 315 גז/טקס, זולים בסדרי גודל מעסקאות ב-Ethereum L1.

טכנולוגיה זו תהיה אבן הפינה של שכבת ההוכחה המבוזרת של Starknet, ומכאן נשחרר מוכיחים נוספים ומשופרים כחלק מהפיתוח של Starknet (עוד על כך בפוסט הקרוב בבלוג).

#### StarkEx

StarkEx הוא מנוע המדרגיות L2 שלנו. הוא משרת [לקוחות של DeversiFi](https://twitter.com/deversifi)ב-Mainnet מאז יוני 2020. זה יפעיל גם [dYdX](https://twitter.com/dydxprotocol) וגם [ImmutableX](https://twitter.com/Immutable) החל בעוד כמה שבועות קצרים. StarkEx יכולה להתמודד עם היגיון מסחר מורכב (מסחר נקודתי, נגזרים, NFTs) כמו גם תשלומים.

פיתוח StarkEx היה הדרך שלנו לקדם את שרשרת הכלים שלנו ולבדוק אותה מול צרכי העולם האמיתי. אין כמו הדרישות של יישומים בפועל ומשתמשים חיים כדי לעזור לכלים להבשיל ולהתפתח. זה גם עוזר לנו להבין באילו אלמנטים יש לטפל כדי לשרת טוב יותר את המערכת האקולוגית - למשל, אינטגרציות עם ארנקים וחוקרי בלוקים.

StarkEx היא דוגמה חיה ליכולת להרחיב יישומים באמצעות ZK-Rollup מבוסס STARK, והיא האפליקציה הראשונה בייצור ב-Mainnet שנכתבה בקהיר. ככזה, זה יהיה גם אחד מהיישומים הפועלים ב-Starknet.

### הדרך קדימה

#### שלב א' - כוכבי לכת: אוסף אפליקציות בודדות

שלב זה יאפשר למפתחים לבנות ולפרוס יישומים ניתנים להרחבה משלהם ב-Starknet.

בשלב זה, כל מופע של Starknet יוכל להריץ אפליקציה בודדת. מופעים שונים עשויים להפעיל יישומים שונים.\
המסגרת של Starknet תכלול את הדברים הבאים:

* מנגנונים הדרושים ליצירת הוכחות STARK עבור היגיון קהיר שרירותי, ולאחר מכן להגיש ולאמת אותן ב-Ethereum.
* אינטראקציות עם L1 Ethereum: הפקדות ומשיכות של אסימוני L1, פרסום הנתונים על השרשרת, מנגנוני בריחה המגנים על משתמשי Starknet מפני מפעילי Starknet זדוניים וכו'.
* ניהול יתרות המשתמש L2, ואחסון האפליקציה והזיכרון.

מפתחים יוכלו להתמקד אך ורק בבניית ההיגיון העסקי של האפליקציה שלהם, ולאחר מכן לעבור לייצור: לפרוס ולהפעיל אותו בקנה מידה ב-Starknet.

מה שמאפשר לנו לבנות ZK-Rollup שניתן להרחבה בחישוב כללי הוא השילוב של:

* קהיר, שהיא שפת תכנות למטרות כלליות של טיורינג
* מחסנית STARK החזקה שלנו (מוכיח ומאמת), המאפשרת חיבור חישובים עצומים להוכחה אחת

#### שלב ב' - קונסטלציות: ריבוי אפליקציות

השלב הבא יתמוך במספר יישומים הפועלים על אותו מופע של Starknet ויגשו לאותו מצב L2 גלובלי. זה יאפשר יכולת פעולה הדדית בין יישומים שונים, כמו גם עלות גז מופחתת בשל יתרונות גודל משופרים.

קהיר, מחסנית ה-STARK החזקה וה-GPS מעצימים את היתרון התחרותי של Starknet בתמיכה באוסף ריבוי אפליקציות.

בשלב זה, Starknet תהיה מסגרת פונקציונלית מלאה להפעלת מספר יישומים עם כל היגיון עסקי שרירותי על גבי Ethereum, כאשר כל מופע מנוהל על ידי מפעיל יחיד.

מפעיל עשוי כעת לסובב צומת Starknet, ומפתחי יישומים עשויים לפרוס עליו את החוזים שלהם. מנקודת המבט של המשתמשים, Starknet כעת נראה ומרגיש כמו Ethereum, עם קנה מידה גבוה יותר.

#### שלב שלישי - יקום: אוסף מבוזר

השלב האחרון באבולוציה של Starknet הוא ביזור פעולתה.

שאלות מחקר&D מסקרנות שאנו עוסקים בהן כעת המשפיעות על שלב זה כוללות (i) שימוש ב-ZK-Rollups לשיפור מנגנוני הגעה לקונצנזוס, ו-(ii) עיצוב מנגנונים קריפטו-כלכליים כדי לתמרץ את התורמים והמפעילים המבוזרים של Starknet (מסדרי עסקאות, מוכיחים וכו') לתפקד בצורה יעילה, הוגנת ובטוחה.

### סיכום

StarkWare בונה את Starknet, L2 ZK-Rollup ללא הרשאות מבוזר על Ethereum המופעל על-ידי STARK, התומך בחישוב כללי המבוסס על שפת קהיר.

Starknet תאפשר לאפליקציות להתרחב מבלי לפגוע באבטחה, למשתמשים לשלם עמלות עסקה סבירות, ולכל האקוסיסטם לגדול באופן מהותי ולמלא את הבטחתה.

אנו מזמינים</a>

הזה.</p> 

עדכון (נובמבר 2021): Starknet Alpha פעיל ב-Ethereum Mainnet