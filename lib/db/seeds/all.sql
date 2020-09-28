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
INSERT INTO users
  (first_name, last_name, email, password, phone)
VALUES
  ('John', 'Bazinga', 'JohnBazinga@yahoo.com', 'password', '1233211234');
INSERT INTO users
  (first_name, last_name, email, password, phone)
VALUES
  ('Hercules', 'Alcaeus', 'hercPower@gmail.com', 'password', '6756784035');
INSERT INTO users
  (first_name, last_name, email, password, phone)
VALUES
  ('Mario', 'Brother', 'MarioRules@mushroomkingdom.com', 'princess', '7454328765');
INSERT INTO users
  (first_name, last_name, email, password, phone)
VALUES
  ('Ducky', 'goldsmith', 'duckyDuck@gmail.com', 'password', '4056567837');
INSERT INTO users
  (first_name, last_name, email, password, phone)
VALUES
  ('Yeti', 'Snowball', 'yetiinthemountain@gmail.com', 'cold', '4678053567');


INSERT INTO brands
  (name, description, logo, city, province, country, website, instagram, facebook, youtube)
VALUES
  ('Nike', 'Nike Description', 'logo image', 'Beaverton', 'Oregon', 'United States of America', 'https://www.nike.com/ca/', 'https://www.instagram.com/nike/?hl=en', 'https://www.facebook.com/nike/', 'https://www.youtube.com/user/nike');
INSERT INTO brands
  (name, description, logo, city, province, country, website, instagram, facebook, youtube)
VALUES
  ('Coca-Cola', 'Coca-Cola Description', 'logo image', 'Atlanta', 'Georgia', 'United States of America', 'https://www.coca-cola.com/', 'https://www.instagram.com/cocacola/?hl=en', 'https://www.facebook.com/Coca-Cola/', 'https://www.youtube.com/user/cocacola');
INSERT INTO brands
  (name, description, logo, city, province, country, website, instagram, facebook, youtube)
VALUES
  ('Mcdonalds Corporation', 'McDonalds Corporation is an American fast food company, founded in 1940', 'logo image', 'San Bernardino', 'California', 'United States of America', 'https://www.mcdonalds.com/us/en-us.html', 'https://www.instagram.com/mcdonalds/?hl=en', 'https://www.facebook.com/McDonalds/', 'https://www.youtube.com/channel/UCRI5ZedBs0_BYY4PlxD6m7w');
INSERT INTO brands
  (name, description, logo, city, province, country, website, instagram, facebook, youtube)
VALUES
  ('OVO Sound', 'OVO Sound is a Toronto-based Canadian record label, founded in 2012 by hip hop artist Drake', 'logo image', 'Toronto', 'Ontario', 'Canada', 'https://www.ovosound.com/', 'https://www.instagram.com/welcomeovo/', 'https://www.facebook.com/WelcomeOVO/', 'https://www.youtube.com/channel/UC3rQdmWlTWyk_dGRHuV0_GA');
INSERT INTO brands
  (name, description, logo, city, province, country, website, instagram, facebook, youtube)
VALUES
  ('Square Enix America', 'The Square Enix Holdings Company, Ltd. is a Japanese video game holding company, best known for its Final Fantasy, Dragon Quest, and Kingdom Hearts role-playing video game franchises.', 'logo image', 'El Segundo', 'California', 'United States of America', 'https://square-enix-games.com/en_US/home2', 'https://www.instagram.com/squareenixusa/?hl=en', 'https://www.facebook.com/SquareEnixProductsNA/', 'https://www.youtube.com/channel/UCA5SLTAVA6unn1M-6lbo1NA');
INSERT INTO brands
  (name, description, logo, city, province, country, website, instagram, facebook, youtube)
VALUES
  ('Neutrogena', 'Neutrogena is an American brand of skin care, hair care and cosmetics which is headquartered in Los Angeles, California.', 'logo image', 'Los Angeles', 'California', 'United States of America', 'https://www.neutrogena.ca/', 'https://www.instagram.com/neutrogena/?hl=en', 'https://www.facebook.com/neutrogena/', 'https://www.youtube.com/channel/UCNGr_3LSXp3KL55jZW7Pvhg');

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
INSERT INTO brand_managers
  (user_id, brand_id, is_admin)
VALUES
  (4, 3, true);
INSERT INTO brand_managers
  (user_id, brand_id, is_admin)
VALUES
  (5, 4, true);

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
INSERT INTO influencers
  (first_name, last_name, description, profile_url, street, city, province, country, instagram_url, youtube_url, facebook_url)
VALUES 
  ('Will', 'Smith', 'Willard Carroll Smith Jr. is an American actor, producer and rapper.', 'profile url', 'haha street', 'Philadelphia', 'Pennsylvania', 'United States of America', 'https://www.instagram.com/willsmith/?hl=en', 'https://www.facebook.com/Will-Smith-92304305160/', 'https://www.youtube.com/c/WillSmith');
INSERT INTO influencers
  (first_name, last_name, description, profile_url, street, city, province, country, instagram_url, youtube_url, facebook_url)
VALUES 
  ('Kenny', 'Beats', 'Kenneth Charles Blume III, known professionally as Kenny Beats, is an American record producer and songwriter.', 'profile url', 'haha street', 'Greenwich', 'Connecticut', 'United States of America', 'https://www.instagram.com/kennybeats/?hl=en', 'No facebook link provided', 'https://www.youtube.com/channel/UCApPPpJ4d3ueW38lArwiWoA');
INSERT INTO influencers
  (first_name, last_name, description, profile_url, street, city, province, country, instagram_url, youtube_url, facebook_url)
VALUES 
  ('Ashton', 'Kutcher', 'Christopher Ashton Kutcher is an American actor, producer, and entrepreneur.', 'profile url', 'haha street', 'Manhattan', 'New York', 'United States of America', 'https://www.instagram.com/aplusk/?hl=en', 'https://www.facebook.com/Ashton/', 'No youtube link provided');

/*Nike Campaign*/
INSERT INTO campaign_details
  (name, brand_id, product_description, product_value, commission_amount, images_url, affiliate_website, example_posts, post_requirements, category, city, country, target_age_range, target_genders)
VALUES
  ('Nike Athlete', 1, 'product_description', 10, 2, 'images_url', 'affiliate_website', 'example_posts', 'post_requirements', 'category', 'city', 'country', 10, 'target_genders');
/*Coca-Cola Campaign*/
INSERT INTO campaign_details
  (name, brand_id, product_description, product_value, commission_amount, images_url, affiliate_website, example_posts, post_requirements, category, city, country, target_age_range, target_genders)
VALUES
  ('Coca-Cola Sponsor', 2);
INSERT INTO campaign_details
  (name, brand_id)
VALUES
  ('Mcdonalds Sponsor', 3);
INSERT INTO campaign_details
  (name, brand_id)
VALUES
  ('OVO Sound Sponsor', 4);
INSERT INTO campaign_details
  (name, brand_id)
VALUES
  ('Square Enix Sponsor', 5);
INSERT INTO campaign_details
  (name, brand_id)
VALUES
  ('Neutrogena Sponsor', 6);

/*Ronaldo accepts Nike Campaign*/
INSERT INTO campaigns
  (influencer_id, campaign_detail_id, status)
VALUES
  (2, 1, 'Accepted');
/*Dwayne accepts Coca-Cola Campaign*/
INSERT INTO campaigns
  (influencer_id, campaign_detail_id, status)
VALUES
  (3, 2, 'Accepted');
INSERT INTO campaigns
  (influencer_id, campaign_detail_id, status)
VALUES
  (4, 3, 'Accepted');
INSERT INTO campaigns
  (influencer_id, campaign_detail_id, status)
VALUES
  (5, 4, 'Accepted');
INSERT INTO campaigns
  (influencer_id, campaign_detail_id, status)
VALUES
  (6, 5, 'Accepted');
INSERT INTO campaigns
  (influencer_id, campaign_detail_id, status)
VALUES
  (7, 6, 'Accepted');

INSERT INTO tasks
  (campaign_id, user_type, status, description, start_date)
VALUES
  (1, 'influencer', 'on going', 'Nike Task Description', '2020-09-26');
INSERT INTO tasks
  (campaign_id, user_type, status, description, start_date)
VALUES
  (2, 'influencer', 'on going', 'Coca-Cola Task Description', '2020-09-26');
INSERT INTO tasks
  (campaign_id, user_type, status, description, start_date)
VALUES
  (3, 'influencer', 'on going', 'Mcdonalds Task Description', '2020-09-27');
INSERT INTO tasks
  (campaign_id, user_type, status, description, start_date)
VALUES
  (4, 'influencer', 'on going', 'OVO Sound Task Description', '2020-09-27');
INSERT INTO tasks
  (campaign_id, user_type, status, description, start_date)
VALUES
  (5, 'influencer', 'on going', 'Square Enix Task Description', '2020-09-27');
INSERT INTO tasks
  (campaign_id, user_type, status, description, start_date)
VALUES
  (6, 'influencer', 'on going', 'Neutrogena Task Description', '2020-09-27');



INSERT INTO messages
  (content, sender_id, receiver_id, campaign_id, status, created_at)
VALUES 
  ('message content', 2, 2, 1, 'accepted', '2020-09-26');


INSERT INTO categories
  (name, description)
VALUE
  ('Sports', 'Brands that are related to sports. You can see them in this category.');
INSERT INTO categories
  (name, description)
VALUE
  ('Drinks', 'Brands that are related to drinks. You can see them in this category.');
INSERT INTO categories
  (name, description)
VALUE
  ('Food', 'Brands that are related to food. You can see them in this category.');
INSERT INTO categories
  (name, description)
VALUE
  ('Music', 'Brands that are related to music. You can see them in this category.');
INSERT INTO categories
  (name, description)
VALUE
  ('Gaming', 'Brands that are related to gaming. You can see them in this category.');
INSERT INTO categories
  (name, description)
VALUE
  ('Skin-care', 'Brands that are related to skin-care. You can see them in this category.');
INSERT INTO categories
  (name, description)
VALUE
  ('Entertainment', 'Brands that are related to entertainment. You can see them in this category.');

INSERT INTO influencers_categories
  (influencer_id, category_id)
VALUE 
  (2, 1);
INSERT INTO influencers_categories
  (influencer_id, category_id)
VALUE 
  (3, 7);
INSERT INTO influencers_categories
  (influencer_id, category_id)
VALUE 
  (4, 7);
INSERT INTO influencers_categories
  (influencer_id, category_id)
VALUE 
  (5, 4);

INSERT INTO campaign_detail_categories
  (category_id, campaign_detail_id)
VALUES
  (1, 1);
INSERT INTO campaign_detail_categories
  (category_id, campaign_detail_id)
VALUES
  (2, 2);
INSERT INTO campaign_detail_categories
  (category_id, campaign_detail_id)
VALUES
  (3, 3);
INSERT INTO campaign_detail_categories
  (category_id, campaign_detail_id)
VALUES
  (4, 4);
INSERT INTO campaign_detail_categories
  (category_id, campaign_detail_id)
VALUES
  (5, 5);
INSERT INTO campaign_detail_categories
  (category_id, campaign_detail_id)
VALUES
  (6, 6);