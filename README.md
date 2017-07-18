# sisap_cli (sisap cliente web)

### Cliente web del aplicativo sisap (Sistema de Información de Sapiencia), en donde se manipula toda la renderizacioín de información de cara al a los usuarios, ademas de captura de datos para su posterior manejo en el baccken del aplicativo.

* **Versión de npm:** 5.0.0

* **Versión de node:** 8.0.0

* **Versión de react:** 15.0.0

* **Servdor de aplicaciones:** Apache

* **Dependencias:**
    * express ()
    * jquery ()
    * react ()
    * reflux ()
    * socket ()

* **Información del backend del aplicativo:**
    * Remitirse al aplicativo  [sisap_api](http://181.143.72.70:4000/informatica/sisap_api)

* **Para correr el proyecto:**

    *Desarrollo:* 
      * Encender el server del backend en el puerto 3000
      * nvm use v8.0.0 (Selecciona la versión de node a usar en el ambiente de desarrollo)
      * npm start (Ejecuta el script server.js que enciende un servidor local con el aplicativo)

    *Producción:*
      * Tener corriendo el servidor del backen en la ruta http://181.172.72.70:15000
      * npm run copy & webpack --env=dist (compila el proyecto y genera archivos para ambiente de producción en la carpeta dist)
      * Se copian los archivos de la carpeta dist al folder del root donde es ejecutado por el Apache

* **Documentación de Arquitectura:**
    El aplicativo se desarrolló usando flux. Esta la arquitectura de aplicaciones que Facebook utiliza para crear aplicaciones web del lado del cliente (front-end). Complementa los components de React mediante la utilización de un flujo de datos unidireccional. Es más bien un patrón en lugar de un framework.


* **Dispatcher (Despachador)**

    El Dispatcher es un objeto único en nuestra aplicación y funciona como el eje central del flujo de datos en una aplicación.
    Esencialmente es un registro de callbacks, funciones que se ejecturán cuando se produzca un evento.
    A medida que crezca nuestra app, veremos cómo los Stores dependen entre sí, y con el Dispatcher ordenamos esa interdependencia.

* **Actions (Acciones)**

    Cuando nuevos datos entran en el sistema (ya sea a través de un usuario que hace click en la interfaz de usuario o a través de una respuesta AJAX) se empaquetan en una acción - un objeto que co$
    Las acciones se identifican mediante un atributo type.
    Cuando todas las tiendas reciben la acción, que suelen utilizar este atributo para determinar si y cómo deben responder a ella.

* **Stores (Depósitos)**

    Los Stores contienen el estado de la aplicación y la lógica.
    Son algo similar a un modelo en una MVC tradicional, pero administran el estado de muchos objetos - que no representan un solo registro de datos como hacen los modelos ORM.
    Tampoco son lo mismo que las colecciones del Backbone.
    Más que una simple gestión de una colección de objetos de estilo ORM, los Stores administran el estado de la aplicación de un dominio determinado dentro de la aplicación.

* **¿Y Reflux?**

    Una librería simple para la arquitectura de aplicaciones de flujo de datos unidireccional inspirado en ReactJS.

    Las diferencias principales con Flux son:

    - El Dispatcher se quita a favor de dejar que cada Acción actúe también como Dispatcher.
    - Debido a que las Acciones son escuchables, los Stores pueden escucharlas. Las tiendas no necesitan tener sentencias switch grandes que hacen la comprobación de tipos estáticos (de tipos de ac$
    - Los Stores pueden escuchar a otros Stores
    - `waitFor` se sustituye a favor de manejar flujos de datos en serie y en paralelo
    - No hace falta crear Acciones, ya que son funciones que se pasarán a quienes estén escuchándolas

    Más info [en este link](http://spoike.ghost.io/deconstructing-reactjss-flux/)

    ```
    ╔═════════╗       ╔════════╗       ╔═════════════════╗
    ║ Actions ║──────>║ Stores ║──────>║ View Components ║
    ╚═════════╝       ╚════════╝       ╚═════════════════╝
         ^                                      │
         └──────────────────────────────────────┘    

* **Fecha de lanzamiento:** Julio 2017

* **Lugar:** (Sapiencia) Medellín Colombia

* **Contacto:** desarrolladores: carlos.agudelo@sapiencia.gov.co (Carlos Agudelo) informatica@sapiencia.gov.co (Wilmer Jaramillo), sebasdeldi@hotmail.com (Sebastian Delgado), auxiliar.informatica@sapiencia.gov.co (Juan Lopez)