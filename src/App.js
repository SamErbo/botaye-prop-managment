import './App.css';

// components list 
import MainContent from './components/mainContent/mainContent.component';
import SideBar from './components/sidebar/sidebar.component';


const app = () => {
  return (
    <div className="App">

      <div className="dashboard--root">

        <SideBar />
        <MainContent />

      </div>

    </div>
  );
}

export default app;
