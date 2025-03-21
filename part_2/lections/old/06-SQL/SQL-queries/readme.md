


```sql
CREATE TABLE "rating" (
	"id"	INTEGER,
	"lastName"	TEXT,
	"groupName"	TEXT,
	"rate"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT)
);

отсортировать группы по численности:
SELECT groupName, count(*) as cnt
FROM rating
GROUP BY groupName
ORDER BY cnt DESC
LIMIT 3

отсортировать группы по среднему рейтингу с округлением:
SELECT groupName, round(avg(rate), 2) as rt
FROM rating
GROUP BY groupName
ORDER BY rt DESC

```
