import Header from '../components/header'
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer/index'

export default function Root() {
  return (
    <>
      <Header />
      <Navbar />
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}