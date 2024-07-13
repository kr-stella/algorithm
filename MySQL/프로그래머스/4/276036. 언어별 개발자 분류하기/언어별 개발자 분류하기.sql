# SELECT
# CASE
#     # Front End와 Python을 가지고 있는 개발자는 A
#     WHEN SKILL_CODE & (
#         SELECT SUM(CODE) FROM SKILLCODES
#         WHERE CATEGORY = "Front End"
#     ) AND SKILL_CODE & (
#         SELECT SUM(CODE) FROM SKILLCODES
#         WHERE NAME = "Python"
#     ) THEN "A"
#     # C#을 가지고 있는 개발자는 B
#     WHEN SKILL_CODE & (
#         SELECT SUM(CODE) FROM SKILLCODES
#         WHERE NAME = "C#"
#     ) THEN "B"
#     # 그 외의 경우 = Front End만 가지고 있는 개발자는 C
#     WHEN SKILL_CODE & (
#         SELECT SUM(CODE) FROM SKILLCODES
#         WHERE CATEGORY = "Front End"
#     ) THEN "C"
# END AS GRADE,
# ID, EMAIL
# FROM DEVELOPERS
# 최우선 조건으로 검색
# ( Front End를 가진사람 / Python을 가진사람 / C#을 가진사람 )
# 이게 없으면 D163 ( 16384 ) 처리가 안됨.
# WHERE SKILL_CODE & (
#     SELECT SUM(CODE)
#     FROM SKILLCODES
#     WHERE CATEGORY = "Front End"
#         OR NAME = "Python"
#         OR NAME = "C#"
# )
# ORDER BY GRADE, ID ASC;





SELECT CASE
    # Front End와 Python을 가지고 있는 개발자는 A
    WHEN SKILL_CODE & (
        SELECT SUM(CODE) FROM SKILLCODES
        WHERE CATEGORY = "Front End"
    ) AND SKILL_CODE & (
        SELECT SUM(CODE) FROM SKILLCODES
        WHERE NAME = "Python"
    ) THEN "A"
    # C#을 가지고 있는 개발자는 B
    WHEN SKILL_CODE & (
        SELECT SUM(CODE) FROM SKILLCODES
        WHERE NAME = "C#"
    ) THEN "B"
    ELSE "C"
END AS GRADE, ID, EMAIL
FROM DEVELOPERS
WHERE
# Front End AND Python
(SKILL_CODE & (
    SELECT SUM(CODE) FROM SKILLCODES
    WHERE CATEGORY = "Front End"
) AND SKILL_CODE & (
    SELECT SUM(CODE) FROM SKILLCODES
    WHERE NAME = "Python"
))

# C#
OR (SKILL_CODE & (
    SELECT SUM(CODE) FROM SKILLCODES
    WHERE NAME = "C#"
))

# Front End
OR (SKILL_CODE & (
    SELECT SUM(CODE) FROM SKILLCODES
    WHERE CATEGORY = "Front End"
))

# 아래 로직으로 처리할 경우 CASE... 로직에서 Front End와 Python 처리 후 ELSE에 Python인 경우가 딸려들어감
# WHERE SKILL_CODE & (
#     SELECT SUM(CODE)
#     FROM SKILLCODES
#     WHERE CATEGORY = "Front End"
#         OR NAME = "Python"
#         OR NAME = "C#"
# )

ORDER BY GRADE, ID;