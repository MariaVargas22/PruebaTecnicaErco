Prueba técnica Erco 

Descripción del proyecto: 
Para el front se desarrollo una vista principal la cual permite ver todos los proyectos registrados en nuestra base de datos, a su ves de que cuenta con una barra de búsqueda para buscar por nombre, un boton para eliminar por id y un botón para agregar más proyectos.
el backend cuenta con 3 funcionalidades sencillas, agregar, eliminar y ver, estas tienes sus respectivos métodos y cuentan con la conexión a la base de datos MongoDB la cual va a almacenar toda la información

Características de los desarrollos:

frontend: (desarrollado con react) la instalación de los paquetes fue hecha con vite, hace uso de bootstrap y fortawesome para tomar recursos graficos este proyecto se ejecuta en el puerto http://localhost:5173/

Backend: (desarrollador en node con el framework de express) hace uso del orm mongosee y cuenta con el archivo request.http el cual hace uso de la extencion REST Client este archivo permite hacer peticiones al servicio backend este se despliega en el puerto http://localhost:3000

Base de datos MongoDB: La base de datos de nombre Proyectos cuenta con un documento de nombre proyectos el cual va a recibir las peticiones del servicio backend, si se quiere cargar data sin usar el servicio backend a través de la interfaz de mongo dar click en el botón add data e importar como json o cvs 
	
Conexión: la conexión de estos dos desarrollos se hizo por parte de front con axios y del bakend con cors 

ejecución:

Para la ejecución es necesario clonar el repositorio en git y una vez clonado hacer uso del npm install, la versión de node con la que se hicieron los desarrollos es v18.16.1 para ejecutar tanto el backend como el frontend se debe ejecutar npm run dev y abrir el puerto http://localhost:5173/ ya con esto se podrá visualizar el proyecto en el navegador 

