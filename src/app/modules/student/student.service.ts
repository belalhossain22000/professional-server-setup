import { Student } from "./student.interface";
import { StudentMOdel } from "./student.model";


const createStudentIntoDB = async (student: Student) => {
    const result = await StudentMOdel.create(student)
    return result
}

const getAllStudentFromDb = async () => {
    const result = await StudentMOdel.find()
    return result
}

export const StudentServices = {
    createStudentIntoDB,
    getAllStudentFromDb
}
