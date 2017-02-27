var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/carData';


var carData = [
  {_id:0, makeModel: "FordEdge", make:"Ford", model: "Edge", image: "http://blog.caranddriver.com/wp-content/uploads/2016/02/2017-Ford-Escape-with-Sport-1011-626x382.jpg"},
  {_id:1, makeModel: "FordEscape", make:"Ford", model: "Escape", image: "http://media.caranddriver.com/images/08q1/267367/2008-ford-edge-photo-190644-s-450x274.jpg"},
  {_id:2, makeModel: "AcuraILX", make:"Acura", model: "ILX", image: "http://st.motortrend.com/uploads/sites/10/2016/05/2017-acura-ilx-technology-plus-a-spec-sedan-angular-front.png"},
  {_id:3, makeModel: "AcuraMDX", make:"Acura", model: "MDX", image: "http://static.usnews.rankingsandreviews.com/images/Auto/izmo/i5302/2016_acura_mdx_sideview.jpg"},
]

var insertData1 = function(db, callback) {
   db.collection('carData').insertOne( carData[0], function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the carData collection.");
    callback();
  });
};

var insertData2 = function(db, callback) {
   db.collection('carData').insertOne( carData[1], function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the carData collection.");
    callback();
  });
};

var insertData3 = function(db, callback) {
   db.collection('carData').insertOne( carData[2], function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the carData collection.");
    callback();
  });
};

var insertData4 = function(db, callback) {
   db.collection('carData').insertOne( carData[3], function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the carData collection.");
    callback();
  });
};


MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertData1(db, function() {
      db.close();
  });
  insertData2(db, function() {
      db.close();
  });
  insertData3(db, function() {
      db.close();
  });
  insertData4(db, function() {
      db.close();
  });
});
