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
  userchange integer,
  datemodified timestamp without time zone,
  CONSTRAINT documenttype_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE documenttype
  OWNER TO postgres;


-- Table: providers

-- DROP TABLE providers;

CREATE TABLE providers
(
  id serial NOT NULL,
  code integer,
  businessname character varying(50),
  nit character varying(12),
  reqgimentype integer,
  economyactivity character varying(70),
  address character varying(40),
  contact character varying(50),
  email character varying(50),
  CONSTRAINT providers_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE providers
  OWNER TO postgres;
  

-- Table: typeproduct

-- DROP TABLE typeproduct;

CREATE TABLE typeproduct
(
  id serial NOT NULL,
  name character varying(20),
  CONSTRAINT typeproduct_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE typeproduct
  OWNER TO postgres;
 
-- Table: product

-- DROP TABLE product;

CREATE TABLE product
(
  id serial NOT NULL,
  code character varying(20),
  description character varying(255),
  type integer,
  accountingaccount character varying(40),
  userchange integer,
  datemodified timestamp without time zone,
  CONSTRAINT product_pkey PRIMARY KEY (id),
  CONSTRAINT product_type_fkey FOREIGN KEY (type)
      REFERENCES typeproduct (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE product
  OWNER TO postgres;

-- Table: products_provider

-- DROP TABLE products_provider;

CREATE TABLE products_provider
(
  id serial NOT NULL,
  idprovider integer,
  idproduct integer,
  userchange integer,
  datemodified timestamp without time zone,
  CONSTRAINT products_provider_pkey PRIMARY KEY (id),
  CONSTRAINT products_provider_idproduct_fkey FOREIGN KEY (idproduct)
      REFERENCES product (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT products_provider_idprovider_fkey FOREIGN KEY (idprovider)
      REFERENCES provider (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE products_provider
  OWNER TO postgres;


insert into TypeProduct (name) values
('Producto'),
('Servicio');

-- Table: company

-- DROP TABLE company;

CREATE TABLE company
(
  id serial NOT NULL,
  businessname character varying(40),
  logo text,
  nit character varying(20),
  emailcompany character varying(40),
  emailtreasury character varying(40),
  accountableinterface boolean,
  purchaseorders boolean,
  userchange integer,
  datemodified timestamp without time zone,
  CONSTRAINT company_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE company
  OWNER TO postgres;

-- Table: costcenter

-- DROP TABLE costcenter;

CREATE TABLE costcenter
(
  id serial NOT NULL,
  name character varying(40),
  description character varying(255),
  companyid integer,
  userchange integer,
  datemodified timestamp without time zone,
  CONSTRAINT costcenter_pkey PRIMARY KEY (id),
  CONSTRAINT fk_company_id FOREIGN KEY (companyid)
      REFERENCES company (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE costcenter
  OWNER TO postgres;
