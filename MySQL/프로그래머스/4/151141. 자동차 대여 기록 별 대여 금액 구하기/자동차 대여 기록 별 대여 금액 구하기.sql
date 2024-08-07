SELECT H.HISTORY_ID, FLOOR(SUM(C.DAILY_FEE * RENTAL_DATE * (1 - COALESCE(D.DISCOUNT_RATE, 0) / 100))) AS FEE
FROM CAR_RENTAL_COMPANY_CAR AS C INNER JOIN (
    SELECT HISTORY_ID, CAR_ID, DATEDIFF(END_DATE, START_DATE) + 1 AS RENTAL_DATE
    FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
) AS H ON H.CAR_ID = C.CAR_ID AND C.CAR_TYPE = "트럭"
LEFT JOIN CAR_RENTAL_COMPANY_DISCOUNT_PLAN AS D ON C.CAR_TYPE = D.CAR_TYPE AND D.DURATION_TYPE = CASE
    WHEN H.RENTAL_DATE < 7 THEN NULL
    WHEN H.RENTAL_DATE BETWEEN 7 AND 29 THEN "7일 이상"
    WHEN H.RENTAL_DATE BETWEEN 30 AND 89 THEN "30일 이상"
    ELSE "90일 이상"
END
GROUP BY H.HISTORY_ID
ORDER BY FEE DESC, H.HISTORY_ID DESC;