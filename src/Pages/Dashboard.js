import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import BorderedTable from '../Components/Tables/BorderedTable';
import CondensedTable from '../Components/Tables/CondensedTable';
import DevicesTable from '../Components/Tables/DevicesTable';
import SampleToolbar from '../Components/Tables/SampleToolbar';
import StripedTable from '../Components/Tables/StripedTable';

const Dashboard = () => {
  return (
    <div id='container' className='effect aside-float aside-bright mainnav-lg'>
      {/*NAVBAR*/}
      {/*===================================================*/}
      <Navbar />
      {/*===================================================*/}
      {/*END NAVBAR*/}
      <div className='boxed'>
        {/*CONTENT CONTAINER*/}
        {/*===================================================*/}
        <div id='content-container'>
          <div id='page-head'>
            {/*Page Title*/}
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            <div id='page-title'>
              <h1 className='page-header text-overflow'>Static Tables</h1>
            </div>
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            {/*End page title*/}
            {/*Breadcrumb*/}
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            <ol className='breadcrumb'>
              <li>
                <a href='#'>
                  <i className='demo-pli-home' />
                </a>
              </li>
              <li>
                <a href='#'>Tables</a>
              </li>
              <li className='active'>Static Tables</li>
            </ol>
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            {/*End breadcrumb*/}
          </div>
          {/*Page content*/}
          {/*===================================================*/}
          <div id='page-content'>
            <div className='row'>
              <StripedTable />
              <BorderedTable />
            </div>
            <div className='row'>
              <DevicesTable />
              <CondensedTable />
            </div>
            <SampleToolbar />
          </div>
          {/*===================================================*/}
          {/*End page content*/}
        </div>
        {/*===================================================*/}
        {/*END CONTENT CONTAINER*/}
        {/*ASIDE*/}
        {/*===================================================*/}
        <aside id='aside-container'>
          <div id='aside'>
            <div className='nano'>
              <div className='nano-content'>
                {/*Nav tabs*/}
                {/*================================*/}
                <ul className='nav nav-tabs nav-justified'>
                  <li className='active'>
                    <a href='#demo-asd-tab-1' data-toggle='tab'>
                      <i className='demo-pli-speech-bubble-7 icon-lg' />
                    </a>
                  </li>
                  <li>
                    <a href='#demo-asd-tab-2' data-toggle='tab'>
                      <i className='demo-pli-information icon-lg icon-fw' />{' '}
                      Report
                    </a>
                  </li>
                  <li>
                    <a href='#demo-asd-tab-3' data-toggle='tab'>
                      <i className='demo-pli-wrench icon-lg icon-fw' /> Settings
                    </a>
                  </li>
                </ul>
                {/*================================*/}
                {/*End nav tabs*/}
                {/* Tabs Content */}
                {/*================================*/}
                <div className='tab-content'>
                  {/*First tab (Contact list)*/}
                  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                  <div className='tab-pane fade in active' id='demo-asd-tab-1'>
                    <p className='pad-all text-main text-sm text-uppercase text-bold'>
                      <span className='pull-right badge badge-warning'>3</span>{' '}
                      Family
                    </p>
                    {/*Family*/}
                    <div className='list-group bg-trans'>
                      <a href='#' className='list-group-item'>
                        <div className='media-left pos-rel'>
                          <img
                            className='img-circle img-xs'
                            src='img/profile-photos/2.png'
                            alt='Profile Picture'
                          />
                          <i className='badge badge-success badge-stat badge-icon pull-left' />
                        </div>
                        <div className='media-body'>
                          <p className='mar-no text-main'>Stephen Tran</p>
                          <small className='text-muteds'>Availabe</small>
                        </div>
                      </a>
                      <a href='#' className='list-group-item'>
                        <div className='media-left pos-rel'>
                          <img
                            className='img-circle img-xs'
                            src='img/profile-photos/7.png'
                            alt='Profile Picture'
                          />
                        </div>
                        <div className='media-body'>
                          <p className='mar-no text-main'>Brittany Meyer</p>
                          <small className='text-muteds'>I think so</small>
                        </div>
                      </a>
                      <a href='#' className='list-group-item'>
                        <div className='media-left pos-rel'>
                          <img
                            className='img-circle img-xs'
                            src='img/profile-photos/1.png'
                            alt='Profile Picture'
                          />
                          <i className='badge badge-info badge-stat badge-icon pull-left' />
                        </div>
                        <div className='media-body'>
                          <p className='mar-no text-main'>Jack George</p>
                          <small className='text-muteds'>
                            Last Seen 2 hours ago
                          </small>
                        </div>
                      </a>
                      <a href='#' className='list-group-item'>
                        <div className='media-left pos-rel'>
                          <img
                            className='img-circle img-xs'
                            src='img/profile-photos/4.png'
                            alt='Profile Picture'
                          />
                        </div>
                        <div className='media-body'>
                          <p className='mar-no text-main'>Donald Brown</p>
                          <small className='text-muteds'>
                            Lorem ipsum dolor sit amet.
                          </small>
                        </div>
                      </a>
                      <a href='#' className='list-group-item'>
                        <div className='media-left pos-rel'>
                          <img
                            className='img-circle img-xs'
                            src='img/profile-photos/8.png'
                            alt='Profile Picture'
                          />
                          <i className='badge badge-warning badge-stat badge-icon pull-left' />
                        </div>
                        <div className='media-body'>
                          <p className='mar-no text-main'>Betty Murphy</p>
                          <small className='text-muteds'>Idle</small>
                        </div>
                      </a>
                      <a href='#' className='list-group-item'>
                        <div className='media-left pos-rel'>
                          <img
                            className='img-circle img-xs'
                            src='img/profile-photos/9.png'
                            alt='Profile Picture'
                          />
                          <i className='badge badge-danger badge-stat badge-icon pull-left' />
                        </div>
                        <div className='media-body'>
                          <p className='mar-no text-main'>Samantha Reid</p>
                          <small className='text-muteds'>Offline</small>
                        </div>
                      </a>
                    </div>
                    <hr />
                    <p className='pad-all text-main text-sm text-uppercase text-bold'>
                      <span className='pull-right badge badge-success'>
                        Offline
                      </span>{' '}
                      Friends
                    </p>
                    {/*Works*/}
                    <div className='list-group bg-trans'>
                      <a href='#' className='list-group-item'>
                        <span className='badge badge-purple badge-icon badge-fw pull-left' />{' '}
                        Joey K. Greyson
                      </a>
                      <a href='#' className='list-group-item'>
                        <span className='badge badge-info badge-icon badge-fw pull-left' />{' '}
                        Andrea Branden
                      </a>
                      <a href='#' className='list-group-item'>
                        <span className='badge badge-success badge-icon badge-fw pull-left' />{' '}
                        Johny Juan
                      </a>
                      <a href='#' className='list-group-item'>
                        <span className='badge badge-danger badge-icon badge-fw pull-left' />{' '}
                        Susan Sun
                      </a>
                    </div>
                    <hr />
                    <p className='pad-all text-main text-sm text-uppercase text-bold'>
                      News
                    </p>
                    <div className='pad-hor'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer
                        <a
                          data-title='45%'
                          className='add-tooltip text-semibold text-main'
                          href='#'
                        >
                          adipiscing elit
                        </a>
                        , sed diam nonummy nibh. Lorem ipsum dolor sit amet.
                      </p>
                      <small>
                        <em>Last Update : Des 12, 2014</em>
                      </small>
                    </div>
                  </div>
                  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                  {/*End first tab (Contact list)*/}
                  {/*Second tab (Custom layout)*/}
                  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                  <div className='tab-pane fade' id='demo-asd-tab-2'>
                    {/*Monthly billing*/}
                    <div className='pad-all'>
                      <p className='pad-ver text-main text-sm text-uppercase text-bold'>
                        Billing &amp; reports
                      </p>
                      <p>
                        Get <strong className='text-main'>$5.00</strong> off
                        your next bill by making sure your full payment reaches
                        us before August 5, 2018.
                      </p>
                    </div>
                    <hr className='new-section-xs' />
                    <div className='pad-all'>
                      <span className='pad-ver text-main text-sm text-uppercase text-bold'>
                        Amount Due On
                      </span>
                      <p className='text-sm'>August 17, 2018</p>
                      <p className='text-2x text-thin text-main'>$83.09</p>
                      <button className='btn btn-block btn-success mar-top'>
                        Pay Now
                      </button>
                    </div>
                    <hr />
                    <p className='pad-all text-main text-sm text-uppercase text-bold'>
                      Additional Actions
                    </p>
                    {/*Simple Menu*/}
                    <div className='list-group bg-trans'>
                      <a href='#' className='list-group-item'>
                        <i className='demo-pli-information icon-lg icon-fw' />{' '}
                        Service Information
                      </a>
                      <a href='#' className='list-group-item'>
                        <i className='demo-pli-mine icon-lg icon-fw' /> Usage
                        Profile
                      </a>
                      <a href='#' className='list-group-item'>
                        <span className='label label-info pull-right'>New</span>
                        <i className='demo-pli-credit-card-2 icon-lg icon-fw' />{' '}
                        Payment Options
                      </a>
                      <a href='#' className='list-group-item'>
                        <i className='demo-pli-support icon-lg icon-fw' />{' '}
                        Message Center
                      </a>
                    </div>
                    <hr />
                    <div className='text-center'>
                      <div>
                        <i className='demo-pli-old-telephone icon-3x' />
                      </div>
                      Questions?
                      <p className='text-lg text-semibold text-main'>
                        {' '}
                        (415) 234-53454{' '}
                      </p>
                      <small>
                        <em>We are here 24/7</em>
                      </small>
                    </div>
                  </div>
                  {/*End second tab (Custom layout)*/}
                  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                  {/*Third tab (Settings)*/}
                  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                  <div className='tab-pane fade' id='demo-asd-tab-3'>
                    <ul className='list-group bg-trans'>
                      <li className='pad-top list-header'>
                        <p className='text-main text-sm text-uppercase text-bold mar-no'>
                          Account Settings
                        </p>
                      </li>
                      <li className='list-group-item'>
                        <div className='pull-right'>
                          <input
                            className='toggle-switch'
                            id='demo-switch-1'
                            type='checkbox'
                            defaultChecked
                          />
                          <label htmlFor='demo-switch-1' />
                        </div>
                        <p className='mar-no text-main'>
                          Show my personal status
                        </p>
                        <small className='text-muted'>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit.
                        </small>
                      </li>
                      <li className='list-group-item'>
                        <div className='pull-right'>
                          <input
                            className='toggle-switch'
                            id='demo-switch-2'
                            type='checkbox'
                            defaultChecked
                          />
                          <label htmlFor='demo-switch-2' />
                        </div>
                        <p className='mar-no text-main'>Show offline contact</p>
                        <small className='text-muted'>
                          Aenean commodo ligula eget dolor. Aenean massa.
                        </small>
                      </li>
                      <li className='list-group-item'>
                        <div className='pull-right'>
                          <input
                            className='toggle-switch'
                            id='demo-switch-3'
                            type='checkbox'
                          />
                          <label htmlFor='demo-switch-3' />
                        </div>
                        <p className='mar-no text-main'>Invisible mode </p>
                        <small className='text-muted'>
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus.{' '}
                        </small>
                      </li>
                    </ul>
                    <hr />
                    <ul className='list-group pad-btm bg-trans'>
                      <li className='list-header'>
                        <p className='text-main text-sm text-uppercase text-bold mar-no'>
                          Public Settings
                        </p>
                      </li>
                      <li className='list-group-item'>
                        <div className='pull-right'>
                          <input
                            className='toggle-switch'
                            id='demo-switch-4'
                            type='checkbox'
                            defaultChecked
                          />
                          <label htmlFor='demo-switch-4' />
                        </div>
                        Online status
                      </li>
                      <li className='list-group-item'>
                        <div className='pull-right'>
                          <input
                            className='toggle-switch'
                            id='demo-switch-5'
                            type='checkbox'
                            defaultChecked
                          />
                          <label htmlFor='demo-switch-5' />
                        </div>
                        Show offline contact
                      </li>
                      <li className='list-group-item'>
                        <div className='pull-right'>
                          <input
                            className='toggle-switch'
                            id='demo-switch-6'
                            type='checkbox'
                            defaultChecked
                          />
                          <label htmlFor='demo-switch-6' />
                        </div>
                        Show my device icon
                      </li>
                    </ul>
                    <hr />
                    <p className='pad-hor text-main text-sm text-uppercase text-bold mar-no'>
                      Task Progress
                    </p>
                    <div className='pad-all'>
                      <p className='text-main'>Upgrade Progress</p>
                      <div className='progress progress-sm'>
                        <div
                          className='progress-bar progress-bar-success'
                          style={{ width: '15%' }}
                        >
                          <span className='sr-only'>15%</span>
                        </div>
                      </div>
                      <small>15% Completed</small>
                    </div>
                    <div className='pad-hor'>
                      <p className='text-main'>Database</p>
                      <div className='progress progress-sm'>
                        <div
                          className='progress-bar progress-bar-danger'
                          style={{ width: '75%' }}
                        >
                          <span className='sr-only'>75%</span>
                        </div>
                      </div>
                      <small>17/23 Database</small>
                    </div>
                  </div>
                  {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                  {/*Third tab (Settings)*/}
                </div>
              </div>
            </div>
          </div>
        </aside>
        {/*===================================================*/}
        {/*END ASIDE*/}
        {/*MAIN NAVIGATION*/}
        {/*===================================================*/}
        <Sidebar />
        {/*===================================================*/}
        {/*END MAIN NAVIGATION*/}
      </div>
      {/* FOOTER */}
      {/*===================================================*/}
      <footer id='footer'>
        {/* Visible when footer positions are fixed */}
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <div className='show-fixed pad-rgt pull-right'>
          You have{' '}
          <a href='#' className='text-main'>
            <span className='badge badge-danger'>3</span> pending action.
          </a>
        </div>
        {/* Visible when footer positions are static */}
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <div className='hide-fixed pull-right pad-rgt'>
          14GB of <strong>512GB</strong> Free.
        </div>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        {/* Remove the class "show-fixed" and "hide-fixed" to make the content always appears. */}
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <p className='pad-lft'>© 2018 Your Company</p>
      </footer>
      {/*===================================================*/}
      {/* END FOOTER */}
      {/* SCROLL PAGE BUTTON */}
      {/*===================================================*/}
      <button className='scroll-top btn'>
        <i className='pci-chevron chevron-up' />
      </button>
      {/*===================================================*/}
    </div>
  );
};

export default Dashboard;
