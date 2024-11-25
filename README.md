# :house: First Angular App

[![Angular](https://img.shields.io/badge/Angular-v19.0.0-%2300ddac.svg?style=for-the-badge&logo=angular&logoColor=white&labelColor=DD0031)](https://angular.dev/)
[![NodeJS](https://img.shields.io/badge/Node.js-v20.10.0-%23975fa4?style=for-the-badge&logo=Node.js&logoColor=white&labelColor=6DA55F)](https://nodejs.org/en/)

Este proyecto contiene el código realizado correspondiente al tutorial [Build your first Angular app locally](https://angular.dev/tutorials/first-app) de la documentación oficial de [Angular](https://angular.dev/).

## :memo: Requisitos previos
Antes de comenzar, asegúrate de tener las siguientes herramientas instaladas: 

- **Node.js**: Necesitarás Node.js para ejecutar comandos de npm (Node Package Manager) y Angular CLI. Descarga e instala la versión recomendada desde [nodejs.org](https://nodejs.org/).
  - Verifica la instalación ejecutando `node -v` y `npm -v` en tu terminal para asegurarte de que ambos estén correctamente instalados.
- **Angular CLI**: Angular Command Line Interface (CLI) es una herramienta necesaria para crear, construir y administrar proyectos de Angular.
  - Instálalo globalmente en tu máquina con el siguiente comando:
    ```bash
    npm install -g @angular/cli
    ```
  - Verifica la instalación ejecutando `ng version` en tu terminal para asegurarte de que Angular CLI esté instalado correctamente.
- **json-server**: Es una herramienta útil para crear un servidor RESTful simulado con un archivo JSON. Esto es útil para pruebas y desarrollo local sin necesidad de un backend real.
  - Instálalo globalmente en tu máquina con el siguiente comando:
    ```bash
    npm install -g json-server
    ```
  - Verifica la instalación ejecutando `json-server -v` en tu terminal para asegurarte de que json-server esté instalado correctamente.

## :file_folder: Estructura del proyecto 
Aquí tienes un resumen de la estructura del código: 
- `src/app`: Contiene los componentes, servicios y módulos de la aplicación.
- `src/assets`: Recursos estáticos como imágenes y archivos.
- `dist/`: Carpeta de distribución que contiene los archivos generados después de construir el proyecto para producción.
- `.angular/`: Directorio generado automáticamente que contiene configuraciones específicas del proyecto Angular.
- `node_modules/`: Directorio donde se almacenan todas las dependencias de Node.js necesarias para el proyecto.
- `angular.json`: Archivo de configuración del proyecto Angular.

```plaintext
first-angular-app/
├── .angular/
├── dist/
├── node_modules/
├── src/
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   ├── app/
│   │   ├── details/
│   │   │   ├── details.component.css
│   │   │   ├── details.component.ts
│   │   ├── home/
│   │   │   ├── home.component.css
│   │   │   ├── home.component.ts
│   │   ├── housing-location/
│   │   │   ├── housing-location.component.css
│   │   │   ├── housing-location.component.ts
│   │   ├── app.component.css
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── housing.service.ts
│   │   ├── housinglocation.ts
│   │   ├── routes.ts
├── .gitignore
├── angular.json
├── BUILD.bazel
├── config.json
├── package-lock.json
├── package.json
├── package.json.template
├── tsconfig.app.json
├── tsconfig.json
```

## :gear: Instrucciones de instalación 
Sigue estos pasos para poner en marcha la aplicación: 
1. Clona este repositorio:
```bash
git clone https://github.com/<user>/first-angular-app.git
```
2. Navega al directorio del proyecto:
```bash
cd first-angular-app
```
3. Instala las dependencias necesarias:
```bash
npm install
```
4. Inicia la aplicación localmente:
```bash
ng serve
```
5. Abre tu navegador y navega a `http://localhost:4200/` para ver la aplicación en funcionamiento.

## :chart_with_upwards_trend: Resultados
Las lecciones del tutorial nos guían para la construcción de una app de Angular que lista una serie de casas para renta y muestra los detalles de las casas individuales. Algunas características adicionales son: 
- Implementación de búsqueda de casas por ciudad.
- Clase de servicio para la recuperacion de datos desde una API.
- Implementación de formulario reactivo para recuperar los datos de un posible cliente.

## :books: Lecciones aprendidas 
Este proyecto me ayudó a aprender: 
- **Configuración inicial**: Cómo configurar un nuevo proyecto Angular utilizando Angular CLI.
- **Componentes**: Creación y uso de componentes en Angular.
- **Servicios**: Implementación de servicios para manejar la lógica de la aplicación y el manejo de datos.
- **Data Binding**: Cómo enlazar datos entre el componente y la vista.
- **Reactive Forms**: Cómo recuperar datos introducidos por el usuario.
- **Rutas**: Configuración y uso de rutas para la navegación en una aplicación Angular.
- **Despliegue**: Pasos finales para desplegar una aplicación Angular en un servidor local y remoto ([Github Pages](https://pages.github.com/)).

## :link: Enlaces
- [Node JS](https://nodejs.org/en/)
- [Documentación Oficial de Angular](https://angular.dev/)
- [Build your first Angular app locally](https://angular.dev/tutorials/first-app)
- [JSON Server](https://github.com/typicode/json-server/tree/v0)
