const express = require('express')
const Employee = require('../models/Employee')

// Show the list of employee
const index = (req, res, next) => {
    Employee.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured'
            })
        })
}

//show single employee
const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: "Error occured"
            })
        })
}

//add an employee
const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()
        .then(response => {
            res.json({
                message: 'Employee Added Scussefully',
            })
        })
        .catch(error => {
            res.json({
                message: 'Error occured'
            })
        })
}


//update an emplyee
const update = (req, res, next) => {
    let employeeID = req.body.employeeID

    let updatedData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
    }
    Employee.findByIdAndUpdate(employeeID, { $set: updatedData })
        .then(response => {
            res.json({
                message: 'Employee updated Scussefully',
            })
        })
        .catch(error => {
            res.json({
                message: 'Error occured'
            })
        })
}

//delete an employeee
const destroy = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
        .then(response => {
            res.json({
                message: "Employee Deleted successfully "
            })
        })
        .catch(error => {
            res.json({
                message: "Error occured"
            })
        })
}

module.exports = {
    index, show, store, update, destroy
}