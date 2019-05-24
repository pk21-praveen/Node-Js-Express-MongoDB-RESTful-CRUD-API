const TodoSchema = require('../models/todo.models');

const TodoController = function () {
    this.create = (data) => {
        return new Promise((resolve, reject) => {
            let todo = new TodoSchema(data);
            todo.save().then(() => {
                resolve({status: 200, message: 'Created Successfully'})
            }).catch((err) => {
                reject({status: 500, message: 'Error :' + err.message})
            })
        })
    };

    this.findAll = () => {
        return new Promise((resolve, reject) => {
            TodoSchema.find().then((data) => {
                resolve({status: 200, data: data})
            }).catch((err) => {
                reject({status: 500, message: 'Error :' + err.message})
            })
        })
    };

    this.findOne = (id) => {
        return new Promise((resolve, reject) => {
            TodoSchema.findById(id).then((data) => {
                resolve({status: 200, data: data})
            }).catch((err) => {
                reject({status: 500, message: 'Error :' + err.message})
            })
        })
    };

    this.update = (id,data) => {
        return new Promise((resolve, reject) => {
            TodoSchema.updateOne({_id:id},data).then((data) => {
                resolve({status: 200,  message: 'Updated Successfully'})
            }).catch((err) => {
                reject({status: 500, message: 'Error :' + err.message})
            })
        })
    };

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            TodoSchema.deleteOne({_id:id}).then(() => {
                resolve({status: 200,  message: 'Deleted Successfully'})
            }).catch((err) => {
                reject({status: 500, message: 'Error :' + err.message})
            })
        })
    };
};

module.exports = new TodoController();