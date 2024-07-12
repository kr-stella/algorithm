# CODE 값이 1, 2, 4라면 총합은 7
# 이걸 이진수로 바꾸면 111
# 따라서, SKILL_CODE 값에서 이진수로 001, 010, 100, 011, 101, 110, 111 등
# 적어도 하나의 비트가 설정된 행들이 선택됨

SELECT ID, EMAIL, FIRST_NAME, LAST_NAME
FROM DEVELOPERS
WHERE SKILL_CODE & (
    SELECT SUM(CODE)
    FROM SKILLCODES
    WHERE CATEGORY = "Front End"
) # != 0이랑 동일함
ORDER BY BINARY ID;

# 만약 완벽하게 포함하게 하려면
# WHERE SKILL_CODE & (
#     SELECT SUM(CODE)
#     FROM SKILLCODES
#     WHERE CATEGORY = "Front End"
# ) = (
#     SELECT SUM(CODE)
#     FROM SKILLCODES
#     WHERE CATEGORY = "Front End"
# )