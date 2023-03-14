const express = require("express");
const router = express.Router();
const path = require("path");

const employeesController = require("../../controllers/employeesController");
const data = {};
data.employees = require("../../model/employees.json");

router
  .route("/")
  .get(employeesController.getAllEmployees)
  .post(employeesController.createNewEmployee)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);
router.route("/:id").get(employeesController.getAllEmployees);

module.exports = router;