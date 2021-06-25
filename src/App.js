import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import SideBar from "./components/SideBar/SideBar";
import Email from "./components/Email/Email";
import Inbox from "./components/Inbox/Inbox";

function App() {
  return (
    <Layout>
      <SideBar />
      <Inbox />
      <Email />
    </Layout>
  );
}

export default App;
