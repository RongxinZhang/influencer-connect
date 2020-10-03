import React from "react";

import CheckListItem from "components/CheckListItem";

import "components/checklists/CheckListItem.scss";


import classNames from "classnames";

// const data =  
// [{
//   id: 1,
//   check: true,
//   text: 'Reply to the Email'
// }, {
//   id: 2,
//   text: 'Send Adress Information'
// }, {
//   id: 3,
//   check: true,
//   text: "Send Shipping info"
// }, {
//   id: 4,
//   text: 'Update my page'
// }, {
//   id: 5,
//   text: 'Confirm product received'
// }, {
//   id: 6,
//   text: 'Complete Product review'
// }]



export default function CheckList(props) {
  const checkListClass = props.tasks.map(task => 
    <CheckListItem 
        key = {task.id}
        campaignId = {task.campaignId}
        name={task.name} 
        description={task.description}
        status = {task.status}
        start = {task.startDate}
        user = {task.userType}
        selected={task.name === props.task}
        setTask={props.setTask}  
      />
  )
  return (
    <ul>
      {checkListClass}
    </ul>
  );
    
}