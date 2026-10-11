import { Fragment } from 'react';
import { useTranslations } from 'next-intl';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const FaqTabList = () => {
  const faq = useTranslations('pages.faq');
  const privacy = useTranslations('pages.privacy');
  const terms = useTranslations('pages.terms');
  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          {faq('badge')}
        </Tab>
        <Tab index={1} variant="desktop">
          {privacy('badge')}
        </Tab>
        <Tab index={2} variant="desktop">
          {terms('badge')}
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          {faq('badge')}
        </Tab>
        <Tab index={1} variant="mobile">
          {privacy('badge')}
        </Tab>
        <Tab index={2} variant="mobile" className="text-nowrap">
          {terms('badge')}
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default FaqTabList;
