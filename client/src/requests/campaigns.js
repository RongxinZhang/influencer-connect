import axios from "axios";

// NOTE: must add "http" in front of URL
const BASE_URL = "http://localhost:3000";

const getCampaignsAllUsers = function (campaignId) {
  return axios
    .get(`${BASE_URL}/campaigns/allUsers`)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      // Always show popup component or loading compoenent here
      return err;
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

export { getCampaignsAllUsers, getCampaignsTasks };
