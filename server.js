const ENV = require('./lib/environment');
const db = require("./lib/db");

const getInfluencersSQL = `select influencers.first_name, influencers.last_name, campaigns.id as campaign_id from influencers
inner join campaigns on influencers.id = campaigns.influencer_id
inner join campaign_details on campaign_details.id = campaigns.campaign_detail_id
inner join brands on brands.id = campaign_details.brand_id
inner join brand_managers on brand_managers.brand_id = brands.id
inner join users on users.id = brand_managers.user_id
where users.id=$1`

const getInfluencersSQLValue = ['2']

db.query(getInfluencersSQL, getInfluencersSQLValue)
  .then(res => {
    console.log("getInfluencersSQL")
    console.log(res.rows)
  })
  .catch(err => console.error(err.stack))

const getTasksSQL = `select * from tasks
  inner join campaigns on campaigns.id = tasks.campaign_id
  where campaigns.id = $1 AND tasks.user_type = $2`

const getTasksSQLValues = ['2', 'influencer']

db.query(getTasksSQL, getTasksSQLValues)
  .then(res => {
    console.log("getTasksSQL")
    console.log(res.rows)
  })
  .catch(err => console.error(err.stack))



//started here//////////////////////////////////////////////////////////////////////////////////////////////////

const deleteInfluencerFromCampaign = function(compaign_id, inflencers_id) {
  const querryString =
    (`
      DELETE FROM campaigns
      WHERE campaigns.id = $1 AND campaigns.influencer_id = $2;
    `)
    return pool.query(querryString, [compaign_id, inflencers_id])
    .then (res => {
      return res.rows;
    })
    .catch(err => {
      console.log('Error:', err.stack)
    });
};
exports.deleteInfluencerFromCampaign = deleteInfluencerFromCampaign;


const updateTask =  function(status, start_date, description, id) {
    const querryString =
    (`
    UPDATE tasks
    SET status = $1, start_date = $2, description = $3
    WHERE tasks.id = $4;
    `)
  
    return pool.query(querryString, [status, start_date, description, id])
      .then (res => {
        return res.rows;
      })
      .catch(err => {
        console.log('Error:', err.stack)
      });
  };
exports.updateTask = updateTask;


const createAtask =  function(campaign_id, user_type, status, description, start_date) {
  const querryString =
  (`
    INSERT INTO tasks (campaign_id, user_type, status, description, start_date)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `)

  return pool.query(querryString, [campaign_id, user_type, status, description, start_date])
    .then (res => {
      return res.rows;
    })
    .catch(err => {
      console.log('Error:', err.stack)
    });
};
exports.createAtask = createAtask;


const getMessagesForEachCampaign = function(id) {

  let querryString =
  (`
    SELECT *
    FROM messages
    JOIN campaigns ON campaign_id = campaigns.id
    WHERE campaigns.id = $1
  `)

  return pool.query(querryString, [id])
    .then(res => {
      return res.rows;
    })
    .catch (err => {
      console.log('Error:', err.stack)
    });
};

exports.getMessagesForEachCampaign = getMessagesForEachCampaign;


const createAMessageForEachCampaign = function(content, sender_id, receiver_id, campaign_id, status, created_at) {

  let querryString =
  (`
    INSERT INTO messages (content, sender_id, receiver_id, campaign_id, status, created_at)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `)

  return pool.query(querryString, [content, sender_id, receiver_id, campaign_id, status, created_at])
    .then(res => {
      return res.rows;
    })
    .catch (err => {
      console.log('Error:', err.stack)
    });
};

exports.createAMessageForEachCampaign = createAMessageForEachCampaign;
