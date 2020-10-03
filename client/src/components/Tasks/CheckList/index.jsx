import React, { useEffect, useState } from "react";

export default function CheckList(props) {
  useEffect(() => {
    console.log("CHECKLIST: Updated", props.currentCampaign);
  }, [props.currentCampaign]);
  // const handleClick = function (input) {
  //   createCampaignTasks();
  // };

  // const tasks = [...props.days]
  return (
    <ul className="campaign-list">
      <li>Checklist 1</li>
      <li>Checklist 2</li>
      <li>Checklist 3</li>
      <li>Checklist 4</li>
      <li>Checklist 5</li>
    </ul>
  );
}
