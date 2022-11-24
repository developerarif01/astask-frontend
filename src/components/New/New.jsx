/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { AiOutlineCalendar, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { TaskListByStatus } from '../../API/Api';
import { useSelector } from 'react-redux';
import { DeleteTask } from '../../helper/DeleteAlert';
import { UpdateTask } from '../../helper/UpdateAlert';


const New = () => {

  useEffect(() => {
    TaskListByStatus("New");
  }, [])

  const NewList = useSelector((state) => state.task.New)

  const DeleteItem = (id) => {
    DeleteTask(id).then((result) => {
      if (result === true) {
        TaskListByStatus("New");
      }
    });
  }


  const StatusChange = (id, status) => {
    UpdateTask(id, status)
  }


  return (
    <Fragment>
      <Container fluid={true} className="content-body">
        <div className="row p-0 m-0">
          <div className="col-12 col-md-6 col-lg-8 px-3">
            <h5>New Task </h5>
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-2 float-end">
            <div className="row">
              <div className="col-8">
                <input className="form-control w-100" />
              </div>
              <div className="col-4">
                <button className="btn btn-primary w-100">Search</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row p-0 m-0">

          {
            NewList.map((item, i) =>

              <div className="col-12 col-lg-4 col-md-6 col-md-4 p-2">
                <div className="card h-100">
                  <div className="card-body">
                    <h6 className="animated fadeInUp">{item.title}</h6>
                    <p className="animated fadeInUp">{item.description}</p>
                    <p className="m-0 animated fadeInUp p-0">
                      <AiOutlineCalendar /> {item['createDate']}
                      <a onClick={StatusChange.bind(this, item._id, item.status)} className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                      <a onClick={(DeleteItem.bind(this, item._id))} className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                      <a className="badge float-end bg-info">{item.status}</a>
                    </p>
                  </div>
                </div>
              </div>
            )}
        </div>



      </Container>
    </Fragment>
  );
};

export default New;