import React from 'react';
import { useSelector } from 'react-redux';

const SampleToolbar = () => {
  const orders = useSelector((state) => state.users.value);

  return (
    <div className='panel'>
      <div className='panel-heading'>
        <h3 className='panel-title'>Sample Toolbar</h3>
      </div>
      {/*Data Table*/}
      {/*===================================================*/}
      <div className='panel-body'>
        <div className='pad-btm form-inline'>
          <div className='row'>
            <div className='col-sm-6 table-toolbar-left'>
              <button id='demo-btn-addrow' className='btn btn-purple'>
                <i className='demo-pli-add' /> Add
              </button>
              <button className='btn btn-default'>
                <i className='demo-pli-printer' />
              </button>
              <div className='btn-group'>
                <button className='btn btn-default'>
                  <i className='demo-pli-exclamation' />
                </button>
                <button className='btn btn-default'>
                  <i className='demo-pli-recycling' />
                </button>
              </div>
            </div>
            <div className='col-sm-6 table-toolbar-right'>
              <div className='form-group'>
                <input
                  id='demo-input-search2'
                  type='text'
                  placeholder='Search'
                  className='form-control'
                  autoComplete='off'
                />
              </div>
              <div className='btn-group'>
                <button className='btn btn-default'>
                  <i className='demo-pli-download-from-cloud' />
                </button>
                <div className='btn-group dropdown'>
                  <button
                    data-toggle='dropdown'
                    className='btn btn-default dropdown-toggle'
                  >
                    <i className='demo-pli-gear' />
                    <span className='caret' />
                  </button>
                  <ul role='menu' className='dropdown-menu dropdown-menu-right'>
                    <li>
                      <a href='#'>Action</a>
                    </li>
                    <li>
                      <a href='#'>Another action</a>
                    </li>
                    <li>
                      <a href='#'>Something else here</a>
                    </li>
                    <li className='divider' />
                    <li>
                      <a href='#'>Separated link</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='table-responsive'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th className='text-center'>Invoice</th>
                <th>User</th>
                <th>Order date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Tracking Number</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr>
                  <td>
                    <a className='btn-link' href='#'>
                      {' '}
                      Order #{order.id}
                    </a>
                  </td>
                  <td>{order.name}</td>
                  <td>
                    <span className='text-muted'>
                      <i className='demo-pli-clock' /> {order.date}
                    </span>
                  </td>
                  <td>${order.amount}</td>
                  <td>
                    <div
                      className={`label label-table  ${
                        order.status === 'Paid' ? 'label-success' : 'label-info'
                      }`}
                    >
                      {order.status}
                    </div>
                  </td>
                  <td>
                    <i className='demo-pli-mine' /> {order.trackingNumber}
                  </td>{' '}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/*===================================================*/}
      {/*End Data Table*/}
    </div>
  );
};

export default SampleToolbar;
