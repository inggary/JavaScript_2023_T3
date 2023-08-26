--instalacion
--https://www.postgresql.org/download/

--Primero
CREATE TABLE public.cliente (
	"Id" SERIAL PRIMARY KEY,
	"nombre" TEXT,
	"apellido" TEXT,
	"telefono" TEXT
)

--Segundo
INSERT INTO public.cliente ("nombre", "apellido", "telefono") 
VALUES ('Gary', 'Pimentel', '(486) 845-9876')