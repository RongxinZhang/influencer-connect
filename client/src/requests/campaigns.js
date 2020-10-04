import axios from "axios";
import { nFormatter } from "../helpers/formatters";

// NOTE: must add "http" in front of URL
const BASE_URL = "http://localhost:3000";

const getCampaignsAllUsers = function (campaignId) {
  return axios
    .get(`${BASE_URL}/campaigns/allUsers`)
    .then((res) => {
      const resObj = res.data.data.map((el) => {
        return {
          name: `${el.first_name} ${el.last_name}`,
          followerCount: nFormatter(
            Number(el.instagram_followers) +
              Number(el.facebook_followers) +
              Number(el.youtube_followers)
          ),
          profilePicture: el.profile_url,
          campaignId: el.campaign_id,
          currentCampaign: el.campaign_name,
        };
      });
      return resObj;
    })
    .catch((err) => {
      // Always show popup component or loading compoenent here
      return [];
    });
};

const getCampaignsTasks = function (campaignId) {
  return axios
    .get(`${BASE_URL}/campaigns/${campaignId}/tasks`)
    .then((data) => {
      // NOTE: Do processing here
      return data;
    })
    .catch((err) => {});
};

const getCampaignMessages = function (campaignId) {
  return axios
    .get(`${BASE_URL}/campaigns/${campaignId}/messages`)
    .then((data) => {
      return data.data.data;
    })
    .catch((err) => {
      return err;
    });
};

export { getCampaignsAllUsers, getCampaignsTasks, getCampaignMessages };
