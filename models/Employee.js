const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema(
    {
        name: {
            type: String,
        },
        designation: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        age: {
            age: Number,
        }
    }, { timestamps: true }
)

const Employee = mongoose.model('Employee',employeeSchema);
module.exports = Employee