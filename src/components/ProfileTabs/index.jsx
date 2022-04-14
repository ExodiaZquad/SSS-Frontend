import React, { useState } from 'react';

const Tab = ({ label, count, index, tab, setTab }) => {
  const active = index == tab;
  const activeLabel = active ? 'text-[#0583F2]' : '';
  const activeLine = active
    ? "after:content-[' '] after:absolute after:w-full after:h-1 after:bg-[#0583F2] after:bottom-0 after:left-0"
    : '';

  return (
    <div className={activeLabel + ' cursor-pointer mr-5 py-1 relative'} onClick={() => setTab(index)}>
      <div className="text-center">{count}</div>
      <div className={activeLine}>{label}</div>
    </div>
  );
};

const ProfileTabs = () => {
  const [tab, setTab] = useState(1);

  return (
    <div className="border-t-4">
      <div className="container mx-auto">
        <div className="flex">
          <Tab label="Favorite Schdules" count={10} index={1} tab={tab} setTab={setTab} />
          <Tab label="Review" count={20} index={2} tab={tab} setTab={setTab} />
        </div>

        <div className="contents">
          <div className={tab === 1 ? '' : 'hidden'}>content1</div>
          <div className={tab === 2 ? '' : 'hidden'}>content2</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTabs;
