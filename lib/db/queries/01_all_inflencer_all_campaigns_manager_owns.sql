select * from influencers
	inner join campaigns on influencers.id = campaigns.influencer_id
	inner join campaign_details on campaign_details.id = campaigns.campaign_detail_id
	inner join brands on brands.id = campaign_details.brand_id
	inner join brand_managers on brand_managers.brand_id = brands.id
	inner join users on users.id = brand_managers.user_id
where users.id=2
  