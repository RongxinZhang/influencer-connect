import React from "react";

import "components/checklists/CheckListItem.scss";

import classNames from "classnames";



export default function CheckListItem(props) {
 

  const checkListItemClass = classNames ("check-list__item", 
  {"check-list__item--selected": props.selected}
  )
  return (
    <li 
      className={checkListItemClass}
      onClick={() => props.setTask(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2>
    </li>
  );
}