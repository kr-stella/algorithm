SELECT E.EMP_NO, E.EMP_NAME, G.GRADE, E.SAL * G.RATE AS BONUS
FROM HR_EMPLOYEES AS E INNER JOIN (
    SELECT T.EMP_NO,
        CASE WHEN T.AVG >= 96 THEN "S"
            WHEN T.AVG >= 90 THEN "A"
            WHEN T.AVG >= 80 THEN "B"
            ELSE "C"
        END AS GRADE,   
        CASE WHEN T.AVG >= 96 THEN "0.2"
            WHEN T.AVG >= 90 THEN "0.15"
            WHEN T.AVG >= 80 THEN "0.1"
            ELSE "0"
        END AS RATE
        # CASE WHEN T.AVG >= 96 THEN "S"
        #     WHEN T.AVG BETWEEN 90 AND 95 THEN "A"
        #     WHEN T.AVG BETWEEN 80 AND 89 THEN "B"
        #     ELSE "C"
        # END AS GRADE,   
        # CASE WHEN T.AVG >= 96 THEN "0.2"
        #     WHEN T.AVG BETWEEN 90 AND 95 THEN "0.15"
        #     WHEN T.AVG BETWEEN 80 AND 89 THEN "0.1"
        #     ELSE "0"
        # END AS RATE
    FROM (
        SELECT EMP_NO, AVG(SCORE) AS AVG
        FROM HR_GRADE
        GROUP BY EMP_NO
    ) AS T
) AS G ON E.EMP_NO = G.EMP_NO
ORDER BY E.EMP_NO ASC;