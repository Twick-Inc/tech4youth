import React from 'react';
import SearchWidget from './SearchWidget';
import RecentPostsWidget from './RecentPostsWidget';
import RecentCommentsWidget from './RecentCommentsWidget';
import CategoriesWidget from './CategoriesWidget';
import PopularTagsWidget from './PopularTagsWidget';
import HelpWidget from './HelpWidget';

const Sidebar = () => {
  return (
    <aside className="lg:w-1/3">
      <SearchWidget />
      <RecentPostsWidget />
      <RecentCommentsWidget />
      <CategoriesWidget />
      <PopularTagsWidget />
      <HelpWidget />
    </aside>
  );
};

export default Sidebar;

