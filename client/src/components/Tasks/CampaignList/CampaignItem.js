import React from "react";
import "./CampaignList.scss";
import classNames from "classnames"

const CampaignItem = function (props) {
  // console.log("this is CI.js props: ", props);
  const campaignListItemClass = classNames(
    "campaign-list_item", {
      "campaign-list__item--selected": <p>Home</p>,
      "campaign-list__item--selected": <p>My Tasks</p>
    }
  )
  return (
    <li
      classNames={campaignListItemClass}
      className="campaign-list-item"
      onClick={() => props.onClick(props.campaignId)}
      data-campaign-id={props.campaignId}
    >
      <section
        className="campaign-list-picture"
        style={{
          backgroundImage: "url(" + props.profilePicture + ")",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></section>
      <section className="campaign-list-user">
        <div className="campaign-list-user-name">
          <span>{props.name}</span>
          <span>{props.followerCount}</span>
        </div>
        <div>{props.currentCampaign}</div>
        {/* <div>{props.currentTask}</div> */}
      </section>
    </li>
  );
};
export default CampaignItem;


// const dayListItemClass = classNames ("day-list__item", 
//   {"day-list__item--selected": props.selected,
//    "day-list__item--full": props.full}
//   )
//   return (
//     <li 
//       className={dayListItemClass}
//       onClick={() => props.setDay(props.name)}
//     >
//       <h2 className="text--regular">{props.name}</h2>
//       <h3 className="text--light">{formatSpots()}</h3>
//     </li>
//   );
// }