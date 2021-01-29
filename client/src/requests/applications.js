import { axios } from "./axios";
import { nFormatter, getDaysDifference } from "../helpers/formatters";
import { authHeader } from "./auth";
const camelcaseKeys = require("camelcase-keys");

// NOTE: must add "http" in front of URL
// const BASE_URL = "http://localhost:3006";

// Set JWT Token in all request header
// axios.defaults.headers.common["x-access-token"] = authHeader();

const getCampaignsAllUsers = function (listingHash) {
  // TODO: REMOVE
  listingHash = "corcus-incasfas-W3yD0Jdy6R";

  return axios
    .get(`/api/companies/${listingHash}/applications`)
    .then((res) => {
      const resObj = res.data.creators.map((el) => {
        console.log("HERER", el);
        return {
          name: el.name,
          followerCount: nFormatter(Number(el.social_media[0].reach)),
          profilePicture: el.profile_photo,
          id: el.application.id,
          appliedDate: el.application.createdAt,
          mediaKitLink: "localhost:3006" + el.mediakit,
          // mediaKitLink: el.mediakit,
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
    .get(`/campaigns`, { headers: authHeader() })
    .then((res) => {
      const resObj = res.data.data.map((el) => {
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
    .get(`/campaigns/${campaignId}/tasks`, { headers: authHeader() })
    .then((res) => {
      // NOTE: Do processing here
      const resObj = res.data.data.map((el) => {
        return {
          description: el.description,
          status: el.status,
          taskId: el.id,
          userType: el.user_type,
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
      `/campaigns/${inputObj.campaignId}/tasks/${inputObj.taskId}`,
      { status: inputObj.status },
      { headers: authHeader() }
    )
    .then((res) => {
      // NOTE: Do processing here
      const resObj = res.data.data.map((el) => {
        return {
          description: el.description,
          status: el.status,
          taskId: el.id,
          userType: el.user_type,
          daysLeft: getDaysDifference(el.due_date),
        };
      });

      return resObj;
    })
    .catch((err) => {});
};

const getApplicationMessages = function (campaignId) {
  return axios
    .get(`/api/applications/${campaignId}/messages`, {
      headers: authHeader(),
    })
    .then((res) => {
      const resObj = res.data.map((el) => {
        return {
          id: el.public_id,
          content: el.content,
          senderId: el.sender_id,
          name: `${el.sender.first_name} ${el.sender.last_name}`,
          createdAt: el.createdAt,
        };
      });
      return resObj;
    })
    .catch((err) => {
      return err;
    });
};

const createApplicationMessage = function (campaignId, messageObj) {
  return axios
    .post(`/api/applications/${campaignId}/messages`, messageObj, {
      headers: authHeader(),
    })
    .then((res) => {
      const msg = res.data;
      return [
        {
          id: msg.public_id,
          content: msg.content,
          status: msg.status,
          senderId: msg.sender_id,
          name: `${msg.sender.firstName} ${msg.sender.lastName}`,
          createdAt: msg.createdAt,
        },
      ];
    });
};

export {
  getCampaignsAllUsers,
  getCampaigns,
  getCampaignsTasks,
  updateCampaignTask,
  getApplicationMessages,
  createApplicationMessage,
};
