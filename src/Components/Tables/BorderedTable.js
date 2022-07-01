import React from 'react';
import { useSelector } from 'react-redux';

const BorderedTable = () => {
  const users = useSelector((state) => state.users.value);

  return (
    <div className='col-sm-6'>
      <div className='panel'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Bordered table</h3>
        </div>
        {/*Bordered Table*/}
        {/*===================================================*/}
        <div className='panel-body'>
          <div className='table-responsive'>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th className='text-center'>#</th>
                  <th>User</th>
                  <th>Plan</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr>
                    <td className='text-center' id={i}>
                      {i + 1}
                    </td>
                    <td>
                      <a href='#' className='btn-link'>
                        {user.name}
                      </a>
                    </td>
                    <td>
                      <span
                        className={`label ${
                          user.plan == 'Bussines'
                            ? 'label-purple'
                            : user.plan == 'Personal'
                            ? 'label-info'
                            : 'label-warning'
                        }`}
                      >
                        {user.plan}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/*===================================================*/}
        {/*End Bordered Table*/}
      </div>
    </div>
  );
};

export default BorderedTable;
