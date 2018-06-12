var Apidata = require('./models/todo');
var Metadata = require('./models/metadata');
var Graphdata = require('./models/graphdata');
var NewDashboard = require('./models/newDashboard');
var Cityrevenue = require('./models/CityRevenue');

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/apidata', function (req, res) {
        // use mongoose to get all todos in the database
       Apidata.find(function (err, response) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(response); // return all todos in JSON format
    });
    });
	app.get('/chart/metadata/:chartType', function (req, res) {
        // use mongoose to get all todos in the database
       Metadata.find({charttype:req.params.chartType},function (err, response) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(response); // return all todos in JSON format
    });
    });
		app.get('/oneview/api', function (req, res) {
        // use mongoose to get all todos in the database
       Cityrevenue.findOne(function (err, response) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(response); // return all todos in JSON format
    });
    });
	app.get('/chart/graphdata', function (req, res) {
        // use mongoose to get all todos in the database
       Graphdata.find(function (err, response) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(response); // return all todos in JSON format
    });
	});
	app.get('/chart/graphdata/remove/:svgid', function (req, res) {
        // use mongoose to get all todos in the database
       Graphdata.remove({svgid:req.params.svgid},function (err, response) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(response); // return all todos in JSON format
    });
    });
	app.get('/chart/fetchdata/:svgid', function (req, res) {
        // use mongoose to get all todos in the database
       Graphdata.find({svgid:req.params.svgid},function (err, response) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(response); // return all todos in JSON format
    });
    });
	
	app.get('/dashboard/getdata', function (req, res) {
        // use mongoose to get all todos in the database
       NewDashboard.find(function (err, response) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(response); // return all todos in JSON format
    });
    });
	
app.post("/chart/save", (req, res) => {
  var myData = new Graphdata(req.body);
  myData.save()
    .then(item => {
      res.send(item);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.post("/dashboard/save", (req, res) => {
  var myData = new NewDashboard(req.body);
  myData.save()
    .then(item => {
      res.send(item);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile('D:/workspace/NodeAPI/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
