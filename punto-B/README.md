# Actividad B - Flujo de una petición Backend

## Actividad 1

### Flujo de una petición

Cliente → Ruta → Controlador → Modelo → Base de datos → Modelo → Controlador → Respuesta al cliente

---

## Actividad 2

**¿Qué componente recibe la petición HTTP y la dirige al controlador?**

La ruta.

**¿Qué componente se comunica con la base de datos?**

El modelo.

**¿Qué componente envía la respuesta HTTP al cliente?**

El controlador.

---

## Actividad 3

| Petición | Código HTTP |
|----------|-------------|
| GET      | 200 OK      |
| POST     | 201 Created |
| PUT      | 200 OK      |
| DELETE   | 200 OK      |

---

## Conclusión

La arquitectura MVC permite organizar el código separando las responsabilidades entre rutas, controladores y modelos. Esto facilita el mantenimiento, el trabajo en equipo y el crecimiento de la aplicación.