import React from 'react';

const Sidebar = () => {
  return (
    <nav id='mainnav-container'>
      <div id='mainnav'>
        {/*OPTIONAL : ADD YOUR LOGO TO THE NAVIGATION*/}
        {/*It will only appear on small screen devices.*/}
        {/*================================
          <div class="mainnav-brand">
              <a href="index.html" class="brand">
                  <img src="img/logo.png" alt="Nifty Logo" class="brand-icon">
                  <span class="brand-text">Nifty</span>
              </a>
              <a href="#" class="mainnav-toggle"><i class="pci-cross pci-circle icon-lg"></i></a>
          </div>
          */}
        {/*Menu*/}
        {/*================================*/}
        <div id='mainnav-menu-wrap'>
          <div className='nano'>
            <div className='nano-content'>
              {/*Profile Widget*/}
              {/*================================*/}
              <div id='mainnav-profile' className='mainnav-profile'>
                <div className='profile-wrap text-center'>
                  <div className='pad-btm'>
                    <img
                      className='img-circle img-md'
                      src='img/profile-photos/1.png'
                      alt='Profile Picture'
                    />
                  </div>
                  <a
                    href='#profile-nav'
                    className='box-block'
                    data-toggle='collapse'
                    aria-expanded='false'
                  >
                    <span className='pull-right dropdown-toggle'>
                      <i className='dropdown-caret' />
                    </span>
                    <p className='mnp-name'>Aaron Chavez</p>
                    <span className='mnp-desc'>aaron.cha@themeon.net</span>
                  </a>
                </div>
                <div id='profile-nav' className='collapse list-group bg-trans'>
                  <a href='#' className='list-group-item'>
                    <i className='demo-pli-male icon-lg icon-fw' /> View Profile
                  </a>
                  <a href='#' className='list-group-item'>
                    <i className='demo-pli-gear icon-lg icon-fw' /> Settings
                  </a>
                  <a href='#' className='list-group-item'>
                    <i className='demo-pli-information icon-lg icon-fw' /> Help
                  </a>
                  <a href='#' className='list-group-item'>
                    <i className='demo-pli-unlock icon-lg icon-fw' /> Logout
                  </a>
                </div>
              </div>
              {/*Shortcut buttons*/}
              {/*================================*/}
              <div id='mainnav-shortcut' className='hidden'>
                <ul className='list-unstyled shortcut-wrap'>
                  <li className='col-xs-3' data-content='My Profile'>
                    <a className='shortcut-grid' href='#'>
                      <div className='icon-wrap icon-wrap-sm icon-circle bg-mint'>
                        <i className='demo-pli-male' />
                      </div>
                    </a>
                  </li>
                  <li className='col-xs-3' data-content='Messages'>
                    <a className='shortcut-grid' href='#'>
                      <div className='icon-wrap icon-wrap-sm icon-circle bg-warning'>
                        <i className='demo-pli-speech-bubble-3' />
                      </div>
                    </a>
                  </li>
                  <li className='col-xs-3' data-content='Activity'>
                    <a className='shortcut-grid' href='#'>
                      <div className='icon-wrap icon-wrap-sm icon-circle bg-success'>
                        <i className='demo-pli-thunder' />
                      </div>
                    </a>
                  </li>
                  <li className='col-xs-3' data-content='Lock Screen'>
                    <a className='shortcut-grid' href='#'>
                      <div className='icon-wrap icon-wrap-sm icon-circle bg-purple'>
                        <i className='demo-pli-lock-2' />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              {/*================================*/}
              {/*End shortcut buttons*/}
              <ul id='mainnav-menu' className='list-group'>
                {/*Category name*/}
                <li className='list-header'>Navigation</li>
                {/*Menu list item*/}
                <li>
                  <a href='#'>
                    <i className='demo-pli-home' />
                    <span className='menu-title'>Dashboard</span>
                    <i className='arrow' />
                  </a>
                  {/*Submenu*/}
                  <ul className='collapse'>
                    <li>
                      <a href='index.html'>Dashboard 1</a>
                    </li>
                    <li>
                      <a href='dashboard-2.html'>Dashboard 2</a>
                    </li>
                    <li>
                      <a href='dashboard-3.html'>Dashboard 3</a>
                    </li>
                  </ul>
                </li>
                {/*Menu list item*/}
                <li>
                  <a href='#'>
                    <i className='demo-pli-split-vertical-2' />
                    <span className='menu-title'>Layouts</span>
                    <i className='arrow' />
                  </a>
                  {/*Submenu*/}
                  <ul className='collapse'>
                    <li>
                      <a href='layouts-collapsed-navigation.html'>
                        Collapsed Navigation
                      </a>
                    </li>
                    <li>
                      <a href='layouts-offcanvas-navigation.html'>
                        Off-Canvas Navigation
                      </a>
                    </li>
                    <li>
                      <a href='layouts-offcanvas-slide-in-navigation.html'>
                        Slide-in Navigation
                      </a>
                    </li>
                    <li>
                      <a href='layouts-offcanvas-revealing-navigation.html'>
                        Revealing Navigation
                      </a>
                    </li>
                    <li className='list-divider' />
                    <li>
                      <a href='layouts-aside-right-side.html'>
                        Aside on the right side
                      </a>
                    </li>
                    <li>
                      <a href='layouts-aside-left-side.html'>
                        Aside on the left side
                      </a>
                    </li>
                    <li>
                      <a href='layouts-aside-dark-theme.html'>
                        Dark version of aside
                      </a>
                    </li>
                    <li className='list-divider' />
                    <li>
                      <a href='layouts-fixed-navbar.html'>Fixed Navbar</a>
                    </li>
                    <li>
                      <a href='layouts-fixed-footer.html'>Fixed Footer</a>
                    </li>
                  </ul>
                </li>
                {/*Menu list item*/}
                <li>
                  <a href='widgets.html'>
                    <i className='demo-pli-gear' />
                    <span className='menu-title'>
                      Widgets
                      <span className='pull-right badge badge-warning'>24</span>
                    </span>
                  </a>
                </li>
                <li className='list-divider' />
                {/*Category name*/}
                <li className='list-header'>Components</li>
                {/*Menu list item*/}
                <li>
                  <a href='#'>
                    <i className='demo-pli-boot-2' />
                    <span className='menu-title'>UI Elements</span>
                    <i className='arrow' />
                  </a>
                  {/*Submenu*/}
                  <ul className='collapse'>
                    <li>
                      <a href='ui-buttons.html'>Buttons</a>
                    </li>
                    <li>
                      <a href='ui-panels.html'>Panels</a>
                    </li>
                    <li>
                      <a href='ui-modals.html'>Modals</a>
                    </li>
                    <li>
                      <a href='ui-progress-bars.html'>Progress bars</a>
                    </li>
                    <li>
                      <a href='ui-components.html'>Components</a>
                    </li>
                    <li>
                      <a href='ui-typography.html'>Typography</a>
                    </li>
                    <li>
                      <a href='ui-list-group.html'>List Group</a>
                    </li>
                    <li>
                      <a href='ui-tabs-accordions.html'>
                        Tabs &amp; Accordions
                      </a>
                    </li>
                    <li>
                      <a href='ui-alerts-tooltips.html'>
                        Alerts &amp; Tooltips
                      </a>
                    </li>
                  </ul>
                </li>
                {/*Menu list item*/}
                <li>
                  <a href='#'>
                    <i className='demo-pli-pen-5' />
                    <span className='menu-title'>Forms</span>
                    <i className='arrow' />
                  </a>
                  {/*Submenu*/}
                  <ul className='collapse'>
                    <li>
                      <a href='forms-general.html'>General</a>
                    </li>
                    <li>
                      <a href='forms-components.html'>Advanced Components</a>
                    </li>
                    <li>
                      <a href='forms-validation.html'>Validation</a>
                    </li>
                    <li>
                      <a href='forms-wizard.html'>Wizard</a>
                    </li>
                    <li>
                      <a href='forms-file-upload.html'>File Upload</a>
                    </li>
                    <li>
                      <a href='forms-text-editor.html'>Text Editor</a>
                    </li>
                    <li>
                      <a href='forms-markdown.html'>Markdown</a>
                    </li>
                  </ul>
                </li>
                {/*Menu list item*/}
                <li className='active-sub'>
                  <a href='#'>
                    <i className='demo-pli-receipt-4' />
                    <span className='menu-title'>Tables</span>
                    <i className='arrow' />
                  </a>
                  {/*Submenu*/}
                  <ul className='collapse in'>
                    <li className='active-link'>
                      <a href='tables-static.html'>Static Tables</a>
                    </li>
                    <li>
                      <a href='tables-bootstrap.html'>Bootstrap Tables</a>
                    </li>
                    <li>
                      <a href='tables-datatable.html'>Data Tables</a>
                    </li>
                    <li>
                      <a href='tables-footable.html'>Foo Tables</a>
                    </li>
                  </ul>
                </li>
                {/*Menu list item*/}
                <li>
                  <a href='#'>
                    <i className='demo-pli-bar-chart' />
                    <span className='menu-title'>Charts</span>
                    <i className='arrow' />
                  </a>
                  {/*Submenu*/}
                  <ul className='collapse'>
                    <li>
                      <a href='charts-morris-js.html'>Morris JS</a>
                    </li>
                    <li>
                      <a href='charts-flot-charts.html'>Flot Charts</a>
                    </li>
                    <li>
                      <a href='charts-easy-pie-charts.html'>Easy Pie Charts</a>
                    </li>
                    <li>
                      <a href='charts-sparklines.html'>Sparklines</a>
                    </li>
                  </ul>
                </li>
                {/*Menu list item*/}
                <li>
                  <a href='#'>
                    <i className='demo-pli-repair' />
                    <span className='menu-title'>Miscellaneous</span>
                    <i className='arrow' />
                  </a>
                  {/*Submenu*/}
                  <ul className='collapse'>
                    <li>
                      <a href='misc-timeline.html'>Timeline</a>
                    </li>
                    <li>
                      <a href='misc-maps.html'>Google Maps</a>
                    </li>
                    <li>
                      <a href='xplugins-notifications.html'>
                        Notifications
                        <span className='label label-purple pull-right'>
                          Improved
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href='misc-nestable-list.html'>Nestable List</a>
                    </li>
                    <li>
                      <a href='misc-animate-css.html'>CSS Animations</a>
                    </li>
                    <li>
                      <a href='misc-css-loaders.html'>CSS Loaders</a>
                    </li>
                    <li>
                      <a href='misc-spinkit.html'>Spinkit</a>
                    </li>
                    <li>
                      <a href='misc-tree-view.html'>Tree View</a>
                    </li>
                    <li>
                      <a href='misc-clipboard.html'>Clipboard</a>
                    </li>
                    <li>
                      <a href='misc-x-editable.html'>X-Editable</a>
                    </li>
                  </ul>
                </li>
                {/*Menu list item*/}
                <li>
                  <a href='#'>
                    <i className='demo-pli-warning-window' />
                    <span className='menu-title'>Grid System</span>
                    <i className='arrow' />
                  </a>
                  {/*Submenu*/}
                  <ul className='collapse'>
                    <li>
                      <a href='grid-bootstrap.html'>Bootstrap Grid</a>
                    </li>
                    <li>
                      <a href='grid-liquid-fixed.html'>Liquid Fixed</a>
                    </li>
                    <li>
                      <a href='grid-match-height.html'>Match Height</a>
                    </li>
                    <li>
                      <a href='grid-masonry.html'>Masonry</a>
                    </li>
                  </ul>
                </li>
                <li className='list-divider' />
                {/*Category name*/}
                <li className='list-header'>More</li>
                {/*Menu list item*/}
                <li>
                  <a href='#'>
                    <i className='demo-pli-computer-secure' />
                    <span className='menu-title'>App Views</span>
                    <i className='arrow' />
                  </a>
                  {/*Submenu*/}
                  <ul className='collapse'>
                    <li>
                      <a href='app-file-manager.html'>File Manager</a>
                    </li>
                    <li>
                      <a href='app-users.html'>Users</a>
                    </li>
                    <li>
                      <a href='app-users-2.html'>Users 2</a>
                    </li>
                    <li>
                      <a href='app-profile.html'>Profile</a>
                    </li>
                    <li>
                      <a href='app-calendar.html'>Calendar</a>
                    </li>
                    <li>
                      <a href='app-taskboard.html'>Taskboard</a>
                    </li>
                    <li>
                      <a href='app-chat.html'>Chat</a>
                    </li>
                    <li>
                      <a href='app-contact-us.html'>Contact Us</a>
                    </li>
                  </ul>
                </li>
                {/*Menu list item*/}
                <li>
                  <a href='#'>
                    <i className='demo-pli-speech-bubble-5' />
                    <span className='menu-title'>Blog Apps</span>
                    <i className='arrow' />
                  </a>
                  {/*Submenu*/}
                  <ul className='collapse'>
                    <li>
                      <a href='blog.html'>Blog</a>
                    </li>
                    <li>
                      <a href='blog-list.html'>Blog List</a>
                    </li>
                    <li>
                      <a href='blog-list-2.html'>Blog List 2</a>
                    </li>
                    <li>
                      <a href='blog-details.html'>Blog Details</a>
                    </li>
                    <li className='list-divider' />
                    <li>
                      <a href='blog-manage-posts.html'>Manage Posts</a>
                    </li>
                    <li>
                      <a href='blog-add-edit-post.html'>Add Edit Post</a>
                    </li>
                  </ul>
                </li>
                {/*Menu list item*/}
                <li>
                  <a href='#'>
                    <i className='demo-pli-mail' />
                    <span className='menu-title'>Email</span>
                    <i className='arrow' />
                  </a>
                  {/*Submenu*/}
                  <ul className='collapse'>
                    <li>
                      <a href='mailbox.html'>Inbox</a>
                    </li>
                    <li>
                      <a href='mailbox-message.html'>View Message</a>
                    </li>
                    <li>
                      <a href='mailbox-compose.html'>Compose Message</a>
                    </li>
                    <li>
                      <a href='mailbox-templates.html'>Email Templates</a>
                    </li>
                  </ul>
                </li>
                {/*Menu list item*/}
                <li>
                  <a href='#'>
                    <i className='demo-pli-file-html' />
                    <span className='menu-title'>Other Pages</span>
                    <i className='arrow' />
                  </a>
                  {/*Submenu*/}
                  <ul className='collapse'>
                    <li>
                      <a href='pages-blank.html'>Blank Page</a>
                    </li>
                    <li>
                      <a href='pages-invoice.html'>Invoice</a>
                    </li>
                    <li>
                      <a href='pages-search-results.html'>Search Results</a>
                    </li>
                    <li>
                      <a href='pages-faq.html'>FAQ</a>
                    </li>
                    <li>
                      <a href='pages-pricing.html'>
                        Pricing
                        <span className='label label-success pull-right'>
                          New
                        </span>
                      </a>
                    </li>
                    <li className='list-divider' />
                    <li>
                      <a href='pages-404-alt.html'>Error 404 alt</a>
                    </li>
                    <li>
                      <a href='pages-500-alt.html'>Error 500 alt</a>
                    </li>
                    <li className='list-divider' />
                    <li>
                      <a href='pages-404.html'>Error 404 </a>
                    </li>
                    <li>
                      <a href='pages-500.html'>Error 500</a>
                    </li>
                    <li>
                      <a href='pages-maintenance.html'>Maintenance</a>
                    </li>
                    <li>
                      <a href='pages-login.html'>Login</a>
                    </li>
                    <li>
                      <a href='pages-register.html'>Register</a>
                    </li>
                    <li>
                      <a href='pages-password-reminder.html'>
                        Password Reminder
                      </a>
                    </li>
                    <li>
                      <a href='pages-lock-screen.html'>Lock Screen</a>
                    </li>
                  </ul>
                </li>
                {/*Menu list item*/}
                <li>
                  <a href='#'>
                    <i className='demo-pli-photo-2' />
                    <span className='menu-title'>Gallery</span>
                    <i className='arrow' />
                  </a>
                  {/*Submenu*/}
                  <ul className='collapse'>
                    <li>
                      <a href='gallery-columns.html'>Columns</a>
                    </li>
                    <li>
                      <a href='gallery-justified.html'>Justified</a>
                    </li>
                    <li>
                      <a href='gallery-nested.html'>Nested</a>
                    </li>
                    <li>
                      <a href='gallery-grid.html'>Grid</a>
                    </li>
                    <li>
                      <a href='gallery-carousel.html'>Carousel</a>
                    </li>
                    <li className='list-divider' />
                    <li>
                      <a href='gallery-slider.html'>Slider</a>
                    </li>
                    <li>
                      <a href='gallery-default-theme.html'>Default Theme</a>
                    </li>
                    <li>
                      <a href='gallery-compact-theme.html'>Compact Theme</a>
                    </li>
                    <li>
                      <a href='gallery-grid-theme.html'>Grid Theme</a>
                    </li>
                  </ul>
                </li>
                {/*Menu list item*/}
                <li>
                  <a href='#'>
                    <i className='demo-pli-tactic' />
                    <span className='menu-title'>Menu Level</span>
                    <i className='arrow' />
                  </a>
                  {/*Submenu*/}
                  <ul className='collapse'>
                    <li>
                      <a href='#'>Second Level Item</a>
                    </li>
                    <li>
                      <a href='#'>Second Level Item</a>
                    </li>
                    <li>
                      <a href='#'>Second Level Item</a>
                    </li>
                    <li className='list-divider' />
                    <li>
                      <a href='#'>
                        Third Level
                        <i className='arrow' />
                      </a>
                      {/*Submenu*/}
                      <ul className='collapse'>
                        <li>
                          <a href='#'>Third Level Item</a>
                        </li>
                        <li>
                          <a href='#'>Third Level Item</a>
                        </li>
                        <li>
                          <a href='#'>Third Level Item</a>
                        </li>
                        <li>
                          <a href='#'>Third Level Item</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='#'>
                        Third Level
                        <i className='arrow' />
                      </a>
                      {/*Submenu*/}
                      <ul className='collapse'>
                        <li>
                          <a href='#'>Third Level Item</a>
                        </li>
                        <li>
                          <a href='#'>Third Level Item</a>
                        </li>
                        <li className='list-divider' />
                        <li>
                          <a href='#'>Third Level Item</a>
                        </li>
                        <li>
                          <a href='#'>Third Level Item</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='list-divider' />
                {/*Category name*/}
                <li className='list-header'>Extras</li>
                {/*Menu list item*/}
                <li>
                  <a href='#'>
                    <i className='demo-pli-happy' />
                    <span className='menu-title'>Icons Pack</span>
                    <i className='arrow' />
                  </a>
                  {/*Submenu*/}
                  <ul className='collapse'>
                    <li>
                      <a href='icons-ionicons.html'>Ion Icons</a>
                    </li>
                    <li>
                      <a href='icons-themify.html'>Themify</a>
                    </li>
                    <li>
                      <a href='icons-font-awesome.html'>Font Awesome</a>
                    </li>
                    <li>
                      <a href='icons-flagicons.html'>Flag Icon CSS</a>
                    </li>
                    <li>
                      <a href='icons-weather-icons.html'>Weather Icons</a>
                    </li>
                  </ul>
                </li>
                {/*Menu list item*/}
                <li>
                  <a href='#'>
                    <i className='demo-pli-medal-2' />
                    <span className='menu-title'>
                      PREMIUM ICONS
                      <span className='label label-danger pull-right'>
                        BEST
                      </span>
                    </span>
                  </a>
                  {/*Submenu*/}
                  <ul className='collapse'>
                    <li>
                      <a href='premium-line-icons.html'>Line Icons Pack</a>
                    </li>
                    <li>
                      <a href='premium-solid-icons.html'>Solid Icons Pack</a>
                    </li>
                  </ul>
                </li>
                {/*Menu list item*/}
                <li>
                  <a href='helper-classes.html'>
                    <i className='demo-pli-inbox-full' />
                    <span className='menu-title'>Helper Classes</span>
                  </a>
                </li>{' '}
              </ul>
              {/*Widget*/}
              {/*================================*/}
              <div className='mainnav-widget'>
                {/* Show the button on collapsed navigation */}
                <div className='show-small'>
                  <a
                    href='#'
                    data-toggle='menu-widget'
                    data-target='#demo-wg-server'
                  >
                    <i className='demo-pli-monitor-2' />
                  </a>
                </div>
                {/* Hide the content on collapsed navigation */}
                <div
                  id='demo-wg-server'
                  className='hide-small mainnav-widget-content'
                >
                  <ul className='list-group'>
                    <li className='list-header pad-no mar-ver'>
                      Server Status
                    </li>
                    <li className='mar-btm'>
                      <span className='label label-primary pull-right'>
                        15%
                      </span>
                      <p>CPU Usage</p>
                      <div className='progress progress-sm'>
                        <div
                          className='progress-bar progress-bar-primary'
                          style={{ width: '15%' }}
                        >
                          <span className='sr-only'>15%</span>
                        </div>
                      </div>
                    </li>
                    <li className='mar-btm'>
                      <span className='label label-purple pull-right'>75%</span>
                      <p>Bandwidth</p>
                      <div className='progress progress-sm'>
                        <div
                          className='progress-bar progress-bar-purple'
                          style={{ width: '75%' }}
                        >
                          <span className='sr-only'>75%</span>
                        </div>
                      </div>
                    </li>
                    <li className='pad-ver'>
                      <a href='#' className='btn btn-success btn-bock'>
                        View Details
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*================================*/}
              {/*End widget*/}
            </div>
          </div>
        </div>
        {/*================================*/}
        {/*End menu*/}
      </div>
    </nav>
  );
};

export default Sidebar;
