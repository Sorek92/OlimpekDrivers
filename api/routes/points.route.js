

const express = require('express');
const app = express();

const pointsRoutes = express.Router();

let Points = require('../models/Points');

// define store route
pointsRoutes.route('/create').post((req, res) => {

    let points = new Points(req.body);
    points.save()
        .then( points => {
            res.status(200).json({'points': 'points is create successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// define get data(index of listing) route
pointsRoutes.route('/').get((req, res) => {
    Points.find(( err, points) => {
        if(err){
            console.log(err);
        }else{
            res.json(points);
        }
    });
});

// define edit route
pointsRoutes.route('/edit/:id').get((req, res) => {
    let id = req.params.id;
    Points.findById(id, (err, points) => {
        res.json(points);
    });
});

// define update route
pointsRoutes.route('/update/:id').post((req, res) => {
    Points.findById(req.params.id, (err, next, points) => {
        if(!points)
            return next(new Error('could not load Document'));
        else{
            points.point_name = req.body.point_name;
            points.point_address_fv = req.point_address_fv;
            points.point_address = req.body.point_address;

            points.save()
                .then(points => {
                    res.json('Update complete');
                })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// define delete route
pointsRoutes.route('/delete/:id').get((req, res) => {
    Points.findByIdAndRemove({_id: req.params.id}, (err, points) => {
        if(err) 
            res.json(err);
        else
            res.json('Successfully removed');
    });
});


module.exports = pointsRoutes;
