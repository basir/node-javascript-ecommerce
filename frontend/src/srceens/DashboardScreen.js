/* eslint-disable no-new */
import Chartist from 'chartist';
import DashboardMenu from '../components/DashboardMenu';
import { getSummary } from '../api';

let summary = {};
const DashboardScreen = {
  after_render: () => {
    new Chartist.Line(
      '.ct-chart-line',
      {
        labels: summary.dailyOrders.map((x) => x._id),
        series: [summary.dailyOrders.map((x) => x.sales)],
      },
      {
        showArea: true,
      }
    );
    new Chartist.Pie(
      '.ct-chart-pie',
      {
        labels: summary.productCategories.map((x) => x._id),
        series: summary.productCategories.map((x) => x.count),
      },
      {
        donut: true,
        donutWidth: 60,
        startAngle: 270,
        showLabel: true,
        donutSolid: true,
      }
    );
  },
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
        <div class="charts">
          <div>
            <h2>Sales</h2>
            <div class="ct-perfect-fourth ct-chart-line"></div>
          </div>
          <div>
            <h2>Categories</h2>
            <div class="ct-perfect-fourth ct-chart-pie"></div>
          </div>
        </div>          
      </div>
    </div>
    `;
  },
};
export default DashboardScreen;
