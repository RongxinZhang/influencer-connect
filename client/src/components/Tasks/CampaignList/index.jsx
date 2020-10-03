import React, { useEffect, useState } from "react";
import { getCampaignsAllUsers } from "../../../requests/campaigns";
import CampaignItem from "./CampaignItem";

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
      return <CampaignItem key={el.campaign_id} {...el} />;
    }
  });

  return <ul>{campaignsList}</ul>;
}
