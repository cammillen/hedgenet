DROP DATABASE IF EXISTS hedgenet;
CREATE DATABASE hedgenet;

-- Table: public.user

-- DROP TABLE IF EXISTS public."user";

CREATE TABLE IF NOT EXISTS public."user"
(
    username character varying(32) COLLATE pg_catalog."default" NOT NULL,
    password character varying(60) COLLATE pg_catalog."default" NOT NULL,
    email character varying(254) COLLATE pg_catalog."default" NOT NULL,
    uni character varying(50) COLLATE pg_catalog."default" NOT NULL,
    location character varying(50) COLLATE pg_catalog."default",
    phoneno character varying(20) COLLATE pg_catalog."default",
    firstname character varying(99) COLLATE pg_catalog."default" NOT NULL,
    lastname character varying(99) COLLATE pg_catalog."default" NOT NULL,
    dateofbirth timestamp without time zone NOT NULL,
    ismale boolean,
    cashbalance real NOT NULL,
    imagefile character varying(255) COLLATE pg_catalog."default",
    followers text[] COLLATE pg_catalog."default",
    following text[] COLLATE pg_catalog."default",
    CONSTRAINT user_pkey PRIMARY KEY (username)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."user"
    OWNER to postgres;

-- Table: public.fund

-- DROP TABLE IF EXISTS public.fund;

CREATE TABLE IF NOT EXISTS public.fund
(
    fundname character varying(32) COLLATE pg_catalog."default" NOT NULL,
    createdby character varying(60) COLLATE pg_catalog."default" NOT NULL,
    createdon timestamp without time zone NOT NULL,
    ispublic boolean NOT NULL,
    uni character varying(50) COLLATE pg_catalog."default" NOT NULL,
    bio character varying(800) COLLATE pg_catalog."default" NOT NULL,
    tags text[] COLLATE pg_catalog."default",
    marketcap real NOT NULL,
    invcost real NOT NULL,
    totalreturns real NOT NULL,
    totalstocks bigint NOT NULL,
    leaderboardpos bigint NOT NULL,
    memberlist text[] COLLATE pg_catalog."default" NOT NULL,
    adminlist text[] COLLATE pg_catalog."default" NOT NULL,
    imagefile character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT fund_pkey PRIMARY KEY (fundname)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.fund
    OWNER to postgres;

-- Table: public.stock

-- DROP TABLE IF EXISTS public.stock;

CREATE TABLE IF NOT EXISTS public.stock
(
    stockname character varying(32) COLLATE pg_catalog."default" NOT NULL,
    ticker character varying(60) COLLATE pg_catalog."default" NOT NULL,
    bio character varying(1000) COLLATE pg_catalog."default" NOT NULL,
    marketcap bigint NOT NULL,
    pe real NOT NULL,
    divyield character varying(32) COLLATE pg_catalog."default" NOT NULL,
    avvol bigint NOT NULL,
    eps real NOT NULL,
    yearhigh real NOT NULL,
    yearlow real NOT NULL,
    imagefile character varying(255) COLLATE pg_catalog."default" NOT NULL,
    tags text[] COLLATE pg_catalog."default",
    CONSTRAINT stock_pkey PRIMARY KEY (stockname)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.stock
    OWNER to postgres;

-- Table: public.trade

-- DROP TABLE IF EXISTS public.trade;

CREATE TABLE IF NOT EXISTS public.trade
(
    tradeid integer NOT NULL DEFAULT nextval('trade_tradeid_seq'::regclass),
    fundname character varying(32) COLLATE pg_catalog."default" NOT NULL,
    username character varying(32) COLLATE pg_catalog."default" NOT NULL,
    stockname character varying(32) COLLATE pg_catalog."default" NOT NULL,
    "time" timestamp without time zone NOT NULL,
    value real NOT NULL,
    CONSTRAINT trade_pkey PRIMARY KEY (tradeid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.trade
    OWNER to postgres;

-- Table: public.message

-- DROP TABLE IF EXISTS public.message;

CREATE TABLE IF NOT EXISTS public.message
(
    messageid bigint NOT NULL DEFAULT nextval('message_messageid_seq'::regclass),
    fundname character varying(32) COLLATE pg_catalog."default" NOT NULL,
    username character varying(32) COLLATE pg_catalog."default" NOT NULL,
    "time" timestamp without time zone NOT NULL,
    text character varying(1000) COLLATE pg_catalog."default" NOT NULL,
    tags text[] COLLATE pg_catalog."default",
    upvotes bigint NOT NULL,
    comments bigint NOT NULL,
    CONSTRAINT message_pkey PRIMARY KEY (messageid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.message
    OWNER to postgres;

-- Table: public.comment

-- DROP TABLE IF EXISTS public.comment;

CREATE TABLE IF NOT EXISTS public.comment
(
    commentid bigint NOT NULL DEFAULT nextval('comment_commentid_seq'::regclass),
    messageid bigint NOT NULL,
    username character varying(32) COLLATE pg_catalog."default" NOT NULL,
    "time" timestamp without time zone NOT NULL,
    text character varying(1000) COLLATE pg_catalog."default" NOT NULL,
    tags text[] COLLATE pg_catalog."default",
    upvotes bigint NOT NULL,
    CONSTRAINT comment_pkey PRIMARY KEY (commentid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.comment
    OWNER to postgres;