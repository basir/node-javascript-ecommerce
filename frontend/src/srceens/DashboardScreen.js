import DashboardMenu from '../components/DashboardMenu';
import { getSummary } from '../api';

let summary = {};
const DashboardScreen = {
  after_render: () => {},
  render: async () => {
    summary = await getSummary();
    return `
    <div class="dashboard">
      ${DashboardMenu.render({ selected: 'dashboard' })}
      <div class="dashboard-content">
        <h1>Dashboard</h1>
       
        <ul class="summary-items">
          <li>
            <div class="summary-title color1">
              <span><i class="fa fa-users"></i> Users</span>
            </div>
            <div class="summary-body">${summary.users[0].numUsers}</div>
          </li>
          <li>
            <div class="summary-title color2">
              <span><i class="fa fa-users"></i> Orders</span>
            </div>
            <div class="summary-body">${summary.orders[0].numOrders}</div>
          </li>
          <li>
            <div class="summary-title color3">
              <span><i class="fa fa-users"></i> Sales</span>
            </div>
            <div class="summary-body">$${summary.orders[0].totalSales}</div>
          </li>
        </ul>
      </div>
    </div>
    `;
  },
};
export default DashboardScreen;
