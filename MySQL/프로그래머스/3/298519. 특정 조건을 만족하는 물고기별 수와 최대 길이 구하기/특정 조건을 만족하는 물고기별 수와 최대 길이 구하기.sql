SELECT RESULT.FISH_COUNT, RESULT.MAX_LENGTH, RESULT.FISH_TYPE
FROM (
    SELECT COUNT(FISH_TYPE) AS FISH_COUNT, MAX(LENGTH) AS MAX_LENGTH, FISH_TYPE, AVG(IFNULL(LENGTH, 10)) AS AVERAGE
    FROM FISH_INFO
    GROUP BY FISH_TYPE
    HAVING AVERAGE >= 33
    ORDER BY AVERAGE DESC
) AS RESULT
ORDER BY FISH_TYPE ASC;