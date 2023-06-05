const Taskmodel = require('../models/Taskmodel');

module.exports.getTasks = async (req, res) => {
  try {
    const tasks = await Taskmodel.find();
    res.send(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).send({ error: error.message, msg: 'Something went wrong!' });
  }
};

module.exports.saveTask = (req, res) => {
  const { task } = req.body;
  Taskmodel.create({ task })
    .then((data) => {
      console.log('Saved successfully...');
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err.message, msg: 'Something went wrong!' });
    });
};

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  Taskmodel.findByIdAndUpdate(id, { task })
    .then(() => res.send('Updated successfully'))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err.message, msg: 'Something went wrong!' });
    });
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;
  Taskmodel.findByIdAndDelete(id)
    .then(() => res.send('Deleted successfully'))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err.message, msg: 'Something went wrong!' });
    });
};
