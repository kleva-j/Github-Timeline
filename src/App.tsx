import * as React from 'react';
// import ReactTooltip from 'react-tooltip';
// import GitHubCalendar from 'react-github-calendar';

// import { forkJoin } from 'rxjs';

// import { User } from './services/api';

import './App.css';

import { Pie } from './charts/Pie/Pie';
import { Bar } from './charts/Bar/Bar';
import { SwarmPlot } from './charts/Swarmplot/Swarm';
import { Calendar } from './charts/Calendar/Calendar';

import { BarChartDataSample } from './charts/Bar/Bar.sample';
import { PieChartDataSample } from './charts/Pie/Pie.sample';
// import { CalendarSampleData } from './charts/Calendar/Calendar.sample';
import { SwarmChartDataSample } from './charts/Swarmplot/Swarm.sample';

// import { IContextInterface, UserContext } from './contexts/UserContext';

const App: React.FC = () => {
  // const context = React.useContext(UserContext) as IContextInterface;
  // const { username, theme } = context?.currentUser;
  // React.useEffect(() => {
  //   const userEvents = forkJoin([User.getUser('kleva-j'), User.getUserRepos('kleva-j')]).subscribe(console.log);
  //   return () => {
  //     userEvents.unsubscribe();
  //   };
  // }, []);

  return (
    <section className="grid__section min-h-screen bg-primary-bg">
      <article className="grid__article min-h-screen">
        <nav className="header__nav flex justify-between h-16 items-center">
          <aside className="border bg-primary-light rounded-tr-full rounded-br-full h-10 w-6"></aside>
          <aside className="flex">
            <ul className="flex mr-4 items-center">
              <li className="mx-4 border-transparent border-b hover:border-primary-textlight text-lg text-primary-textlight font-medium cursor-pointer">
                Timeline
              </li>
              <li className="mx-4 border-transparent border-b hover:border-primary-textlight text-lg text-gray-400 font-medium cursor-pointer">
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

        <main className="grid__main">
          <aside className="mb-5">
            <h1 className="text-primary-textlight text-4xl my-4">Dashboard</h1>
            <ul className="flex items-center">
              <li className="mr-12 py-2 text-base text-primary-textlight">
                <a href="/" className="appearance-none hover:text-primary-light font-medium">
                  Overview
                </a>
              </li>
              <li className="mr-12 py-2 text-base text-gray-400">
                <a href="/" className="appearance-none hover:text-primary-light">
                  Repositories
                </a>
              </li>
              <li className="mr-12 py-2 text-base text-gray-400">
                <a href="/" className="appearance-none hover:text-primary-light">
                  Organisations
                </a>
              </li>
              <li className="mr-12 py-2 text-base text-gray-400">
                <a href="/" className="appearance-none hover:text-primary-light">
                  Followers/Followings
                </a>
              </li>
            </ul>
          </aside>

          <aside className="grid__main--aside">
            <div className="border border-teal-300 rounded-md row-span-full">
              <Pie data={PieChartDataSample} />
            </div>
            <div className="border border-teal-300 rounded-md row-span-full">
              <SwarmPlot data={SwarmChartDataSample} />
            </div>
          </aside>
        </main>

        <aside className="grid__aside rounded-md">
          <div className="border border-teal-300 rounded-md">
              <Calendar />
            </div>
          <div className="border border-teal-300 rounded-md">
            <Bar data={BarChartDataSample} />
          </div>
        </aside>
      </article>
      <article className="min-h-screen bg-primary-dark">Right section</article>
    </section>
  );
};

export default App;
