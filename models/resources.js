const mongoose = require('mongoose')
const {Schema}=mongoose
const resourcesSchema = new Schema({
    resources_id: Number,
    resources_name: {type:String, required: true},
    resources_link: {type:String, required: true},
    resources_type: {type:String, default: 'Online Guide'},
    resources_topic_id: Number,
    resources_subjects:{type:Schema.Types.ObjectID, ref:'Subjects'}
})

module.exports = mongoose.model('Resources', resourcesSchema)
