import React, { useEffect, useState } from "react";
import { getTasks } from "../../../requests/checklists";
import "components/Tasks/checklists";
import CheckListItem from "./CheckListItem";


export default function CheckLists(props) {
  const [tasks, setTasks] = useState([]);
  console.log("//////////////////////////////////", tasks)

  useEffect(() => {
    getTasks(props.taskId).then((data) => {
      console.log(data);
      setTasks(data);
    });
  });

  const  tasksCheckList= tasks.map(task => {
    return(
      <CheckListItem
        key= {task.id}
        text={task.text}
      />
    )
  })

  return <ul>{tasksCheckList}</ul>;
}
