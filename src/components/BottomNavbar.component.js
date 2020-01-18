import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BusinessIcon from '@material-ui/icons/Business';
import EventIcon from '@material-ui/icons/Event';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import PeopleIcon from '@material-ui/icons/People';

export default function ButtonAppBar() {

  return (
    <div className='navigation'>
      <ul>
        <li> <a href='/'> <span><DashboardIcon /></span> Dashboard </a> </li>
        <li> <a href='/'> <span><PeopleIcon /></span> Users </a> </li>
        <li> <a href='/'> <span><BusinessIcon /></span> Prospects </a> </li>
        <li> <a href='/'> <span><EventIcon /></span> Appointments </a> </li>
        <li> <a href='/'> <span><ShowChartIcon /></span> Reports </a> </li>
      </ul>
    </div>
  );
}