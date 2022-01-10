CREATE TABLE public.main_products (
  id integer NOT NULL,
  barcode character varying(20) NULL,
  product_name character varying(80) NULL,
  category character varying(20) NULL,
  unit_of_measure character varying(20) NULL,
  uom_count integer NULL,
  is_active smallint NOT NULL,
  created_at timestamp without time zone NOT NULL,
  updated_at timestamp without time zone NULL,
  mui_cert character varying(255) NULL,
  bpom_cert character varying(255) NULL,
  manufacturer character varying(255) NULL,
  netto integer NULL,
  netto_unit character varying(255) NULL,
  pirt_cert character varying(255) NULL,
  kemenkes_cert character varying(255) NULL,
  reg_no_cert character varying(255) NULL,
  brand character varying(255) NULL
);
ALTER TABLE
  public.main_products
ADD
  CONSTRAINT main_products_pkey PRIMARY KEY (id)