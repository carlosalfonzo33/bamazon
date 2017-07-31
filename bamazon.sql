DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(45) NULL,
price INTEGER(7) NOT NULL,
stock_quantity(4) NOT NULL,
  PRIMARY KEY (id)
);

SELECT * from products;
