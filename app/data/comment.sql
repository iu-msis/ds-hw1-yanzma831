DROP TABLE IF EXISTS Comment;

CREATE TABLE Comment (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comment varchar(100) NOT NULL
);

INSERT INTO Comment (id, comment)
VALUES (1,'I have something important to say');
INSERT INTO Comment (id, comment)
VALUES (2,'D&S is awesome');
INSERT INTO Comment (id, comment)
VALUES (3,'D&S is so hard');
