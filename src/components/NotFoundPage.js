import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Header />
      Página não Encontrada. Acesse a <Link to="/dashboard">Página Inicial</Link>
    </React.Fragment>
  );
};
export default NotFoundPage;