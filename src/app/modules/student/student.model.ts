import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';

// Define the schemas based on the provided types

// Guardian Schema
const guardianSchema = new Schema<Guardian>({
    fatherName: String,
    fatherOccupation: String,
    fatherContactNo: String,
    motherName: String,
    motherOccupation: String,
    motherContactNo: String,
});

// UserName Schema
const userNameSchema = new Schema<UserName>({
    firstName: String,
    lastName: String,
});

// LocalGuardian Schema
const localGuardianSchema = new Schema<LocalGuardian>({
    name: String,
    occupation: String,
    contactNo: String,
    address: String,
});

// Student Schema
const studentSchema = new Schema<Student>({
    id: String,
    name: userNameSchema,
    gender: { type: String, enum: ['male', 'female'] },
    dateOfBirth: String,
    email: String,
    contactNo: String,
    emergencyContactNo: String,
    presentAddress: String,
    permanentAddress: String,
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImg: String,
    isActive: { type: String, enum: ['active', 'inActive'] },
});

// Create mongoose models using the schemas

export const StudentMOdel = model<Student>('Student', studentSchema);









