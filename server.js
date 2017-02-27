var express = require('express');
var path = require('path');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/carData';

app.get('/api', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    var cursor = db.collection('carData').find( {"makeModel" : req.query.makeModel });
    cursor.each(function(err, doc) {
      assert.equal(err, null);
      if ( doc != null) {
        res.send(doc);
      } else {
        db.close();
      }
    });
  })
});


app.use('/', express.static(__dirname + '/app'));

app.listen(8080);

console.log('Listening on port ' + 8080);
