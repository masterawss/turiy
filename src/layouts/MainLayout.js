import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';

export default function MainLayout(){
    return (
        <>
            <TopBar/>
            <Outlet />
        </>
    );
}