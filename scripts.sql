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
  CONSTRAINT pk_aprovalmatrix PRIMARY KEY (id),
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


-- Table: select * from  status

-- DROP TABLE status;
CREATE TABLE status
(
  id integer NOT NULL,
  name character varying(40),
  userchange integer,
color varchar(10), 
  datemodified timestamp without time zone,
  CONSTRAINT status_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE status
  OWNER TO postgres;


INSERT INTO status (id, name, userChange, dateModified, color)
VALUES
(1, 'En Proceso Aprobación', 0, now(),'#00569d'),
(2, 'Aprobada', 0, now(), '#4586c7'),
(3, 'Rechazada', 0, now(), '#287531'),
(4, 'Cancelada', 0, now(), '#585858'),
(5, 'Pendiente a Tiempo', 0, now(), '#D2EC13'),
(6, 'A tiempo', 0, now(), '#13EC44' ),
(7, 'Tarde', 0, now(), '#EB0F0F');



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


-- Table: typebilling

-- DROP TABLE typebilling;

CREATE TABLE typebilling
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
ALTER TABLE typebilling
  OWNER TO postgres;


INSERT INTO typeBilling (name, code, description, userchange, datemodified)
VALUES
('Servicios Públicos', 'SER_PUB', 'Servicios públicos', 0, now()),
('Servicios Privados', 'SER_PRI', 'Servicios privados', 0, now()),
('Licencias Software', 'LIC', 'Licencias de software', 0, now());


-- Table: aprovalbillingprocess

-- DROP TABLE aprovalbillingprocess;

CREATE TABLE aprovalbillingprocess
(
  id serial NOT NULL,
  billingid integer,
  levelaproval integer,
  personaprovalid integer,
  daterequest timestamp without time zone,
  datechange timestamp without time zone,
  userchange integer,
  datemodified timestamp without time zone,
  statusid integer,
  observations text,
  CONSTRAINT aprovalbillingprocess_pkey PRIMARY KEY (id),
  CONSTRAINT fk_billing_id FOREIGN KEY (billingid)
      REFERENCES billing (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT fk_person_aproval_id FOREIGN KEY (personaprovalid)
      REFERENCES person (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE aprovalbillingprocess
  OWNER TO postgres;

-- View: vw_billing_data

-- DROP VIEW vw_billing_data;

CREATE OR REPLACE VIEW vw_billing_data AS 
 SELECT b.numberbilling AS numerofactura,
    am.levelaprobation,
    concat((((((pe.firstname::text || ''::text) || pe.secondname::text) || ' '::text) || pe.lastname::text) || ''::text) || pe.secondlastname::text) AS aprobador,
    cc.name AS costcenter,
    concat((mo.code::text || ' '::text) || to_char(b.exchangerate, '999,999,999,999'::text)) AS tasacambio,
    concat((mo.code::text || ' '::text) || to_char(b.valuebill, '999,999,999,999'::text)) AS valor,
    b.datebilling AS fechafactura,
    b.datelimit AS fechalimite,
    b.datefiled AS fecharadicado,
    am.daystoaprobate AS "diasaprobación",
    concat((mo.code::text || ' '::text) || to_char(am.valuemin, '999,999,999,999'::text)) AS valorminimo,
    concat((mo.code::text || ' '::text) || to_char(am.valuemax, '999,999,999,999'::text)) AS valormaximo,
    pro.businessname AS proveedor,
    pro.nit,
    tb.name AS tipofactura,
        CASE b.producttype
            WHEN 1 THEN 'PRODUCTO'::text
            WHEN 2 THEN 'SERVICIO'::text
            ELSE 'OTRO'::text
        END AS tipoproducto,
    b.routefile AS pdf,
    st.name AS estado,
    st.color,
    am.levelaprobation AS nivelaprobacion,
    pe.email,
    b.stateid AS estadoid
   FROM billing b
     JOIN provider pro ON pro.id = b.providerid
     JOIN typebilling tb ON tb.id = b.billingtype
     JOIN costcenter cc ON cc.id = b.costcenterid
     JOIN status st ON st.id = b.stateid
     JOIN aprovalmatrix am ON am.costcenterid = b.costcenterid
     JOIN money mo ON mo.id = am.moneyid
     JOIN person pe ON pe.id = am.personid;

ALTER TABLE vw_billing_data
  OWNER TO postgres;



-- Function: fn_begin_process_aproval(integer, integer, integer, integer, integer, integer, text, text, text, integer, text, integer)

-- DROP FUNCTION fn_begin_process_aproval(integer, integer, integer, integer, integer, integer, text, text, text, integer, text, integer);

CREATE OR REPLACE FUNCTION fn_begin_process_aproval(
    newnumberbilling integer,
    newproviderid integer,
    newbillingtype integer,
    newproducttype integer,
    newcostcenterid integer,
    newexchangerate integer,
    newdatebilling text,
    newdatelimit text,
    newdatefiled text,
    newvaluebill integer,
    newroutefile text,
    newuserchange integer)
  RETURNS boolean AS
$BODY$
-- Declaramos las variables
DECLARE idLastBilling INTEGER;
	totalLevelsAproval INTEGER;
	rowAprobalMatrix aprovalmatrix%rowtype;
	rowPerson RECORD;
		
BEGIN
	-- Insertamos la factura
	INSERT INTO Billing (
			NumberBilling, 
			ProviderId, 
			BillingType, 
			ProductType, 
			CostcenterId,
			ExchangeRate, 
			DateBilling, 
			DateLimit, 
			DateFiled, 
			ValueBill, 
			DateCreated, 
			Stateid,
			RouteFile, 
			UserChange, 
			DateModified) 
	VALUES (
			newNumberBilling, 
			newProviderId, 
			newBillingType, 
			newProductType, 
			newCostcenterId,
			newExchangeRate, 
			TO_TIMESTAMP(newDateBilling, 'DD/MM/YYYY HH:MI'), 
			TO_TIMESTAMP(newDateLimit, 'DD/MM/YYYY HH:MI'), 
			TO_TIMESTAMP(newDateFiled, 'DD/MM/YYYY HH:MI'), 
			newValueBill, 
			now(), 
			1,
			newRouteFile, 
			newUserChange, 
			now());


	-- BUSCAMOS LOS APROBADORES DE LA FACTURA POR CENTRO DE COSTO
	SELECT ID INTO IDLASTBILLING
		FROM BILLING 
		WHERE NUMBERBILLING = NEWNUMBERBILLING;

	-- INICIAMOS EL PROCESO DE APROBACIóN, POR DEFECTO, EL ESTADO ES EN PROCESO
	--BUSCAMOS LOS APROVADORES DE ACUERDO A LA MATRIX DE APROBACIóN
	 FOR ROWAPROBALMATRIX IN SELECT * FROM APROVALMATRIX
	    WHERE COSTCENTERID = NEWCOSTCENTERID
		ORDER BY LEVELAPROBATION
	    LOOP
		
		INSERT INTO APROBALBILLINGPROCESS
		(
			BILLINGID,
			LEVELAPROVAL,
			PERSONAPROVALID,
			DATEREQUEST,
			USERCHANGE,
			DATEMODIFIED,
			STATUSID
		) VALUES (
			IDLASTBILLING,
			ROWAPROBALMATRIX.LEVELAPROBATION,
			ROWAPROBALMATRIX.PERSONID,
			NOW(),
			NEWUSERCHANGE,
			NOW(),
			5
			);
	    END LOOP;

	RETURN TRUE;
 
END
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION fn_begin_process_aproval(integer, integer, integer, integer, integer, integer, text, text, text, integer, text, integer)
  OWNER TO postgres;



CREATE OR REPLACE FUNCTION fn_continue_process_aproval
(
  newNumberBilling integer, 
  newStateId integer,
  newUserChange integer,
  newObservations text	
)
RETURNS TABLE(statusBilling integer, returnTo text, email text)
AS
$BODY$
DECLARE -- Declaramos las variables
	rowBilling billing%rowtype;
	rowaprovalbillingprocess aprovalbillingprocess%rowtype;
	rowAprovalmatrix aprovalmatrix%rowtype;
	nextAprovalLevel integer;
BEGIN
-- Verificar estado actual de la factura
	SELECT * INTO rowBilling 
	  FROM billing
	  where numberbilling = newNumberBilling;
	
	IF rowBilling.stateId <> 1 THEN 
		RETURN 	query
		SELECT rowBilling.id as Status,
		      '' as ReturnTo,
		      '' as Email;  
	END IF;

-- Verificar Si el nivel de aprobación corresponde al usuario 

-- Modificar estado y observaciones	
	SELECT * INTO rowaprovalbillingprocess 
	FROM aprovalbillingprocess
	WHERE billingId = rowBilling.id
		and personAprovalId = newUserChange;

	SELECT * INTO rowAprovalmatrix
	FROM aprovalmatrix 
	WHERE costcenterId = rowBilling.costCenterId
		AND personId = newUserChange;


	UPDATE aprovalbillingprocess SET
		dateChange = now(),
		userChange = newUserChange,
		dateModified = now(),
		statusid = newStateId,
		observations = newObservations
	where id = rowaprovalbillingprocess.id
		and personAprovalId = newUserChange;

	-- Verificar siguiente paso en el proceso
	IF newStateId = 3 THEN -- Factura rechazada
		-- Actualizamos la factura con estado rechazado
		UPDATE BILLING SET
			dateModified = now(),
			userChange = newUserChange,
			causerRejection = newObservations,
			stateId = 3,
			userRejection = newUserChange
		WHERE ID = rowBilling.ID;

		
		RETURN QUERY
		SELECT newStateId, BUSIESSNAME, EMAIL
		FROM PROVIDER 
		WHERE ID = rowBilling.PROVIDERID;
	END IF;
			
	-- Validar si existen más niveles
	
	select  
		CASE WHEN personAprovalId IS NULL THEN 0 
		ELSE personAprovalId END INTO nextAprovalLevel
		from aprovalbillingprocess 
		where  billingId =  rowBilling.id and 
		levelAproval = rowaprovalbillingprocess.levelAprobal;

	-- si existe se cambia el registro del proceso
	IF nextAprovalLevel > 0 THEN
		select  
			newStateId, 
			concat (p.firstname || ''|| p.lastname),
			p.email
		from aprovalbillingprocess ap
			inner join person p on p.id = ap.personAprovalId
			where  billingId = rowBilling.id and 
		 levelAproval = rowaprovalbillingprocess.levelAprobal + 1;
	ELSE
		
		UPDATE BILLING SET
			dateModified = now(),
			userChange = newUserChange,
			causerRejection = newObservations,
			stateId = 2,
			userRejection = newUserChange
		WHERE ID = rowBilling.ID;


		RETURN QUERY
		SELECT  newStateId, 
			businessname,
			emailtreasure
		FROM company
		WHERE ID = 1;
	END IF;
	
END
$BODY$
LANGUAGE 'plpgsql' ;	
		
