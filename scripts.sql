-- Database: test

-- DROP DATABASE test;

CREATE DATABASE test
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'Spanish_Spain.1252'
       LC_CTYPE = 'Spanish_Spain.1252'
       CONNECTION LIMIT = -1;

-- Table: role

-- DROP TABLE role;

CREATE TABLE role
(
  id serial NOT NULL,
  name character varying(20),
  description character varying(40),
  userchange integer,
  datemodified timestamp without time zone,
  CONSTRAINT role_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE role
  OWNER TO postgres;


CREATE TABLE person
(
  id serial NOT NULL,
  documenttype integer,
  documentnumber character varying(20),
  firstname character varying(20),
  secondname character varying(20),
  lastname character varying(20),
  secondlastname character varying(20),
  email character varying(40),
  phone character varying(40),
  address character varying(40),
  roleid integer,
  password varchar(40),
  userchange integer,
  datemodified timestamp without time zone,
  CONSTRAINT person_pkey PRIMARY KEY (id),
  CONSTRAINT fk_roleid FOREIGN KEY (roleid)
      REFERENCES role (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE person
  OWNER TO postgres;

-- Table: documenttype

-- DROP TABLE documenttype;

CREATE TABLE documenttype
(
  id serial NOT NULL,
  resume character varying(3),
  name character varying(40),
  description character varying(40),
  userchange integer,
  datemodified timestamp without time zone,
  CONSTRAINT documenttype_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE documenttype
  OWNER TO postgres;
