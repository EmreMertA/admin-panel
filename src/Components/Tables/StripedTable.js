import React from 'react';
import { useSelector } from 'react-redux';

const StripedTable = () => {
  const users = useSelector((state) => state.users.value);

  return (
    <div className='col-sm-6'>
      <div className='panel'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Striped rows</h3>
        </div>
        {/* Striped Table */}
        {/*===================================================*/}
        <div className='panel-body'>
          <div className='table-responsive'>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>Invoice</th>
                  <th>User</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr id={i}>
                    <td>
                      <a href='#fakelink' className='btn-link'>
                        order #{user.id}
                      </a>
                    </td>
                    <td>{user.name}</td>
                    <td>${user.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/*===================================================*/}
        {/* End Striped Table */}
      </div>
    </div>
  );
};

export default StripedTable;
