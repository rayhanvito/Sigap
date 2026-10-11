import { useTranslations } from 'next-intl';
import { Fragment } from 'react';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const BlogTabList = () => {
  const t = useTranslations('pages.tutorial');
  const resources = t.raw('resources') as string[];
  const labels = ['Semua', ...resources];

  return (
    <Fragment>
      <TabList variant="desktop">
        {labels.map((label, index) => (
          <Tab index={index} variant="desktop" key={label}>
            {label}
          </Tab>
        ))}
      </TabList>
      <TabList variant="mobile">
        {labels.map((label, index) => (
          <Tab index={index} variant="mobile" className={index > 1 ? 'text-nowrap' : undefined} key={label}>
            {label}
          </Tab>
        ))}
      </TabList>
    </Fragment>
  );
};

export default BlogTabList;
