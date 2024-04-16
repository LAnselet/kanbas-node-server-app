import * as dao from './dao.js';

function ModuleRoutes(app) {
  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    res.json(status);
  };

  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.moduleId);
    res.json(status);
  };

  const createModuleByCourse = async (req, res) => {
    const { cid } = req.params;
    const module = await dao.createModuleByCourse(req.body, cid);
    res.json(module);
  };

  const findModulesForCourse = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModulesForCourse(cid);
    res.json(modules);
  };

  app.put('/api/modules/:moduleId', updateModule);
  app.delete('/api/modules/:moduleId', deleteModule);
  app.post('/api/courses/:cid/modules', createModuleByCourse);
  app.get('/api/courses/:cid/modules', findModulesForCourse);
}
export default ModuleRoutes;
