import 'react-toastify/dist/ReactToastify.css';

import '../styles/globals.css';


import type { AppProps, AppContext as NextAppContext } from 'next/app';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';


import buildClient from '../api/base-client';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AppContext from '../context/app-context';

const StyledMyApp = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col h-screen justify-between">{children}</div>
);

interface IProps extends AppProps {
  currentUser: any;
}

const MyApp = ({ Component, pageProps, currentUser }: IProps) => {
  const [auth, setAuth] = useState({
    isAuthenticated: !!currentUser,
    currentUser,
  });

  return (
    <AppContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      <StyledMyApp>
        <Navbar />
        <div className="container mb-auto mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <Component {...pageProps} />
        </div>
        <Footer />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </StyledMyApp>
    </AppContext.Provider>
  );
};

MyApp.getInitialProps = async (appContext: NextAppContext) => {
  const client = buildClient(appContext.ctx);

  let currentUser = null;
  try {
    const { data } = await client.get('/api/auth/current-user');
    currentUser = data.currentUser;
  } catch (err) {
    console.error('Error fetching current user:', err.message);
  }

  let pageProps = {};

  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      currentUser
    );
  }

  return { currentUser, pageProps };
};

export default MyApp;
