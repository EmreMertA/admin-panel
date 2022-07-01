import React from 'react';

const DevicesTable = () => {
  return (
    <div className='col-lg-6'>
      <div className='panel'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Hover rows</h3>
        </div>
        {/*Hover Rows*/}
        {/*===================================================*/}
        <div className='panel-body'>
          <table className='table table-hover table-vcenter'>
            <thead>
              <tr>
                <th className='min-width'>Device</th>
                <th>Name</th>
                <th className='text-center'>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='text-center'>
                  <i className='demo-pli-monitor-2 icon-2x' />
                </td>
                <td>
                  <span className='text-main text-semibold'>Desktop</span>
                  <br />
                  <small className='text-muted'>Last 7 days : 4,234k</small>
                </td>
                <td className='text-center'>
                  <span className='text-danger text-semibold'>- 28.76%</span>
                </td>
              </tr>
              <tr>
                <td className='text-center'>
                  <i className='demo-pli-laptop icon-2x' />
                </td>
                <td>
                  <span className='text-main text-semibold'>Laptop</span>
                  <br />
                  <small className='text-muted'>Last 7 days : 3,876k</small>
                </td>
                <td className='text-center'>
                  <span className='text-warning text-semibold'>- 8.55%</span>
                </td>
              </tr>
              <tr>
                <td className='text-center'>
                  <i className='demo-pli-tablet-2 icon-2x' />
                </td>
                <td>
                  <span className='text-main text-semibold'>Tablet</span>
                  <br />
                  <small className='text-muted'>Last 7 days : 45,678k</small>
                </td>
                <td className='text-center'>
                  <span className='text-success text-semibold'>+ 58.56%</span>
                </td>
              </tr>
              <tr>
                <td className='text-center'>
                  <i className='demo-pli-smartphone-3 icon-2x' />
                </td>
                <td>
                  <span className='text-main text-semibold'>Smartphone</span>
                  <br />
                  <small className='text-muted'>Last 7 days : 34,553k</small>
                </td>
                <td className='text-center'>
                  <span className='text-success text-semibold'>+ 35.76%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/*===================================================*/}
        {/*End Hover Rows*/}
      </div>
    </div>
  );
};

export default DevicesTable;
