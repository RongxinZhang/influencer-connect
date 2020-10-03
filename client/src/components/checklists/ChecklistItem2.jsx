import React from "react";
import { useChecklist } from "react-checklist";

const data =  
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


export default function ChecklistItem() {
  // export default function ChecklistItem(props) { // this is for receiveing props from props.currentCampaign
  const { handleCheck, isCheckedAll, checkedItems } = useChecklist(data, {
    key: "id",
    keyType: "number"
  });

  console.log(checkedItems);      // Set(0) - handling with Set
  console.log([...checkedItems]); // []     - handling with Array
  return (
    <ul>
 
      <li>
        <input
          type="checkbox"
          onChange={handleCheck}              // 1
          checked={isCheckedAll}              // 2
        />
        <label>Check All</label>
      </li>
 
      {data.map((v, i) => (
        <li key={i}>
          <input
            type="checkbox"
            data-key={v.id}                  // 3
            onChange={handleCheck}            // 4
            checked={checkedItems.has(v.id)} // 5
          />
          <label>{v.text}</label>
        </li>
        ))}
 
        </ul>
      );
    };
  


    
   