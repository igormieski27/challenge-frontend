// src/services/StudentService.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`, // Your Node.js server URL
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getStudents() {
    return apiClient.get("/students");
  },
  createStudent(student) {
    return apiClient.post("/students", student);
  },
  updateStudent(id, student) {
    return apiClient.put(`/students/${id}`, student);
  },
  deleteStudent(id) {
    return apiClient.delete(`/students/${id}`);
  },
};
