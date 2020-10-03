import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import CampaignItem from "components/Tasks/CampaignList/CampaignItem";

const campaign = {
  campaignId: 1,
  name: "Sylvia Palmer",
  profilePicture: "https://i.imgur.com/LpaY82x.png",
  followerCount: "2.2K",
  campaignName: "New Campaign",
  campaignName: "Submitting content",
};

storiesOf("InterviewerListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Campaign", () => <CampaignItem {...campaign} />);