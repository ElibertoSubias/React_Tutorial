import React, { useContext, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import authContext from '../context/auth/authContext';

const Index = () => {

  // Extraer el Usuario autenticado des Storage
  const AuthContext = useContext(authContext);
  const { usuarioAutenticado } = AuthContext;

  useEffect(() => {
    usuarioAutenticado()
  }, []);

  return (
    <Layout>
      <h1>Index</h1>
    </Layout>
  )
}

export default Index;