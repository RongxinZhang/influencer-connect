import React, { useEffect, useState } from "react";
import { getCampaignsAllUsers } from "../../../requests/campaigns";

export default function Tasks(props) {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getCampaignsAllUsers().then((data) => {
      setCampaigns(() => {
        return data.data;
      });
    });
  }, []);

  // const campaigns = campaigns
  // const createCampaignsTemplates =

  return (
    <ul>
      {}
      <li>User 1</li>
      <li>User 2</li>
      <li>User 3</li>
      <li>User 4</li>
      <li>User 5</li>
    </ul>
  );
}
