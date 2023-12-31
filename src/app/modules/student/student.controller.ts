import { Request, Response } from "express";
import { StudentServices } from "./student.service";




const createStudent = async (req: Request, res: Response) => {

    try {
        const { student: studentData } = req.body

        const result = await StudentServices.createStudentIntoDB(studentData);
        //send response
        res.status(200).json({
            success: true,
            message: "Student is created successfully",
            data: result
        })
    } catch (error) {
        console.log(error)
    }


}
const getAllStudents = async (req: Request, res: Response) => {

    try {


        const result = await StudentServices.getAllStudentFromDb();
        //send response
        res.status(200).json({
            success: true,
            message: "Student get successfully",
            data: result
        })
    } catch (error) {
        console.log(error)
    }


}

export const StudentController = {
    createStudent,
    getAllStudents
}