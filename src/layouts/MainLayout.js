import { Outlet } from 'react-router-dom';
import TopBar from 'components/TopBar';

export default function MainLayout(){
  return (
    <>
      <TopBar/>
      <div style={{backgroundColor: '#f7f7f7'}}>
        <Outlet />
      </div>
    </>
  );
}