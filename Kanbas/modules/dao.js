import model from './model.js';

export const updateModule = (moduleId, module) =>
  model.updateOne({ _id: moduleId }, { $set: module });

export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });

export const createModuleByCourse = (module, cid) => {
  delete module._id;
  return model.create({ course: cid, ...module });
};

export const findModulesForCourse = (courseId) =>
  model.find({ course: courseId });
