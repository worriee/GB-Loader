import React, { useState } from 'react';
import Login from './components/Login';
import UserPanel from './components/UserPanel';
import AdminPanel from './components/AdminPanel';
import Navbar from './components/Navbar';
import Popup from './components/Popup';
import './index.css';

function App() {
    const [isAdmin, setIsAdmin] = useState(() => sessionStorage.getItem('isAdmin') === 'true');
    const [showLogin, setShowLogin] = useState(false);
    const [showUserPopup, setShowUserPopup] = useState(false);
    const [showAdminPopup, setShowAdminPopup] = useState(false);

    const handleLogin = (status) => {
        setIsAdmin(status);
        setShowLogin(false);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('isAdmin');
        setIsAdmin(false);
        setShowAdminPopup(false);
    };

    const handleAdminLoginClick = () => {
        setShowLogin(true);
    };

    if (showLogin) {
        return <Login onLogin={handleLogin} />;
    }

    return (
        <div>
            <Navbar
                isAdmin={isAdmin}
                onUserIconClick={() => isAdmin ? setShowAdminPopup(true) : setShowUserPopup(true)}
            />
            <Popup
                isOpen={showUserPopup}
                onClose={() => setShowUserPopup(false)}
                onAdminLoginClick={handleAdminLoginClick}
            />
            <Popup
                isOpen={showAdminPopup}
                onClose={() => setShowAdminPopup(false)}
                onAdminLogout={handleLogout}
                isAdmin={true}
            />
            <div className="pt-[60px]">
                {isAdmin ? <AdminPanel /> : <UserPanel />}
            </div>
        </div>
    );
}

export default App;
