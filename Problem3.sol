// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.13;

contract StudentDB {
    struct Student {
        string name;
        uint256 age;
    }
    mapping(uint => Student) private student_list;
    uint private studentCount = 0;
    // Thêm
    function addStudent(string memory _name, uint256 _age) public {
        Student storage newStudent = student_list[studentCount];
        newStudent.name = _name;
        newStudent.age = _age;
        studentCount++;
    }
    // Xóa
    function removeStudent(uint _studentId) public {
        require(_studentId < studentCount, "Student does not exist");
        if (_studentId < studentCount - 1) {
            student_list[_studentId] = student_list[studentCount - 1];
        }
        delete student_list[studentCount - 1];
        studentCount--;
    }
    // Lấy student ( index đi từ 0 đến count - 1 )
    function getStudent(uint _studentId) public view returns (string memory, uint256) {
        require(_studentId < studentCount, "Student does not exist");
        Student memory student = student_list[_studentId];
        return (student.name, student.age);
    }
    // Xóa hết
    function clearStudentList() public {
        for (uint i = 0; i < studentCount; i++) {
            delete student_list[i];
        }
        studentCount = 0;
    }
    // Update
    function updateStudentInfomation(uint _studentId, string memory _name, uint256 _age) public {
        require(_studentId < studentCount, "Student does not exist");
        Student storage student = student_list[_studentId];
        student.name = _name;
        student.age = _age;
    }
}
