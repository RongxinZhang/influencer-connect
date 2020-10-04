import React, { useEffect, useState } from "react";
import { getCampaignsAllUsers } from "../../../requests/campaigns";
import CampaignItem from "./CampaignItem";

import "./CampaignList.scss";

export default function Tasks(props) {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaignsAllUsers().then((data) => {
      setCampaigns(() => {
        return data;
      });
    });
  }, []);

  const campaignsList = campaigns.map((el) => {
    if (el) {
      return (
        <CampaignItem
          onClick={(id) =>
            console.log("id in campaignList:", id) || props.onClick(id)
          }
          key={el.campaignId}
          {...el}
        />
      );
    }
  });

  return (
    <section id="campaign-list">
      <ul>{campaignsList}</ul>
    </section>
  );
}
