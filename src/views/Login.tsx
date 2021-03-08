import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, LoginBg } from 'styled';

import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';

import { useAuthState } from 'contexts/AuthContext';

import githubImg from 'assets/img/github.svg';
import bgImg from 'assets/img/bg_1.png';

export const Login: React.FC = () => {
  let history = useHistory();
  const context = useAuthState();
  const { isAuthenticated } = context;

  useEffect(() => {
    isAuthenticated && history.push('/timeline');
  }, [history, isAuthenticated]);

  return (
    <>
      <Navbar transparent />
      <main>
        <section className="absolute w-full h-full">
          <LoginBg url={bgImg} />

          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-2/3 md:w-4/12 lg:w-3/12 xl:w-2/12 px-4 mb-12">
                <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-md font-bold">Sign in with</h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <a href={process.env.REACT_APP_LOGIN_ENDPOINT} target="_self" rel="noopener noreferrer">
                        <Button>
                          <img alt="Github logo" className="w-5 mr-1" src={githubImg} />
                          Github
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer absolute />
        </section>
      </main>
    </>
  );
};
