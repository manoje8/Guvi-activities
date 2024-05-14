## MongoDB Queries

MongoDB Day-01 Task 

1.  Find all the information about each products
```
 db.product.find().pretty()
```
2. Find the product price which are between 400 to 800
```
db.product.find({ product_price: { $gt:400, $lt:800 }}).pretty()
```
3. Find the product price which are not between 400 to 600
```
db.product.find({ product_price: { $not:{ $gt:400, $lt:600 }}}).pretty()
```
4. List the four product which are greater than 500 in price
```
db.product.aggregate([{ $match:{ product_price:{ $gt:500 }}},{ $limit:4 }]).pretty()
```
5. Find the product name and product material of each products
```
db.product.find({},{ product_name: true, product_material: true}).pretty()
```
6. Find the product with a row id of 10
```
db.product.find({id: "10"}).pretty()
```
7. Find only the product name and product material
```
db.product.find({},{_id: false, product_name: true, product_material: true}).pretty()
```
8. Find all products which contain the value of soft in product material
```
db.product.find({product_material: "Soft"}).pretty()
```
9. Find products which contain product color indigo and product price 492.00
```
db.product.find({ $or:[{ "product_color": "indigo"},{ "product_price": 492}]}).pretty() 
```
10. Delete the products which product price value are 28
```
db.product.deleteMany({product_price: 28})
```
