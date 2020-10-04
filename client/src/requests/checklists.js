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


const getTasks = function (taskId) {
  getCampaignsTasks(campaignId)
  return axios
    .get(`${BASE_URL}/campaigns/${campaignId}/tasks/${taskId}`)
    .then((data) => {
      // NOTE: Do processing here
      return data;
    })
    .catch((err) => {});
};


export { getCampaignsAllUsers, getCampaignsTasks, getTasks};