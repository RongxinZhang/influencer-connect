import React, { useEffect, useState } from "react";
import { getTasks } from "../../requests/checklists";
import "components/checklists";


export default function CheckList(props) {
  const [tasks, setTasks] = useState([]);
  console.log(tasks)
//   // all state is kept here.
//   // Module: styled-componenets inside the componenet file.
//   // Everything is kept inside component

  useEffect(() => {
    getTasks().then((data) => {
      console.log(data);
      setTasks(data);
    });
  });

//   // const handleClick = function (input) {
//   //   createCampaignTasks();
//   // };

//   // const tasks = [...props.days]
//   return <ul>{tasks}</ul>;
}
