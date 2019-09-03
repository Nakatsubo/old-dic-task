SELECT divisions.division_name, COUNT(divisions.division_name)
FROM members
JOIN divisions
ON members.division_id = divisions.division_id
GROUP BY divisions.division_name;