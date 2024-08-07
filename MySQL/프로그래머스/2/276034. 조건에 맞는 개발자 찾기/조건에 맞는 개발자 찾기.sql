# SET @python = (SELECT CODE FROM SKILLCODES WHERE NAME = "Python");
# SET @csharp = (SELECT CODE FROM SKILLCODES WHERE NAME = "C#");

SELECT ID, EMAIL, FIRST_NAME, LAST_NAME
FROM DEVELOPERS
WHERE SKILL_CODE & ((SELECT CODE FROM SKILLCODES WHERE NAME = "Python") | (SELECT CODE FROM SKILLCODES WHERE NAME = "C#"))
ORDER BY ID;