import AuthProvider from '@/Components/AuthProvider/AuthProvider';
import LogInPage from '@/Components/LoginPage/LoginPage';
import React from 'react';

const logInPage = () => {

    return (
    
        <AuthProvider>
            <LogInPage></LogInPage>
        </AuthProvider>
    );
};

export default logInPage;