# Unidad 3
Estimados,

Les dejo la aplicacion que vimos en la clase la cual tiene

 - Servidor de base de datos Mongo
 - Aplicacion web

 Ambas en contenedores distintos

## Requisito

Tener instalado y corriendo Docker Desktop

 ## Como usar:
 Clonar el Repositorio

```
git clone https://github.com/rvillegast/clase3TallerVirtualizacion.git
```

Una vez clonado el repositorio se debe ingresar a la carpeta e instalar las dependencias

```
npm install
```

luego ejecutar el comnado de docker

```
docker compose up
```

Con esto se descargan las imagenes, se crean los contenedores y comienzan a correr.  Cuando en su terminal vea que esta apareciendo los logs, abra un navegador e ingrese a:

http://localhost:3000/

Con esto vera un arreglo vacio [], luego ingrese a 

http://localhost:3000/crear

obtendra un mensaje de "usuario creado" con lo que al volver al primer link el arreglo ya no estara vacio.

Para bajar los contenedores debe ejecutar

```
docker compose down
```


## Disclaimer

Las aplicaciones mostradas son basicas, solo para efectos de laboratorio, por lo que todas las buenas practicas de programacion NO estan presentes.