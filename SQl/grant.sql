CREATE USER 'martin' @'localhost' IDENTIFIED BY '1234abc';

GRANT
SELECT
,
UPDATE
    ON Books TO 'martin' @'localhost';

REVOKE DELETE ON Books
FROM
    'martin' @'localhost';

FLUSH PRIVILEGES;