DROP DATABASE IF EXISTS hedgenet;
CREATE DATABASE hedgenet;

CREATE TABLE "user" (
    username VARCHAR(32) PRIMARY KEY NOT NULL,
    password VARCHAR(60) NOT NULL,
    email VARCHAR(254) NOT NULL,
    uni CHAR(50) NOT NULL,
    location CHAR(50),
    -- neccessary?
    phoneNo VARCHAR(20),
    firstName CHAR(99) NOT NULL,
    lastName CHAR(99) NOT NULL,
    dateOfBirth TIMESTAMP NOT NULL,
    isMale BIT,
    cashBalance INT NOT NULL,
    -- divide by 100 for £x.xx notation
    imageFile  VARCHAR(255)
    -- need to see how PGSQL handles this - route to file in DB
);

CREATE TABLE "fund" (
    fundName VARCHAR(32) PRIMARY KEY NOT NULL,
    createdBy VARCHAR(60) NOT NULL,
    createdOn TIMESTAMP NOT NULL,
    isPublic BIT NOT NULL,
    uni CHAR(50) NOT NULL,
    bio VARCHAR(500) NOT NULL,
    -- compulsory?
    tags VARCHAR(64),
    --figure out set of longest tags (say 5 total?) and accommodate for length
    marketCap BIGINT NOT NULL,
    invCost BIGINT NOT NULL,
    totalReturns BIGINT NOT NULL,
    totalStocks BIGINT NOT NULL,
    leaderboardPos BIGINT NOT NULL,
    memberList VARCHAR(1000) NOT NULL,
    -- size limit?
    adminList VARCHAR(1000) NOT NULL,
    -- ditto
    imageFile  VARCHAR(255) NOT NULL
);

CREATE TABLE "stock" (
    stockName VARCHAR(32) PRIMARY KEY NOT NULL,
    ticker VARCHAR(60) NOT NULL,
    createdOn TIMESTAMP NOT NULL,
    isPublic BIT NOT NULL,
    uni CHAR(50) NOT NULL,
    bio VARCHAR(500) NOT NULL,
    -- compulsory?
    tags VARCHAR(64),
    --figure out set of longest tags (say 5 total?) and accommodate for length
    marketCap BIGINT NOT NULL,
    pE BIGINT NOT NULL,
    divYield BIGINT NOT NULL,
    avVol BIGINT NOT NULL,
    ePS BIGINT NOT NULL,
    yearHigh BIGINT NOT NULL,
    yearLow BIGINT NOT NULL,
    invCost BIGINT NOT NULL,
    imageFile  VARCHAR(255) NOT NULL
);

CREATE TABLE "trade" (
    tradeID SERIAL PRIMARY KEY,
    -- since not using Cassandra any more
    fundName VARCHAR(32) NOT NULL,
    username VARCHAR(32) NOT NULL,
    stockName VARCHAR(32) NOT NULL,
    time TIMESTAMP NOT NULL,
    -- GMT converted
    value BIGINT NOT NULL
);

CREATE TABLE "message" (
    messageID SERIAL PRIMARY KEY,
    fundName VARCHAR(32) NOT NULL,
    username VARCHAR(32) NOT NULL,
    time TIMESTAMP NOT NULL,
    text VARCHAR(500) NOT NULL,
    tags VARCHAR(64),
    upvotes BIGINT NOT NULL
);

CREATE TABLE "comment" (
    commentID SERIAL PRIMARY KEY,
    messageID SERIAL NOT NULL,
    username VARCHAR (32) NOT NULL,
    time TIMESTAMP NOT NULL,
    text VARCHAR(500) NOT NULL,
    tags VARCHAR(64),
    upvotes BIGINT NOT NULL
);