import React from 'react';
import { useSelector } from 'react-redux';

const CondensedTable = () => {
  const users = useSelector((state) => state.users.value);

  return (
    <div className='col-lg-6'>
      <div className='panel'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Condensed table</h3>
        </div>
        {/*Condensed Table*/}
        {/*===================================================*/}
        <div className='panel-body'>
          <table className='table  table-condensed'>
            <thead>
              <tr>
                <th>Invoice</th>
                <th>User</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>
                    <a href='#fakelink' className='btn-link'>
                      Order #{user.id}
                    </a>
                  </td>
                  <td>S{user.name}</td>
                  <td>${user.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/*===================================================*/}
        {/*End Condensed Table*/}
      </div>
    </div>
  );
};

export default CondensedTable;
