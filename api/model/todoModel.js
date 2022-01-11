import mongoose from 'mongoose';

const {model,Schema}  = mongoose ;

const todoSchema = Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    dateTime : {
        type: String,
        required: true
    },

})
 

const todoModel = model('Todo',todoSchema);


export default todoModel;