import TabContent from '../ui/tab/TabContent';
import GeneralTab from './GeneralTab';
import PrivacyTab from './PrivacyTab';
import TermsConditionsTab from './TermsConditionsTab';

const data = [
  {
    id: 1,
    tabTitle: 'General',
    tabContent: <GeneralTab />,
  },
  {
    id: 2,
    tabTitle: 'Privacy',
    tabContent: <PrivacyTab />,
  },
  {
    id: 3,
    tabTitle: 'Terms & Conditions',
    tabContent: <TermsConditionsTab />,
  },
];

const FaqTabContent = () => {
  return (
    <>
      {data.map((item, index) => (
        <TabContent key={item.id} index={index}>
          {item.tabContent}
        </TabContent>
      ))}
    </>
  );
};

export default FaqTabContent;
