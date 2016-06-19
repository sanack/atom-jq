'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _atom = require('atom');

var _render = require('./views/render');

/** @babel */
/* global atom */

exports.default = {
  activate: function activate(state) {
    this.subscriptions = new _atom.CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-jq:toggle': function atomJqToggle() {
        return (0, _render.togglePanel)();
      }
    }));

    (0, _render.start)();
  },
  deactivate: function deactivate() {
    (0, _render.destroy)();
    this.subscriptions.dispose();
  }
};