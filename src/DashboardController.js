import React from 'react';
import './App.css';
import "./Dashboard.css";
import DashboardMaster from './DashboardMaster';

const MODE_LOGIN = "MODE_LOGIN";
const MODE_DASHBOARD = "MODE_DASHBOARD";

export default function DashboardController(props) {

    const [mode, setMode] = React.useState('LOGIN');
    


  if (mode === 'LOGIN') {
    return <DashboardMaster onAdd={() => setMode('MASTER')} />;
  } 

}

