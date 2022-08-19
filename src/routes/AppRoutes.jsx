//Pages
import Login from '../pages/Login';
import LoadingPage from './../pages/LoadingPage/index';
import Home from '../pages/Home';

//Others
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { AuthProvider, AuthContext } from "../contexts/auth";
import { useContext } from "react";

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return (
                <LoadingPage />
            )
        }

        if (!authenticated) {
            return (
                <Navigate to="/login" />
            )
        }

        return children;
    };

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/' element={<Private><Home /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;