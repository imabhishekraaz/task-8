import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { verifyToken } from "../api/api";

import Navbar from "../components/Navbar/Navbar";
import FloatingMenu from "../components/FloatingMenu/FloatingMenu";

const ProtectedRoutes = () => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const handleTokenVerification = async () => {
            try {
                const response = await verifyToken();

                if (response.data.success) {
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        handleTokenVerification();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <Navbar />
            <FloatingMenu />
            <Outlet />
        </>
    );
};

export default ProtectedRoutes;