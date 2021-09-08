import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
import Dashboard from './component/Dashboard';
import LineChart from './component/Charts/LineChart';
import Map from './component/Charts/Map';
import ConversionChart from './component/Charts/ConversionChart';
import ClicksChart from './component/Charts/ClicksChart';
import InstallChart from './component/Charts/InstallChart';
import CardAreachart from './component/Charts/CardAreachart';
import CardClickschart from './component/Charts/CardClickschart';
import CardConversionchart from './component/Charts/CardConversionchart';
import CardInstallchart from './component/Charts/CardInstallchart';
import InstallsBarChart from './component/Charts/InstallsBarChart';
import UsersBarChart from './component/Charts/UsersBarChart';
import SpendsBarChart from './component/Charts/SpendsBarChart';
import InstallsProgressChart from './component/Charts/InstallsProgressChart';
import UsersProgressChart from './component/Charts/UsersProgressChart';
import SpendsProgressChart from './component/Charts/SpendsProgressChart';
import SalesPieChart from './component/Charts/SalesPieChart';
import PurchaseHeatChart from './component/Charts/PurchaseHeatChart';
import Maps from './component/Charts/Maps';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Dashboard />
      <InstallsBarChart/>
      <InstallsProgressChart/>
      <UsersBarChart/>
      <UsersProgressChart/>
      <SpendsBarChart/>
      <SpendsProgressChart/>
      <CardAreachart/>
      <CardClickschart/>
      <CardConversionchart/>
      <CardInstallchart/>
      <LineChart />
      <ConversionChart />
      <ClicksChart/>
      <InstallChart/>
      <Maps/>
      <Map/>
      <SalesPieChart/>
      <PurchaseHeatChart/>
      <Footer />
    </div>
  );
}

export default App;
