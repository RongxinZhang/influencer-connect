import React, { useEffect, useState } from "react";
import { getCampaignsAllUsers } from "../../../requests/campaigns";
import CampaignItem from "./CampaignItem";

export default function Tasks(props) {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaignsAllUsers().then((data) => {
      setCampaigns(() => {
        return data.data;
      });
    });
  }, []);

  const campaignsList = campaigns.map((campaign) => {
    if (campaign) {
      const inputProps = {
        campaignId: campaign.campaign_id,
        name: `${campaign.first_name} ${campaign.last_name}`,
      };
      return <CampaignItem onClick={(id) => console.log("id in campaignList:", id) || props.onClick(id)} key={campaign.campaign_id} {...inputProps} />;
    }
  });

  return <ul>{campaignsList}</ul>;
}
