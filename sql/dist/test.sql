SELECT DISTINCT(division.division_name), COUNT(division.division_name)
FROM member
JOIN division
ON CAST(member.division_id AS integer) = division.division_id
GROUP BY division.division_name
ORDER BY COUNT(division.division_name) ASC;