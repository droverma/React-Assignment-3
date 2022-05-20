
import React, { useEffect, useImperativeHandle, useState } from 'react';
import FilterService from '../../Services/Filter.service';
import Card from '../displayCard/DisplayCard';
const Dashboard = React.forwardRef((props, ref) => {
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        FilterService.headlines('top-headlines', 'country', 'in', 1, 10).then((res) => {
            setNewsData(res.data.articles);
        })
            .catch(err => console.log(err))
    }, []);
    useImperativeHandle(ref, () => ({
        filters() {
            filters()
        }
    }))

    const filters = () => {
        if (props.filterData.endpoints !== 'sources')
            FilterService.headlines(props.filterData.endpoints, props.filterData.param, props.filterData.queryParam, props.filterData.pageNo, props.filterData.pageSize).then(res => setNewsData(res.data.articles))
        else FilterService.sources(props.filterData.endpoints, props.filterData.pageNo, props.filterData.pageSize).then(res => setNewsData(res.data.sources))

    }
    return <React.Fragment>
        <section>
            <div class="container my-2" style={{ backgroundColor: 'whitesmoke' }}>
                <div class="col-md-12 text-center my-3">
                    <h2>Top-Headlines</h2>
                </div>
                <hr />
                <div class="row">
                    {newsData.map
                        ((news, index) => (
                            <Card
                                urlToImage={news.urlToImage}
                                title={news.title}
                                author={news.author}
                                description={news.description}
                                index={index}
                                name={news.name}
                            />
                        ))
                    }

                </div>
            </div>
        </section>
    </React.Fragment>
})
export default Dashboard;