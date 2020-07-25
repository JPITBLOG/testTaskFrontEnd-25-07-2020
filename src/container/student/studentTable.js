import React from 'react';
import { Table } from 'reactstrap';

const StudentTable = (props) => {
    const {studentData} = props;

    const studentMapped = () => {
        return studentData.map(function (student,index) {
            let {fname , lname, gender, dateofBirth} = student;
            return (
                <tr key={index}>
                    <td>{`${fname} ${lname}`}</td>
                    <td>{gender}</td>
                    <td>{dateofBirth}</td>
                </tr>
            )
        });
    }

    return studentData.length ? (
            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Date Of Birth</th>
                </tr>
                </thead>
                <tbody>
                {studentMapped()}
                </tbody>
            </Table>
    ) :
        (
            <div>{'There is no any students'}</div>
        )
}

export default StudentTable;