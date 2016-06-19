'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.togglePanel = undefined;

var _nodeJq = require('node-jq');

var log = function log() {
  var _console;

  (_console = console).log.apply(_console, arguments);
}; /** @babel */

var togglePanel = exports.togglePanel = function togglePanel() {
  // const textEditor = atom.workspace.getActiveTextEditor()
  // textEditor.getText()
  var activePane = atom.workspace.getActivePaneItem();
  var activeFile = activePane.buffer.file;
  var activeFilePath = activeFile.path;
  console.log('activeFile', activeFile);
  console.log('filePath', activeFilePath);

  (0, _nodeJq.run)('keys', activeFilePath).then(log).catch(log);
};