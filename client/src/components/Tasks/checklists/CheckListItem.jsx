import React from "react";
import { getTasks, getCampaignsTasks } from "../../../requests/checklists";
// import checklistHelper from "../../helper"


// import "components/checklists/CheckListItem.scss"

import classNames from "classnames";

const tasks =  
[{
  id: 1,
  check: true,
  text: 'Reply to the Email'
}, {
  id: 2,
  text: 'Send Adress Information'
}, {
  id: 3,
  check: true,
  text: "Send Shipping info"
}, {
  id: 4,
  text: 'Update my page'
}, {
  id: 5,
  text: 'Confirm product received'
}, {
  id: 6,
  text: 'Complete Product review'
}]


const props =  getTasks(tasks.id)
console.log(props, "//////////////////////////////////////////xxxxxxxxxxxxxxxxxxxxxxxxxxx")
export default function CheckListItem(props) {
  const tasks = props.tasks;
  const listItems = tasks.map(task => {
    return (
      <div  className='list' key={task.key}>
        <span>
          <input type='text' id={task.key} value={task.text} 
          onChange={(event) => {props.setUpdate(event.target.value, task.key)}}/>
        </span>

      </div>
    )
    })
  return (
    <div>
      {listItems}
    </div>
  )

 

  // const checkListItemClass = classNames ("check-list__item", 
  // {"check-list__item--selected": props.selected}
  // )
  // return (
  //   <li 
  //     className={checkListItemClass}
  //     onClick={() => props.setTask(props.name)}
  //   >
  //     <h2 className="text--regular">{props.name}</h2>
  //   </li>
  // );
}