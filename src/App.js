import './App.css';
import Dropdown from "./components/Dropdown";

function App() {
  const items = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out',
  ];
  return (
    <Dropdown icon="public" items={items} caption="Account settings"/>
  );
}

export default App;
