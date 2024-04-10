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

  const findAllModulesByCourse = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findAllModulesByCourse(cid);
    res.json(modules);
  };

  app.put('/api/modules/:moduleId', updateModule);
  app.delete('/api/modules/:moduleId', deleteModule);
  app.post('/api/courses/:cid/modules', createModuleByCourse);
  app.get('/api/courses/:cid/modules', findAllModulesByCourse);
}
export default ModuleRoutes;
