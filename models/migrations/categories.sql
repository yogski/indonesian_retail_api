CREATE TABLE public.categories (
  id SERIAL PRIMARY KEY,
  slug character varying(255) NOT NULL,
  cat_description character varying(255) NOT NULL,
  cat_parent integer NULL,
  is_active smallint NOT NULL DEFAULT 1,
  created_at timestamp without time zone NOT NULL,
  updated_at timestamp without time zone NULL
);