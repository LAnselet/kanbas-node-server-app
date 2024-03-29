import Database from '../Database/index.js';
export default function AssignmentRoute(app) {
  app.put('/api/assignments/:aid', (req, res) => {
    const { aid } = req.params;
    const assignmentIndex = db.assignments.findIndex((a) => a._id === aid);
    db.assignments[assignmentIndex] = {
      ...db.assignments[assignmentIndex],
      ...req.body,
    };
    res.sendStatus(204);
  });
  app.delete('/api/assignments/:aid', (req, res) => {
    const { aid } = req.params;
    db.assignments = db.assignments.filter((a) => a._id !== aid);
    res.sendStatus(200);
  });
  app.post('/api/assignments', (req, res) => {
    const assignment = { ...req.body, _id: new Date().getTime().toString() };
    Database.assignments.push(assignment);
    res.send(assignment);
  });
  app.get('/api/assignments', (req, res) => {
    const assignments = Database.assignments;
    res.send(assignments);
  });
}
