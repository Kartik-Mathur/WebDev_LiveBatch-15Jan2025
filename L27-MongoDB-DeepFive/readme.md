mongoDB connection string: mongodb://localhost:27017/

Open the mongosh: inside terminal type:
    mongosh

1. View all available databases
Type inside terminal:
    show dbs;

2. To select a database:
    use myDB;

3. To view all the collections
    show collections;

3. View the documents inside that collection
    db.orders.find();
    db.orders.insertOne({
        name:'mera product'
    })

    db.orders.deleteOne({
        name: 'mera product'
    })

Queries
        db.customers.aggregate([
            {
                $lookup: {
                    from: "orders",
                    localField: "_id",
                    foreignField: "customerId",
                    as: "customerOrders"
                }
            }
        ])
<!-- unwind -->
        db.customers.aggregate([
            {
                $lookup: {
                    from: "orders",
                    localField: "_id",
                    foreignField: "customerId",
                    as: "customerOrders"
                }
            },
            {
                $unwind: "$customerOrders"
            }
        ])


    db.customers.aggregate([
    {
        $lookup: {
        from: "orders",
        localField: "_id",
        foreignField: "customerId",
        as: "customerOrders"
        }
    },
    {
        $unwind: {
        path: "$customerOrders",
        preserveNullAndEmptyArrays: true
        }
  }
]);


db.mentors.aggregate([
  { 
    $match: { mentor: { $in: ["Kartik", "Kanak", "Abhishek"] } } 
  },
  { 
    $project: { name: 1, mentor: 1 } 
  },
  { 
    $addFields: { platform: "Coding Blocks" }  // it will be added as extra field
  }
]);

