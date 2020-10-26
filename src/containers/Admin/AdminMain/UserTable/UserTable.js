import React from 'react';


const UserTable = (props) => {
    const { data } = props;

    const rows = data.map((user, index) => {
      return (
        <tr key={"row"+ index}>
          <td key={"col"+ index + "1"}> {user.id} </td>
          <td key={"col"+ index + "2"}> {user.name} </td>
          <td key={"col"+ index + "3"}> {user.email} </td>
          <td key={"col"+ index + "5"}> {user.subscribe ? "Yes" : "No"} </td>
        </tr>
      );
    })

    // console.log(rows)



    return (
        <table className="table table-striped table-sm" id="signuptable">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Subscribed</th>
          </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
      </table>
      
    );
}

export default UserTable;