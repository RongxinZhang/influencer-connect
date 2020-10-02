import axios from "axios";

const URL = "localhost:3000";

const getCampaignsAllUsers = function (campaignId) {
  return axios
    .get(`${URL}/campaigns/allUsers`)
    .then((data) => {
      // NOTE: PRE processing here
      return data;
    })
    .catch((err) => {
      // Always show popup component or loading compoenent here
      return err;
    });
};

const getCampaignsTasks = function (campaignId) {
  return axios
    .get(`${URL}/campaigns/${campaignId}/tasks`)
    .then((data) => {
      // NOTE: Do processing here
      return data;
    })
    .catch((err) => {});
};

export { getCampaignsAllUsers, getCampaignsTasks };
