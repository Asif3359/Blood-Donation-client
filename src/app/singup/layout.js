import AuthProvider from '@/Components/AuthProvider/AuthProvider';
import React from 'react';

const layout = ({children}) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};

export default layout;