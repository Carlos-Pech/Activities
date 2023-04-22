const { response } = require('express');
const Activity = require('../Models/Activity')

exports.getAllActivities = async (req, res) => {
    try {
        const activities = await Activity.find();
        const response = {
            data: activities
        };
        res.status(200).json(response); // Agrega el código de estado HTTP 200 (OK)
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
};

exports.createActivity = async (req, res) => {
    try {
        const { title, time, date } = req.body;
        const activity = new Activity({ title, time, date });
        const savedActivity = await activity.save();
        const response = {
            message: 'Actividad creada exitosamente',
            data: savedActivity
        };
        res.status(201).json(response); // Agrega el código de estado HTTP 201 (Created)J
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

exports.deleteActivity = async (req, res) => {
    try {
        const activity = await Activity.findByIdAndDelete(req.params.id);
        if (!activity) {
            return res.status(404).json({ message: 'Actividad no encontada' });
        }
        const response = {
            message: 'Actividad eliminada exitosamente',
        };
        res.status(200).json(response); // Agrega el código de estado HTTP 200 (OK)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};


exports.deleteAllActivities = async (req, res) => {
    try {
    await Activity.deleteMany();
    res.json({ message: 'Todasd las actividades eliminadas' });
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateActivity = async (req, res) => {
    const { title, time, date } = req.body;
    const activityFields = {};
    if (title) activityFields.title = title;
    if (time) activityFields.time = time;
    if (date) activityFields.date = date;

    try {
    let activity = await Activity.findById(req.params.id);
    if (!activity) return res.status(404).json({ message: 'Actividad no encontada' });

    activity = await Activity.findByIdAndUpdate(req.params.id, { $set: activityFields }, { new: true });
    res.json({ message: 'Actividad actualizada con éxito', activity });
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
    }
};


// exports.updateActivity = async (req, res) => {
//     const { title, time, date } = req.body;
//     const activityFields = {};
//     if (title) activityFields.title = title;
//     if (time) activityFields.time = time;
//     if (date) activityFields.date = date;

//     try {
//     let activity = await Activity.findById(req.params.id);
//     if (!activity) return res.status(404).json({ message: 'Activity not found' });

//     activity = await Activity.findByIdAndUpdate(req.params.id, { $set: activityFields }, { new: true });
//     res.json(activity);
//     } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//     }
// };
