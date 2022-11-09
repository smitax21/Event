import "./App.css";
import Login from "./Components/Login/Login";
import NavbarMenu from "./Components/Navbar/Navbar";
import EventList from "./Components/EventList/EventList";

function App() {
  return (
    <>
      <NavbarMenu />
      <Login />
      <EventList />
    </>
  );
}

export default App;
