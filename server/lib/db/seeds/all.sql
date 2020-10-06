INSERT INTO users
  (first_name, last_name, email, password, phone)
VALUES
  ('Balky', 'TEST', 'balkaranjaswal@gmail.com', 'password', '4031231234'),
  ('Rongxin', 'Zhang', 'RongxinZhang@gmail.com', 'password', '6041231234'),
  ('Favour', 'Ogboruche', 'fogboruche@yahoo.com', 'password', '4035675678'),
  ('John', 'Bazinga', 'JohnBazinga@yahoo.com', 'password', '1233211234'),
  ('Hercules', 'Alcaeus', 'hercPower@gmail.com', 'password', '6756784035'),
  ('Mario', 'Brother', 'MarioRules@mushroomkingdom.com', 'princess', '7454328765'),
  ('Ducky', 'goldsmith', 'duckyDuck@gmail.com', 'password', '4056567837'),
  ('Yeti', 'Snowball', 'yetiinthemountain@gmail.com', 'cold', '4678053567');


INSERT INTO brands
  (name, description, logo_url, city, province, country, website_url, instagram_url, facebook_url, youtube_url)
VALUES
  ('Nike', 'Nike Description', 'logo image', 'Beaverton', 'Oregon', 'United States of America', 'https://www.nike.com/ca/', 'https://www.instagram.com/nike/?hl=en', 'https://www.facebook.com/nike/', 'https://www.youtube.com/user/nike'),
  ('Coca-Cola', 'Coca-Cola Description', 'logo image', 'Atlanta', 'Georgia', 'United States of America', 'https://www.coca-cola.com/', 'https://www.instagram.com/cocacola/?hl=en', 'https://www.facebook.com/Coca-Cola/', 'https://www.youtube.com/user/cocacola'),
  ('Mcdonalds Corporation', 'McDonalds Corporation is an American fast food company, founded in 1940', 'logo image', 'San Bernardino', 'California', 'United States of America', 'https://www.mcdonalds.com/us/en-us.html', 'https://www.instagram.com/mcdonalds/?hl=en', 'https://www.facebook.com/McDonalds/', 'https://www.youtube.com/channel/UCRI5ZedBs0_BYY4PlxD6m7w'),
  ('OVO Sound', 'OVO Sound is a Toronto-based Canadian record label, founded in 2012 by hip hop artist Drake', 'logo image', 'Toronto', 'Ontario', 'Canada', 'https://www.ovosound.com/', 'https://www.instagram.com/welcomeovo/', 'https://www.facebook.com/WelcomeOVO/', 'https://www.youtube.com/channel/UC3rQdmWlTWyk_dGRHuV0_GA'),
  ('Square Enix America', 'The Square Enix Holdings Company, Ltd. is a Japanese video game holding company, best known for its Final Fantasy, Dragon Quest, and Kingdom Hearts role-playing video game franchises.', 'logo image', 'El Segundo', 'California', 'United States of America', 'https://square-enix-games.com/en_US/home2', 'https://www.instagram.com/squareenixusa/?hl=en', 'https://www.facebook.com/SquareEnixProductsNA/', 'https://www.youtube.com/channel/UCA5SLTAVA6unn1M-6lbo1NA'),
  ('Neutrogena', 'Neutrogena is an American brand of skin care, hair care and cosmetics which is headquartered in Los Angeles, California.', 'logo image', 'Los Angeles', 'California', 'United States of America', 'https://www.neutrogena.ca/', 'https://www.instagram.com/neutrogena/?hl=en', 'https://www.facebook.com/neutrogena/', 'https://www.youtube.com/channel/UCNGr_3LSXp3KL55jZW7Pvhg');

/*Rongxin is the brand manager of Nike*/
INSERT INTO brand_managers
  (user_id, brand_id, is_admin)
VALUES
  (2, 1, true),
  /*Favour is the brand manager of Coca-Cola*/
  (3, 2, true),
  (4, 3, true),
  (5, 4, true);

INSERT INTO influencers
  (first_name, last_name, user_id, description, profile_url, street, city, province, country, 
  instagram_url, instagram_followers, facebook_url, facebook_followers, youtube_url, youtube_followers)
VALUES 
  ('Balky', 'Jaswal', 1, 'Balkys description', 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093', 'haha street', 'calgary', 'alberta', 'canada', 'https://www.instagram.com/balkaranj/?hl=en', 10000, 'facebook url', 2000, 'youtube url', 0),
  ('Cristiano', 'Ronaldo', 2, 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for Serie A club Juventus and captains the Portugal national team.', 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093', 'haha street', 'Hospital Dr. Nelio Mendonca', 'Funchal', 'Portugal', 'https://www.instagram.com/cristiano/?hl=en', 120000000, 'https://www.facebook.com/Cristiano', 10, 'https://www.youtube.com/user/CristianoRonaldo' , 0),
  ('Dwayne', 'Johnson', 3, 'Dwayne Douglas Johnson, also known by his ring name the Rock, is an American-Canadian actor, producer, businessman, retired professional wrestler, and former American football and Canadian football player.', 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093', 'haha street', 'Hayward', 'California', 'United States of America', 'https://www.instagram.com/therock/?hl=en', 120000000, 'https://www.facebook.com/DwayneJohnson/', 10,'https://www.youtube.com/user/therock', 0),
  ('Will', 'Johnson', 4, 'Dwayne Douglas Johnson, also known by his ring name the Rock, is an American-Canadian actor, producer, businessman, retired professional wrestler, and former American football and Canadian football player.', 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093', 'haha street', 'Hayward', 'California', 'United States of America', 'https://www.instagram.com/therock/?hl=en', 120000000, 'https://www.facebook.com/DwayneJohnson/', 10,'https://www.youtube.com/user/therock', 0),
  ('Dwayne', 'Johnson', 5, 'Dwayne Douglas Johnson, also known by his ring name the Rock, is an American-Canadian actor, producer, businessman, retired professional wrestler, and former American football and Canadian football player.', 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093', 'haha street', 'Hayward', 'California', 'United States of America', 'https://www.instagram.com/therock/?hl=en',120000000, 'https://www.facebook.com/DwayneJohnson/',10, 'https://www.youtube.com/user/therock', 0),
  ('Dwayne', 'Johnson', 6, 'Dwayne Douglas Johnson, also known by his ring name the Rock, is an American-Canadian actor, producer, businessman, retired professional wrestler, and former American football and Canadian football player.', 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093', 'haha street', 'Hayward', 'California', 'United States of America', 'https://www.instagram.com/therock/?hl=en',120000000, 'https://www.facebook.com/DwayneJohnson/', 10,'https://www.youtube.com/user/therock', 0);

INSERT INTO campaign_details
  (name, brand_id, product_description, product_value, commission_amount, images_url, affiliate_website, example_posts, post_requirements, category, city, country, target_age_range, target_genders)
VALUES
  ('Nike Athlete', 1, 'product_description', 10, 2, 'images_url', 'affiliate_website', 'example_posts', 'post_requirements', 'category', 'city', 'country', 10, 'target_genders'),
  ('Addidas', 1, 'product_description', 10, 2, 'images_url', 'affiliate_website', 'example_posts', 'post_requirements', 'category', 'city', 'country', 10, 'target_genders'),
  ('Coca-Cola Sponsor', 2, 'product_description', 20, 3, 'images_url', 'affiliate_website', 'example_posts', 'post_requirements', 'category', 'city', 'country', 30, 'target_genders'),
  ('Mcdonalds Sponsor', 3, 'product_description', 20, 3, 'images_url', 'affiliate_website', 'example_posts', 'post_requirements', 'category', 'city', 'country', 20, 'target_genders'),
  ('OVO Sound Sponsor', 4, 'product_description', 20, 3, 'images_url', 'affiliate_website', 'example_posts', 'post_requirements', 'category', 'city', 'country', 22, 'target_genders'),
  ('Square Enix Sponsor', 5, 'product_description', 20, 3, 'images_url', 'affiliate_website', 'example_posts', 'post_requirements', 'category', 'city', 'country', 18, 'target_genders'),
  ('Neutrogena', 6, 'product_description', 20, 3, 'images_url', 'affiliate_website', 'example_posts', 'post_requirements', 'category', 'city', 'country', 20, 'target_genders');



/*Ronaldo accepts Nike Campaign*/
INSERT INTO campaigns
  (influencer_id, campaign_detail_id, status)
VALUES
  (2, 1, 'Accepted'),
  (1, 1, 'Accepted'),
  (3, 1, 'Accepted'),
  /*Dwayne accepts Coca-Cola Campaign*/
  (3, 2, 'Accepted'),
  (4, 3, 'Accepted'),
  (5, 4, 'Accepted'),
  (6, 5, 'Accepted');

INSERT INTO tasks
  (campaign_id, user_type, status, description, due_date, created_date)
VALUES
  (1, 'brand', 'on going', 'Campaign 1: Nike Task Description', '2020-10-28', '2020-09-26'),
  (1, 'influencer', 'on going', 'Campaign 1: Nike Task Description', '2020-10-28', '2020-09-26'),
  (2, 'brand', 'on going', 'Campaign 2: Coca-Cola need to build something new', '2020-10-28', '2020-09-26'),
  (2, 'influencer', 'on going', 'Campaign 2:: Need to do something great', '2020-10-28', '2020-09-26'),
  (3, 'influencer', 'on going', 'Campaign 3: Mcdonalds Task Description', '2020-10-28', '2020-09-27'),
  (4, 'influencer', 'on going', 'Campaign 4: OVO Sound Task Description', '2020-10-28', '2020-09-27'),
  (5, 'influencer', 'on going', 'Campaign 5: Square Enix Task Description', '2020-10-28', '2020-09-27');

INSERT INTO messages
  (name, content, sender_id, receiver_id, campaign_id, status)
VALUES 
  ('placeholder Name','First Test Message', 1, 2, 1, 'accepted'),
  ('placeholder Name','Second Seed Test Message', 3, 4, 2, 'accepted'),
  ('placeholder Name','Third Seed Test Message', 5, 6, 3, 'accepted'),
  ('placeholder Name','Fourth Seed Test Message', 1, 2, 4, 'accepted'),
  ('placeholder Name','Fifth Seed Test Message', 3, 4, 5, 'accepted'),
  ('placeholder Name','Sixth Seed Test Message', 2, 3, 5, 'accepted');

INSERT INTO categories
  (name, description)
VALUES
  ('Sports', 'Brands that are related to sports. You can see them in this category.'),
  ('Drinks', 'Brands that are related to drinks. You can see them in this category.'),
  ('Food', 'Brands that are related to food. You can see them in this category.'),
  ('Music', 'Brands that are related to music. You can see them in this category.'),
  ('Gaming', 'Brands that are related to gaming. You can see them in this category.'),
  ('Skin-care', 'Brands that are related to skin-care. You can see them in this category.'),
  ('Entertainment', 'Brands that are related to entertainment. You can see them in this category.');

INSERT INTO influencers_categories 
  (influencer_id, category_id)
VALUES
  (2, 1),
  (3, 7),
  (4, 7),
  (5, 4);

INSERT INTO campaign_detail_categories
  (category_id, campaign_detail_id)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (6, 6);
