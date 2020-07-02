## Answer1
```
SELECT
FROM 
WHERE
GROUP BY 
HAVING 
ORDER BY 
```

## Answer2
```
SELECT StudentName , MAX(Marks) FROM student ;
```

## Answer3
```
SELECT Product.ProductCategory,SUM(Sales.SalesValue) FROM Product INNER JOIN Sales ON Product.Pid=Sales.Pid GROUP BY Product.ProductCategory;
```

## Answer4
```
i.   SELECT COUNT(*) FROM student WHERE marks>75 ;
ii.  SELECT * FROM student ORDER BY DESC ;
iii. SELECT StudentName FROM student WHERE StudentName like 'R%' ;
iv.  INSERT INTO student VALUES("studentABC” , 87) ;
v.   SELECT StudentName FROM student GROUP BY StudentName;
```

## Answer5
```
A)
+----------+---------+
| hostname | hostmac |
+----------+---------+
| host 1   | mac 1   |
| host 3   | mac 31  |
| host 3   | mac 32  |
| host 2   | NULL    |
| NULL     | mac 4   |
+----------+---------+
B)
+----------+---------+
| hostname | hostmac |
+----------+---------+
| host 1   | mac 1   |
| host 3   | mac 31  |
| host 3   | mac 32  |
+----------+---------+
C)
+----------+---------+
| hostname | hostmac |
+----------+---------+
| host 2   | mac 1   |
| host 3   | mac 1   |
+----------+---------+

```

## Answer6
```
1)  SELECT product.productname FROM product , sales WHERE sales.salesvalue=0 AND product.pid=sales.pid AND salesdate LIKE'%JULY%';
2) SELECT product.productname , sales.salesdate,sales.salesvalue FROM product LEFT JOIN  sales ON product.pid=sales.pid HAVING sales.salesvalue=0 AND sales.salesdate LIKE '%july%';
```