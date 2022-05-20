import React, { useRef, useState } from "react";
import Dashboard from './Components/dashboard/Dashboard';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
const AppRoute = () => {
    const myRef = useRef()
    const [filterData, setFilterData] = useState({})
    const filter = async (data) => {
        await setFilterData({ endpoints: data.endpoints, param: data.param, queryParam: data.queryParam, pageNo: data.pageNo, pageSize: data.pageSize })
        myRef.current.filters()
    }

    return (
        <React.Fragment>
            <Header filter={filter} />
            <Dashboard filterData={filterData} ref={myRef} />
            <Footer />
        </React.Fragment>
    );
}

export default (AppRoute);
