-- Database: test

-- DROP DATABASE test;

CREATE DATABASE test
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'Spanish_Spain.1252'
       LC_CTYPE = 'Spanish_Spain.1252'
       CONNECTION LIMIT = -1;


CREATE TABLE MENU
(
id serial primary key, 
icon varchar(20),
name varchar(40),
component varchar(40),
  userchange integer,
  datemodified timestamp without time zone
);

INSERT INTO MENU (icon, name, component, userchange, datemodified)
VALUES 
    ('fa fa-home', 'Inicio', '/home', 0, now()),
    ('fa fa-file-text-o', 'Gestión de Facturas', '/billing', 0, now()),
    ('fa fa-shopping-cart', 'Órdenes de Compra', '/shopping', 0, now()),
    ('fa fa-users', 'Administración', '/admin', 0, now()),
    ('fa fa-line-chart', 'Informes', '/reports', 0, now()),
    ('fa fa-cog', 'Configuración', '/settings', 0, now());
	
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
  
insert into documenttype (resume, name)
values 
('CC.', 'Cédula de Ciudadanía'),
('CE.', 'Cédula de Extranjería');



  
  -- Table: provider

-- DROP TABLE provider;

CREATE TABLE provider
(
  id serial NOT NULL,
  code integer,
  businessname character varying(40),
  nit character varying(20),
  reqgimentype integer,
  economyactivity character varying(40),
  address character varying(40),
  contact character varying(40),
  email character varying(40),
  userchange integer,
  datemodified timestamp without time zone,
  CONSTRAINT provider_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE provider
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
  
 
-- Table: money

-- DROP TABLE money;

CREATE TABLE money
(
  id serial NOT NULL,
  country character varying(30),
  unitymoney character varying(40),
  symbol character varying(3),
  code character varying(4),
  userchange integer,
  datemodified timestamp without time zone,
  CONSTRAINT money_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE money
  OWNER TO postgres;

INSERT INTO money (country, unitymoney, symbol, code, userchange, datemodified)
values
('Colombia', 'peso colombiano', '$', 'COP', 1, NOW()),
('Estadis Unidos', 'Dólar Estado Unidense', '$', 'USD', 1, NOW()),
('Europa', 'Euro', '€', 'EUR', 1, NOW());





-- Table: aprovalmatrix

-- DROP TABLE aprovalmatrix;

CREATE TABLE aprovalmatrix
(
  id serial NOT NULL,
  levelaprobation integer,
  costcenterid integer,
  personid integer,
  daystoaprobate integer,
  moneyid integer,
  valuemin double precision,
  valuemax double precision,
  userchange integer,
  datemodified timestamp without time zone,
  CONSTRAINT fk_bill_moneyid FOREIGN KEY (moneyid)
      REFERENCES money (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT fk_costcenterid FOREIGN KEY (costcenterid)
      REFERENCES costcenter (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT fk_personid FOREIGN KEY (personid)
      REFERENCES person (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE aprovalmatrix
  OWNER TO postgres;

-- Table: status

-- DROP TABLE status;

CREATE TABLE status
(
  id serial NOT NULL,
  name character varying(40),
  userchange integer,
  datemodified timestamp without time zone,
  CONSTRAINT status_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE status
  OWNER TO postgres;


INSERT INTO status (name, userChange, dateModified)
VALUES
('En Proceso Aprobación', 0, now()),
('Aprobada', 0, now()),
('Rechazada', 0, now()),
('Cancelada', 0, now());

alter table status add column color varchar(10);

update status set color = '#4586c7' where id = 1;
update status set color = '#287531' where id = 2;
update status set color = '#585858' where id = 3;
update status set color = '#ab3030' where id = 4;

-- Table: billing

-- DROP TABLE billing;

CREATE TABLE billing
(
  id serial NOT NULL,
  numberbilling integer,
  providerid integer,
  billingtype integer,
  producttype integer,
  costcenterid integer,
  moneyid integer,
  exchangerate double precision,
  datebilling timestamp without time zone,
  datelimit timestamp without time zone,
  datefiled timestamp without time zone,
  valuebill double precision,
  userchange integer,
  datecreated timestamp without time zone,
  datemodified timestamp without time zone,
  stateid integer,
  dateaprovalrejection timestamp without time zone,
  casuerejection character varying(255),
  userrejection integer,
  routefile text,
  CONSTRAINT billing_pkey PRIMARY KEY (id),
  CONSTRAINT fk_bill_costcenterid FOREIGN KEY (costcenterid)
      REFERENCES costcenter (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT fk_bill_moneyid FOREIGN KEY (moneyid)
      REFERENCES money (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT fk_bill_providerid FOREIGN KEY (providerid)
      REFERENCES provider (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT fk_bill_stateid FOREIGN KEY (stateid)
      REFERENCES status (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE billing
  OWNER TO postgres;

CREATE TABLE typeBilling
(
  id serial NOT NULL,
  name character varying(40),
  code character varying(10),
  description character varying(200),
  userchange integer,
  datemodified timestamp without time zone
)
WITH (
  OIDS=FALSE
);
ALTER TABLE status
  OWNER TO postgres;

INSERT INTO typeBilling (name, code, description, userchange, datemodified)
VALUES
('Servicios Públicos', 'SER_PUB', 'Servicios públicos', 0, now()),
('Servicios Privados', 'SER_PRI', 'Servicios privados', 0, now()),
('Licencias Software', 'LIC', 'Licencias de software', 0, now());