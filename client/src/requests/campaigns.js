import axios from "axios";
import { nFormatter, getDaysDifference } from "../helpers/formatters";

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

const getCampaigns = function () {
  return axios
    .get(`${BASE_URL}/campaigns`)
    .then((res) => {
      const resObj = res.data.data.map((el) => {
        console.log("NOW", el);
        return {
          name: el.name,
          id: el.id,
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
    .then((res) => {
      // NOTE: Do processing here
      const resObj = res.data.data.map((el) => {
        return {
          description: el.description,
          status: el.status,
          taskId: el.id,
          daysLeft: getDaysDifference(el.due_date),
        };
      });

      return resObj;
    })
    .catch((err) => {});
};

const updateCampaignTask = function (inputObj) {
  return axios
    .post(
      `${BASE_URL}/campaigns/${inputObj.campaignId}/tasks/${inputObj.taskId}`,
      { status: inputObj.status }
    )
    .then((res) => {
      // NOTE: Do processing here
      const resObj = res.data.data.map((el) => {
        return {
          description: el.description,
          status: el.status,
          taskId: el.id,
          daysLeft: getDaysDifference(el.due_date),
        };
      });

      return resObj;
    })
    .catch((err) => {});
};

const getCampaignMessages = function (campaignId) {
  return axios
    .get(`${BASE_URL}/campaigns/${campaignId}/messages`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return err;
    });
};

export {
  getCampaignsAllUsers,
  getCampaigns,
  getCampaignsTasks,
  updateCampaignTask,
  getCampaignMessages,
};
