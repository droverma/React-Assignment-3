
import React, { useState } from 'react';
const Filter = (props) => {
    const [endpoints, setEndPoints] = useState('');
    const [param, setParam] = useState('');
    const [queryParam, setQueryParam] = useState('');
    const [pageNo, setPageNo] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [list, setList] = useState([]);

    const handleEvent = (e) => {
        debugger
        const { name, value } = e.target
        switch (name) {
            case 'endpoints':
                setEndPoints(value)
                break;
            case 'param':
                setParam(value)
                break;
            case 'queryParam':
                setQueryParam(value)
                break;
            case 'q':
                setParam(name)
                setQueryParam(value)
                break;
            case 'page_num':
                setPageNo(value)
                break;
            case 'page_size':
                setPageSize(value)
                break;
            default: setPageNo(1);
        }
        if (name === 'param')
            if (value === 'country')
                setList([{ name: "ae" }, { name: 'in' }, { name: "ar" }, { name: 'at' },
                {
                    name: "be"
                }, { name: 'ca' }, { name: "de" }, { name: 'eg ' }])
            else
                setList([{ name: 'business' }, { name: 'entertainment' }, { name: 'general' }, { name: 'health' }, { name: 'science' }, { name: 'sports' }])

    }
    const filter = (e) => {
        e.preventDefault();
        var data = { endpoints: endpoints, param: param, queryParam: queryParam, pageNo: pageNo, pageSize: pageSize }
        props.filter(data)
    }
    return <div className='container mt-3' style={{ backgroundColor: "whitesmoke" }}>
        <div className='row'>
            <div className='col-md-12 text-center'>
                {/* <div className='col'>
                <div className='col-md-3 mx-5'>
                    <label>Endpoints</label>
                    <select class="form-control" name='endpoints' onChange={handleEvent}>
                        <option value="">select</option>
                        <option value={'top-headlines'}>top-headlines</option>
                        <option value={'everything'}>everything</option>
                        <option value={'sources'}>sources</option>
                    </select>
                </div>

                {endpoints === 'top-headlines' ?
                    <>
                        <div className='col-md-3'>
                            <label>Param</label>
                            <select name='param' class="form-control" onChange={handleEvent}>
                                <option value="">select</option>
                                <option value={'category'}>category</option>
                                <option value={'country'}>country</option>
                            </select>
                        </div>
                        <div className='col-md-3'>
                            <label>Value</label>
                            <select name='queryParam' class="form-control" onChange={handleEvent}>
                                <option value="">select</option>
                                {list.map(value => {
                                    return <option value={value.name}>{value.name} {console.log(value.name)}</option>

                                })}
                            </select>
                        </div>
                    </>
                    : endpoints === 'everything' ?
                        <input type="text" class="form-control" name="search_text" placeholder='Search' onChange={handleEvent} />
                        : null}
                <button className='btn btn-primary' onClick={filter}>Filter</button>
            </div> */}
                <form class="form-inline mx-5">
                    <div class="col-md-12 text-center">
                        <h4>Filter News</h4>
                    </div>
                    <div class="form-row">
                        <div class="form-group my-1 mr-sm-2">
                            <select class="form-control" name='endpoints' onChange={handleEvent}>
                                <option value="">Select Endpoints</option>
                                <option value={'top-headlines'}>top-headlines</option>
                                <option value={'everything'}>everything</option>
                                <option value={'sources'}>sources</option>
                            </select>
                        </div>
                        {endpoints === 'top-headlines' ?
                            <>
                                <div class="form-group my-1 mr-sm-2">
                                    <select name='param' class="form-control" onChange={handleEvent}>
                                        <option value="">Select Param</option>
                                        <option value={'category'}>category</option>
                                        <option value={'country'}>country</option>
                                    </select>
                                </div>
                                <div class="form-group my-1 mr-sm-2">
                                    <select name='queryParam' class="form-control" onChange={handleEvent}>
                                        <option value="">Select Value</option>
                                        {list.map(value => {
                                            return <option value={value.name}>{value.name} {console.log(value.name)}</option>

                                        })}
                                    </select>
                                </div>
                            </>
                            : endpoints === 'everything' ?
                                <div class="form-group my-1 mr-sm-2">
                                    <input type="text" class="form-control" name="q" placeholder='Search' onChange={handleEvent} />

                                </div>
                                : null}
                        <div class="form-group my-1 mr-sm-2">
                            <input type="text" class="form-control" name="page_num" placeholder='Enter Page No.' onChange={handleEvent} />

                        </div>
                        <div class="form-group my-1 mr-sm-2">
                            <input type="text" class="form-control" name="page_size" placeholder='Enter Page Size' onChange={handleEvent} />

                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary" onClick={filter} disabled={endpoints === ''}>Filter</button>
                </form>
            </div>
        </div>
        <hr />

    </div>


}
export default Filter;