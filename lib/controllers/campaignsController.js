const db = require("./db");

const getAllUsers = function () {
  const getInfluencersSQL = `select influencers.first_name, influencers.last_name, campaigns.id as campaign_id from influencers
    inner join campaigns on influencers.id = campaigns.influencer_id
    inner join campaign_details on campaign_details.id = campaigns.campaign_detail_id
    inner join brands on brands.id = campaign_details.brand_id
    inner join brand_managers on brand_managers.brand_id = brands.id
    inner join users on users.id = brand_managers.user_id
    where users.id=$1`;

  const getInfluencersSQLValue = ["2"];

  db.query(getInfluencersSQL, getInfluencersSQLValue)
    .then((res) => {
      console.log("getInfluencersSQL");
      console.log(res.rows);
    })
    .catch((err) => console.error(err.stack));
};

const getAllTasks = function () {
  const getTasksSQL = `select * from tasks
  inner join campaigns on campaigns.id = tasks.campaign_id
  where campaigns.id = $1 AND tasks.user_type = $2`;

  const getTasksSQLValues = ["2", "influencer"];

  db.query(getTasksSQL, getTasksSQLValues)
    .then((res) => {
      console.log("getTasksSQL");
      console.log(res.rows);
    })
    .catch((err) => console.error(err.stack));
};