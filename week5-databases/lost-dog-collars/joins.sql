# YOUR SQL CODE GOES HERE

-- 1. Which collars have a known owner? Display only collars with known owners and those owners' names.
SELECT dog_owners.name, lost_dog_collars.dog_name
  FROM dog_owners
  JOIN lost_dog_collars
  ON (dog_owners.dog_name = lost_dog_collars.dog_name);

-- result
--   name   | dog_name
-- ---------+----------
-- Evan    | Bogie
-- Whitney | Gilly
-- Spencer | Lilly
-- Dan     | Linux
-- Omid    | Bronson

-- 2. For which collars is there no known owner? Display only collars without known owners.
SELECT lost_dog_collars.dog_name AS collars, dog_owners.name
  FROM lost_dog_collars
  LEFT JOIN dog_owners
  ON (dog_owners.dog_name = lost_dog_collars.dog_name)
  WHERE dog_owners.name is NULL;

-- result
-- collars | name
-- ---------+------
-- Lassie  |
-- Fido    |
-- Goose   |

-- 3. What collars are in our possession? Display all collars in our possession. If an owner exists for a given collar, display that also.
SELECT lost_dog_collars.dog_name AS collar, dog_owners.name AS owner
  FROM lost_dog_collars
  LEFT JOIN dog_owners
  ON (dog_owners.dog_name = lost_dog_collars.dog_name);

-- results
-- collar  |  owner
-- ---------+---------
-- Bogie   | Evan
-- Lassie  |
-- Gilly   | Whitney
-- Lilly   | Spencer
-- Fido    |
-- Linux   | Dan
-- Bronson | Omid
-- Goose   |

-- 4. What owners do we know about? Display all owners known to us. If a collar matches that owner, display the collar also.
SELECT dog_owners.name AS owner, lost_dog_collars.dog_name AS lost_dog_collar
  FROM dog_owners
  LEFT JOIN lost_dog_collars
  ON dog_owners.dog_name = lost_dog_collars.dog_name;

-- results
--   owner  | lost_dog_collar
-- ---------+-----------------
--  Evan    | Bogie
--  Whitney | Gilly
--  Spencer | Lilly
--  Dan     | Linux
--  Omid    | Bronson
--  Dan     |
