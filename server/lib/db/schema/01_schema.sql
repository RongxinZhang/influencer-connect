DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS brands CASCADE;
DROP TABLE IF EXISTS brand_managers CASCADE;
DROP TABLE IF EXISTS influencers CASCADE;
DROP TABLE IF EXISTS campaign_details CASCADE;
DROP TABLE IF EXISTS campaigns CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS influencers_categories CASCADE;
DROP TABLE IF EXISTS campaign_detail_categories CASCADE;
DROP TABLE IF EXISTS tasks CASCADE;
DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE brands (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  logo_url VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255),
  country VARCHAR(255) NOT NULL,
  website_url VARCHAR(255) NOT NULL, 
  instagram_url VARCHAR(255),
  facebook_url VARCHAR(255),
  youtube_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE brand_managers (
  id SERIAL PRIMARY KEY NOT NULL,
  is_admin BOOLEAN NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  brand_id INTEGER REFERENCES brands(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE influencers (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  description VARCHAR(255) NOT NULL,
  profile_url VARCHAR(255) NOT NULL,
  street VARCHAR,
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255),
  country VARCHAR(255) NOT NULL,
  instagram_url VARCHAR(255),
  instagram_followers INTEGER DEFAULT 0,
  facebook_url VARCHAR(255),
  facebook_followers INTEGER DEFAULT 0,
  youtube_url VARCHAR(255),
  youtube_followers INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE campaign_details (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  brand_id INTEGER REFERENCES brands(id) ON DELETE CASCADE,
  product_description VARCHAR(255) NOT NULL,
  product_value INTEGER,
  commission_amount INTEGER,
  images_url VARCHAR(255) NOT NULL,
  affiliate_website VARCHAR,
  example_posts VARCHAR,
  post_requirements VARCHAR,
  category VARCHAR,
  city VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  target_age_range INTEGER,
  target_genders VARCHAR,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE campaigns (
  id SERIAL PRIMARY KEY NOT NULL,
  influencer_id INTEGER REFERENCES influencers(id) ON DELETE CASCADE,
  campaign_detail_id INTEGER REFERENCES campaign_details(id) ON DELETE CASCADE,
  status VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE influencers_categories (
  id SERIAL PRIMARY KEY NOT NULL,
  influencer_id INTEGER REFERENCES influencers(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE campaign_detail_categories (
  id SERIAL PRIMARY KEY NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  campaign_detail_id INTEGER REFERENCES campaign_details(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  campaign_id INTEGER REFERENCES campaigns(id) ON DELETE CASCADE,
  user_type VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  due_date DATE NOT NULL,
  created_date TIMESTAMP DEFAULT NOW()
);
 
CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  content VARCHAR(255) NOT NULL,
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  campaign_id INTEGER REFERENCES campaigns(id) ON DELETE CASCADE,
  status VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);