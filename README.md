# ATOM FE CHALLENGE TEMPLATE - ANGULAR

Este proyecto es una plantilla con lo necesario para comenzar a desarrollar el front-end de la aplicación de la prueba técnica de Atom. Se base en Angular con la versión 17.3.6.
Se ha realizado la instalación y configuración de varias dependencias necesarias para el desarrollo de la aplicación, como por ejemplo: Angular Material.

## Instrucciones
Siéntete libre de clonar este repositorio y utilizarlo como base para el desarrollo de la aplicación. Sigue las indicates de la prueba técnica para completar la aplicación y desarrolla como más te sientas cómodo.

De igual manera puedes documentar dentro de este archivo todo lo que deseas contar sobre tu desarrollo, como por ejemplo, decisiones de diseño, problemas encontrados, etc.

## Comentarios sobre el desarrollo

Para el desarrollo se pensó en varios factores importantes.

## Primero 
Por tema de seguridad crear una autenticación por token para poder generar una capa de seguridad y que no cualquier persona con acceso a los endpoint pueda obtener información.
También se crearon interfaces para el acceso seguro a los datos 

## Segundo
Se manejo una interfaz de usuario limpia y se manejo una experiencia de usuario sutil, manejando la paleta de colores y adecuación de los componentes al tamaño de las diferentes pantallas,

## Tercero.
Se realizó una estructura de carpetas que permite modularizar la aplicación pensando en su crecimiento a futuro, tomando como base los principios de clean code y la creación de componentes.


## DEMO

https://drive.google.com/file/d/1MJkc5phSr7ZWbguoWna-RI6oyvs8gup9/view?usp=sharing

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Build the application for production
ng build --configuration production

## Initialize Firebase (if you haven't done so before)
firebase start

## Deploy the application
firebase deployment
