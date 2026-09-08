import {FC, memo, useState} from 'react';

import Page from '../components/Layout/Page';
import Navbar, {TabId} from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import AboutTab from '../components/tabs/AboutTab';
import ContactTab from '../components/tabs/ContactTab';
import ResumeTab from '../components/tabs/ResumeTab';
import {homePageMeta} from '../data/data';

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  const [tab, setTab] = useState<TabId>('about');

  return (
    <Page description={description} title={title}>
      <div className="mx-auto flex min-h-screen max-w-[1200px] flex-col gap-5 px-4 py-6 lg:flex-row lg:items-start lg:gap-6 lg:py-10">
        <Sidebar />
        <main className="min-w-0 flex-1 rounded-2xl border border-line bg-surface">
          <Navbar active={tab} onChange={setTab} />
          <div className="p-5 sm:p-7 lg:p-9">
            {tab === 'about' && <AboutTab />}
            {tab === 'resume' && <ResumeTab />}
            {tab === 'contact' && <ContactTab />}
          </div>
        </main>
      </div>
    </Page>
  );
});

export default Home;
