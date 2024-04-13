import React from "react";
import Cards from "./_components/cards";
import SalesChart from "./_components/sales-chart";
import RecentsClientsList from "./_components/recents-clients-list";
import RecentsCars from "./_components/recents-cars";

const Home = () => {
    return (
        <div>
            <div className='col-start-1 col-span-6'>
                <Cards />
            </div>
            <div className='col-start-1 col-span-6'>
                <RecentsClientsList />
            </div>
            <div className='col-start-1 col-span-6'>
                <SalesChart />
            </div>
            <div className='col-start-1 col-span-6'>
                <RecentsCars />
            </div>
        </div>
    );
};

export default Home;
