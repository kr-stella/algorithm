SELECT COUNT(ID) AS COUNT
FROM ECOLI_DATA
WHERE (GENOTYPE & (1 | 4) != 0) AND (GENOTYPE & 2 = 0);