import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
      This is from 404 component-
      <Link to="/">Go Home!</Link>
    </div>
);
export default NotFoundPage;