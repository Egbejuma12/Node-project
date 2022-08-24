const Student = require("../Models/studentModels");

const studentCtrl = {
  getAllStudents: async (req, res) => {
    const allStudent = await Student.find();

    res.json(allStudent);
  },

  getOneStudent: (req, res) => {
    res.json({ msg: "request for one student" });
  },

  postStudent: async(req, res)=>{
        const {name, state, lga, dob} = req.body
  //  console.log(req.body);
    // const newStudent = new Student(req.body)
      const newStudent = await Student.create(req.body);
    //  console.log(newStudent)

        await newStudent.save()

        res.json({msg: "Student added successfully"})
    },

  deleteStudent: (req, res) => {
    res.json({ msg: "student deleted successfully" });
  },
};

module.exports = studentCtrl;
