const async = require('async');
const bcrypt = require('bcrypt');
const { json } = require('express');
const Story = require('../models/story');

function list(req, res, next) {
  const page = req.query.page ? req.query.page : 1;
  Story.paginate({},{
    page: page,
    limit: 100
  }, {page: page, limit: 8}).then(project => res.status(200).json({
    message: res.__('story.list.ok'),
    objs: stories
  })).catch(error => res.status(500).json({
    message: res.__('story.list.err'),
    obj: error
  }));
}

function create(req, res) {

  let name = req.body.name;
  let role = req.body.role;
  let functionality = req.body.functionality;
  let benefit = req.body.benefit;
  let priority = req.body.priority;
  let size = req.body.size;
  let criteriaContext = req.body.criteriaContext;
  let criteriaList = req.body.criteriaList;
  let columnId = req.body.columnId;

  let story = new Story({
    _name : name,
    _role : role,
    _functionality : functionality,
    _benefit : benefit,
    _priority : priority,
    _size : size,
    _criteriaContext : criteriaContext,
    _criteriaList : criteriaList,
    _columnId : columnId,

  })
}

function index(req, res) {
  let id = req.params.id;
  Story.findOne({ _id: id }).then(story => res.status(200).json({
    message: res.__('story.index.ok'),
    objs: story
  })).catch(error => res.status(500).json({
    message: res.__('story.index.err'),
     obj: error
  }));
}

function update(req, res) {

    let id = req.params.id;

    let story = new Object();
  
    if (req.body.name)
      story._name = req.body.name;
    if (req.body.role)
      story._role = req.body.role;
    if (req.body.functionality)
      story._functionality = req.body.functionality;
    if (req.body.benefit)
      story._benefit = req.body.benefit;
    if (req.body.priority)
      story._priority = req.body.priority;
    if (req.body.size)
      story._size = req.body.size;
    if (req.body.criteriaContext)
      story._criteriaContext = req.body.criteriaContext;
    if (req.body.criteriaList)
      story._criteriaList = req.body.criteriaList;
    if (req.body.columnId)
      story._columnId = req.body.columnId;
  
    Story.findOneAndUpdate({_id: id}, story, {omitUndefined: true}).then(story => res.status(200).json({
      message: res.__('story.update.ok'),
      objs: user
    })).catch(error => res.status(500).json({
      message: res.__('story.update.err'),
      obj: error
    }));
}

function destroy(req, res) {
    const id = req.params.id;
    Story.deleteOne({ _id: id }).then(story => res.status(200).json({
      message: res.__('story.destroy.ok'),
      objs: user
    })).catch(error => res.status(500).json({
      message: res.__('story.destroy.err'),
      obj: error
    }));
  }

module.exports = {
 list,
 create,
 update,
 destroy,
 index
}
