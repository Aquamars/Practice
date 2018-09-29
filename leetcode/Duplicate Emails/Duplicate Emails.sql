# Write your MySQL query statement below
SELECT Email
FROM
(SELECT Email, count(Email) AS num From Person group by Email) as count_mail
WHERE num > 1;