const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const stories = require('../controllers/stories');
const Criteria = require('./criteria');

const schema = mongoose.Schema({
    _name: String,
    _role: String,
    _functionality: String,
    _benefit: String,
    _priority: String,
    _criteriaContext: String,
    _criterialist: [Criteria],
    _columnID: String,
  });

  class Story {

    constructor(name, role, functionality, benefit, priority, criteriaContext, criterialist, columnID) {
      this._name = name;
      this._role = role;
      this._functionality = functionality;
      this._benefit = benefit;
      this._priority = priority;
      this._criteriaContext = criteriaContext;
      this._criterialist = criterialist;
      this._columnID = columnID;
    }

    get name() {
        return this._name;
    }
    
    set name(v) {
        this._name = v;
    }
    get role() {
        return this._role;
    }
    
    set role(v) {
        this._role = v;
    }
    get functionality() {
        return this._functionality;
    }
    
    set functionality(v) {
        this._functionality = v;
    }
    get benefit() {
        return this._benefit;
    }
    
    set benefit(v) {
        this._benefit = v;
    }
    get priority() {
        return this._priority;
    }
    
    set priority(v) {
        this._priority = v;
    }
    get criteriaContext() {
        return this._criteriaContext;
    }
    
    set criteriaContext(v) {
        this._criteriaContext = v;
    }
    get criterialist() {
        return this._criterialist;
    }
    
    set criterialist(v) {
        this._criterialist = v;
    }
    get columnID() {
        return this._columnID;
    }
    
    set columnID(v) {
        this._columnID = v;
    }
}

schema.plugin(mongoosePaginate);
schema.loadClass(Story);
module.exports = mongoose.model('Story', schema);