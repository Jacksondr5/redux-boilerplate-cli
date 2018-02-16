const fs = require('fs-extra');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const t = require('babel-types');

// export default insertActionConstant(fileLocation, actionName) {

// }

async function getActionConstantsAST(path) {
  return fs
    .readFile(path, 'utf8')
    .then(code => babylon.parse(code, { sourceType: 'module' }))
    .catch(err => {
      throw err;
    });
}

async function getNewConstLocationChoices(ast) {
  let locChoices = [];
  traverse(ast, {
    enter(path) {
      if (t.isVariableDeclaration(path.node)) {
        console.log(path.parent);
      }
    },
  });
}

module.exports = {
  getFile: getActionConstantsAST,
  getNewConstLocationChoices,
};
