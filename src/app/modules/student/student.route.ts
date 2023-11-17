import express from 'express'
import { StudentController } from './student.controller'
const router = express.Router()

// route
router.post("/create-student", StudentController.createStudent)
router.get("/all-student", StudentController.getAllStudents)

export const StudentRoute = router

