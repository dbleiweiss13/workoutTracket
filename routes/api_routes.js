const router = require("express").Router();
let db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    })
        .catch(err => {
            res.json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate({ _id: req.params.id }, 
        { $push: { exercises: req.body } }, 
        { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;
