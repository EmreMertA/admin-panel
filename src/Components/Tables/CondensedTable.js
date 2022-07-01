import React from 'react';

const CondensedTable = () => {
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
              <tr>
                <td>
                  <a href='#fakelink' className='btn-link'>
                    Order #53451
                  </a>
                </td>
                <td>Scott S. Calabrese</td>
                <td>$24.98</td>
              </tr>
              <tr>
                <td>
                  <a href='#fakelink' className='btn-link'>
                    Order #53452
                  </a>
                </td>
                <td>Teresa L. Doe</td>
                <td>$564.00</td>
              </tr>
              <tr>
                <td>
                  <a href='#fakelink' className='btn-link'>
                    Order #53453
                  </a>
                </td>
                <td>Steve N. Horton</td>
                <td>$58.87</td>
              </tr>
              <tr>
                <td>
                  <a href='#fakelink' className='btn-link'>
                    Order #53454
                  </a>
                </td>
                <td>Charles S Boyle</td>
                <td>$97.50</td>
              </tr>
              <tr>
                <td>
                  <a href='#fakelink' className='btn-link'>
                    Order #53455
                  </a>
                </td>
                <td>Lucy Doe</td>
                <td>$12.79</td>
              </tr>
              <tr>
                <td>
                  <a href='#fakelink' className='btn-link'>
                    Order #53456
                  </a>
                </td>
                <td>Michael Bunr</td>
                <td>$249.99</td>
              </tr>
              <tr>
                <td>
                  <a href='#fakelink' className='btn-link'>
                    Order #53451
                  </a>
                </td>
                <td>Scott S. Calabrese</td>
                <td>$24.98</td>
              </tr>
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
