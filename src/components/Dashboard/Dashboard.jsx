import React, { useEffect } from 'react';
import { SummaryRequest } from '../../API/Api';
import { useSelector } from 'react-redux';

const Dashboard = () => {

 useEffect(() => {
  SummaryRequest();
 }, [])

 const SummaryList = useSelector((state) => state.summary.value)


 return (
  <div className="container">
   <div className="row">
    {
     SummaryList.map((item, i) =>
      <div className="col-12 col-lg-3 col-sm-6 col-md-3 p-2">
       <div className="card h-100">
        <div className="card-body">
         <h5 className='animated fadeInUp'>{item._id}</h5>
         <h6 className='text-secondary animated fadeInUp'>{item.sum}</h6>
        </div>
       </div>
      </div>
     )
    }
   </div>
  </div>
 );
};

export default Dashboard;