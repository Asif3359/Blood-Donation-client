import AuthProvider from '@/Components/AuthProvider/AuthProvider';
import SingUp from '@/Components/SingUp/SingUp';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const singUpPage = () => {
    return (
        <AuthProvider>
            <SingUp></SingUp>
        </AuthProvider>
    );
};

export default singUpPage;