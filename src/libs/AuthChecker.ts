
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthChecker() {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = JSON.parse(localStorage.getItem('user') || 'false');
        if (!isAuthenticated) {
            navigate("/");
        }
    }, [navigate]);

}

export default AuthChecker;
