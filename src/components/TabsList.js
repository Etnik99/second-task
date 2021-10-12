import style from './TabsList.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ListCard from './ListCard';
import { useState } from 'react';
import DropList from './FAQ';

const CARD_DATA = [
    {
        domain: '.COM',
        price: '$5.99/yr',
        description: 'instead of 10.99/yr'
    },
    {
        domain: '.AL',
        price: '$55.99/yr',
        description: 'instead of 10.99/yr'
    },
    {
        domain: '.NET',
        price: '$7.99/yr',
        description: 'instead of 10.99/yr'
    },
    {
        domain: '.HEALTH',
        price: '$7.99/yr',
        description: 'instead of 10.99/yr'
    },
    {
        domain: '.CO.UK',
        price: '$3.99/yr',
        description: 'instead of 10.99/yr'
    },
    {
        domain: '.ORG',
        price: '$15.99/yr',
        description: 'instead of 10.99/yr'
    },
    {
        domain: '.CO',
        price: '$26.33/yr',
        description: 'instead of 10.99/yr'
    },
    {
        domain: '.SEA',
        price: '$26.33/yr',
        description: 'instead of 10.99/yr'
    },

];

function TabsList() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className={style.container}>
            <Tabs>

                <TabList className={style.tabList}>

                    <Tab
                        className={toggleState === 1 ? style.activeTabs : style.tabItem}
                        onClick={() => toggleTab(1)}
                    >Domains</Tab>
                    <Tab className={toggleState === 2 ? style.activeTabs : style.tabItem}
                        onClick={() => toggleTab(2)}
                    >Web Hosting</Tab>
                    <Tab className={toggleState === 3 ? style.activeTabs : style.tabItem}
                        onClick={() => toggleTab(3)}
                    >Dedicatet Servers</Tab>
                    <Tab className={toggleState === 4 ? style.activeTabs : style.tabItem}
                        onClick={() => toggleTab(4)}
                    >Virtual Cloud Servers</Tab>
                    <Tab className={toggleState === 5 ? style.activeTabs : style.tabItem}
                        onClick={() => toggleTab(5)}
                    >WordPress Hosting</Tab>
                    <Tab className={toggleState === 6 ? style.activeTabs : style.tabItem}
                        onClick={() => toggleTab(6)}
                    >Email Hosting</Tab>
                    <Tab className={toggleState === 7 ? style.activeTabs : style.tabItem}
                        onClick={() => toggleTab(7)}
                    >VPS Hosting Server</Tab>
                    <Tab className={toggleState === 8 ? style.activeTabs : style.tabItem}
                        onClick={() => toggleTab(8)}
                    >Free Hosting</Tab>


                </TabList>


                <TabPanel>
                    <div>
                        <ListCard lists={CARD_DATA} />
                    </div>
                </TabPanel>
                <TabPanel className={toggleState === 2 ? style.activeContent : style.content}>
                    <h2>Web Hosting</h2>
                </TabPanel>
                <TabPanel>
                    <div className={toggleState === 3 ? style.activeContent : style.content}>
                        <h2>Dedicatet Servers</h2>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className={toggleState === 4 ? style.activeContent : style.content}>
                        <h2>Virtual Cloud Servers</h2>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className={toggleState === 5 ? style.activeContent : style.content}>
                        <h2>Domains</h2>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className={toggleState === 6 ? style.activeContent : style.content}>
                        <h2>WordPress Hosting</h2>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className={toggleState === 7 ? style.activeContent : style.content}>
                        <h2>Email Hosting</h2>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className={toggleState === 8 ? style.activeContent : style.content}>
                        <h2>VPS Hosting Server</h2>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className={toggleState === 8 ? style.activeContent : style.content}>
                        <h2>Free Hosting</h2>
                    </div>
                </TabPanel>
            </Tabs>



        </div>


    );


}



export default TabsList;