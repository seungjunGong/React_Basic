import React from "react";

const students = [
    {
        id: 1,
        name: "Inje"
    },
    {
        id: 2,
        name: "Steve"
    },
    {
        id: 3,
        name: "Bill"
    },
    {
        id: 4,
        name: "Jeff"
    }
];

function AttendanceBook(props){
    return (
        <ul>
            {students.map((student, index) => {
                // 포맷팅 문자열
                //return <li key={`student-id-${student.id}`}>{student.name}</li>
                return <li key={index}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;