import React from "react";

import CheckListItem from "components/CheckListItem";

import "components/checklists/CheckListItem.scss";

import classNames from "classnames";



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