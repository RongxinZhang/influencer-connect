INSERT INTO users
  (first_name, last_name, email, password, phone)
VALUES
  ('Balky', 'Jaswal', 'balkaranjaswal@gmail.com', 'password', '4031231234');
INSERT INTO users
  (first_name, last_name, email, password, phone)
VALUES
  ('Rongxin', 'Zhang', 'RongxinZhang@gmail.com', 'password', '6041231234');
INSERT INTO users
  (first_name, last_name, email, password, phone)
VALUES
  ('Favour', 'Ogboruche', 'fogboruche@yahoo.com', 'password', '4035675678');






INSERT INTO brands
  (name, description, logo, city, province, country, website, instagram, facebook, youtube)
VALUES
  ('Nike', 'Nike Description', 'logo image', 'Beaverton', 'Oregon', 'United States of America', 'https://www.nike.com/ca/', 'https://www.instagram.com/nike/?hl=en', 'https://www.facebook.com/nike/', 'https://www.youtube.com/user/nike');
INSERT INTO brands
  (name, description, logo, city, province, country, website, instagram, facebook, youtube)
VALUES
  ('Coca-Cola', 'Coca-Cola Description', 'logo image', 'Atlanta', 'Georgia', 'United States of America', 'https://www.coca-cola.com/', 'https://www.instagram.com/cocacola/?hl=en', 'https://www.facebook.com/Coca-Cola/', 'https://www.youtube.com/user/cocacola');


/*Rongxin is the brand manager of Nike*/
INSERT INTO brand_managers
  (user_id, brand_id, is_admin)
VALUES
  (2, 1, true);
/*Favour is the brand manager of Coca-Cola*/
INSERT INTO brand_managers
  (user_id, brand_id, is_admin)
VALUES
  (3, 2, true);



INSERT INTO influencers
  (first_name, last_name, description, profile_url, street, city, province, country, instagram_url, youtube_url, facebook_url)
VALUES 
  ('Balky', 'Jaswal', 'Balkys description', 'profile url', 'haha street', 'calgary', 'alberta', 'canada', 'https://www.instagram.com/balkaranj/?hl=en', 'facebook url', 'youtube url');
INSERT INTO influencers
  (first_name, last_name, description, profile_url, street, city, province, country, instagram_url, youtube_url, facebook_url)
VALUES 
  ('Cristiano', 'Ronaldo', 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for Serie A club Juventus and captains the Portugal national team.', 'https://www.cristianoronaldo.com/#cr7', 'haha street', 'Hospital Dr. Nelio Mendonca', 'Funchal', 'Portugal', 'https://www.instagram.com/cristiano/?hl=en', 'https://www.facebook.com/Cristiano', 'https://www.youtube.com/user/CristianoRonaldo');
INSERT INTO influencers
  (first_name, last_name, description, profile_url, street, city, province, country, instagram_url, youtube_url, facebook_url)
VALUES 
  ('Dwayne', 'Johnson', 'Dwayne Douglas Johnson, also known by his ring name the Rock, is an American-Canadian actor, producer, businessman, retired professional wrestler, and former American football and Canadian football player.', 'profile url', 'haha street', 'Hayward', 'California', 'United States of America', 'https://www.instagram.com/therock/?hl=en', 'https://www.facebook.com/DwayneJohnson/', 'https://www.youtube.com/user/therock');



/*Nike Campaign*/
INSERT INTO campaign_details
  (name, brand_id)
VALUES
  ('Nike Athlete', 1);
/*Coca-Cola Campaign*/
INSERT INTO campaign_details
  (name, brand_id)
VALUES
  ('Coca-Cola Sponsor', 2);



/*Ronaldo accepts Nike Campaign*/
INSERT INTO campaigns
  (influencer_id, campaign_details_id, status)
VALUES
  (2, 1, 'Accepted');
/*Dwayne accepts Coca-Cola Campaign*/
INSERT INTO campaigns
  (influencer_id, campaign_details_id, status)
VALUES
  (3, 2, 'Accepted');



INSERT INTO tasks
  (campaign_id, user_type, status, description, start_date)
VALUES
  (2, 'influencer', 'on going', 'Nike Task Description', '2020-09-26');
INSERT INTO tasks
  (campaign_id, user_type, status, description, start_date)
VALUES
  (1, 'influencer', 'on going', 'Coca-Cola Task Description', '2020-09-26');



INSERT INTO messages
  (content, sender_id, receiver_id, campaign_id, status, created_at)
VALUES 
  ('message content', 2, 2, 1, 'accepted', '2020-09-26');
