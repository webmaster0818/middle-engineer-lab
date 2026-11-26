CREATE TABLE engineers (
  id INTEGER PRIMARY KEY,
  name TEXT,
  job TEXT,
  years INTEGER
);

INSERT INTO engineers (name, job, years) VALUES
  ('A', 'インフラ', 8),
  ('B', 'Web', 3),
  ('C', 'インフラ', 12),
  ('D', 'データ', 5);
SELECT name, years
FROM engineers
WHERE job = 'インフラ'
ORDER BY years DESC;
UPDATE engineers SET years = 4 WHERE name = 'B';
DELETE FROM engineers WHERE name = 'D';
SELECT COUNT(*) FROM engineers;
SELECT job, COUNT(*) AS 人数, AVG(years) AS 平均年数
FROM engineers
GROUP BY job
ORDER BY 人数 DESC, job;
