import * as React from 'react';
// import { forkJoin } from 'rxjs';

// import { User } from './services/api';

import './App.css';
import { MyResponsiveBar } from './charts/Bar';
import { BarChartDataSample } from './charts/Bar.sample';

const App: React.FC = () => {
  // React.useEffect(() => {
  //   const userEvents = forkJoin([User.getUser('kleva-j'), User.getUserRepos('kleva-j')]).subscribe(console.log);
  //   return () => {
  //     userEvents.unsubscribe();
  //   };
  // }, []);

  return (
    <section className="flex min-h-screen bg-primary-bg">
      <article className="flex-1 min-h-screen">
        <nav className="flex justify-between w-11/12 m-auto h-16 items-center mb-16">
          <aside className="border-2 bg-primary-light rounded-tr-full rounded-br-full h-10 w-6"></aside>
          <aside className="flex">
            <ul className="flex mr-4 items-center">
              <li className="mx-4 border-transparent border-b-2 hover:border-primary-textlight text-lg text-primary-textlight font-medium cursor-pointer">
                Timeline
              </li>
              <li className="mx-4 border-transparent border-b-2 hover:border-primary-textlight text-lg text-primary-textlight font-medium cursor-pointer">
                Jobs
              </li>
            </ul>
            <form className="form">
              <label>
                <input
                  type="text"
                  name="searchbar"
                  placeholder="Search user"
                  className="h-full appearance-none rounded-full px-4 py-1.5 text-lg font-medium bg-primary-input text-primary-textlight"
                />
              </label>
            </form>
          </aside>
        </nav>

        <main className="w-11/12 m-auto mb-10">
          <div className="mb-8">
            <h1 className="text-primary-textlight text-4xl my-4">Dashboard</h1>
            <ul className="flex items-center">
              <li className="mr-12 py-2 text-base text-primary-textlight">
                <a href="/" className="appearance-none hover:text-primary-light font-medium">
                  Overview
                </a>
              </li>
              <li className="mr-12 py-2 text-base text-primary-textlight">
                <a href="/" className="appearance-none hover:text-primary-light">
                  Repositories
                </a>
              </li>
              <li className="mr-12 py-2 text-base text-primary-textlight">
                <a href="/" className="appearance-none hover:text-primary-light">
                  Organisations
                </a>
              </li>
              <li className="mr-12 py-2 text-base text-primary-textlight">
                <a href="/" className="appearance-none hover:text-primary-light">
                  Followers/Followings
                </a>
              </li>
            </ul>
          </div>

          <div className="flex">
            <div className="w-3/12 h-96 mr-2">
              <div className="flex h-32">
                <div className=""></div>
                <div className="w-20 bg-primary-lem rounded-4xl"></div>
              </div>
              <div className="flex mt-6 border-2 h-56"></div>
            </div>
            <div className="border-2 border-teal-300 flex-1 rounded-md h-96 mx-4"></div>
            <div className="border-2 border-teal-300 w-2/12 rounded-md h-96 ml-2"></div>
          </div>
        </main>

        <aside className="border-2 w-11/12 m-auto flex rounded-md">
          <div className="border-2 border-teal-300 flex-1 rounded-md h-56"></div>
          <div className="border-2 border-teal-300 flex-1 rounded-md h-56">
            {/* <MyResponsiveBar data={BarChartDataSample} /> */}
          </div>
        </aside>
      </article>
      <article className="w-64 min-h-screen bg-primary-dark">Right section</article>
    </section>
  );
};

export default App;

// SVG Icons
export const icons = {
  star: `<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>`,
  commits: `<path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"/>`,
  prs: `<path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"/>`,
  issues: `<path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"/>`,
  icon: `<path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>`,
  contribs: `<path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>`,
  fork: `<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>`,
};
