
# Prueba Técnica — React Developer

## TaskFlow — Gestor de tareas

### Descripción

Desarrolla una pequeña aplicación web para la gestión de tareas de un equipo utilizando **React + TypeScript**.

La aplicación debe permitir consultar, crear, editar, eliminar y filtrar tareas.

El objetivo de la prueba es evaluar tus conocimientos de React, TypeScript, gestión de estado, organización del código y capacidad para construir una interfaz funcional y clara.

**Tiempo disponible: 2 horas y 30 minutos.**

---

## Tecnologías

### Obligatorio

* React
* TypeScript
* Vite
* CSS o Tailwind CSS
* React Hooks

### Opcional

Puedes utilizar otras librerías si consideras que aportan valor al proyecto, por ejemplo:

* React Hook Form
* Zod
* React Router
* Vitest / Jest
* Context API

No es necesario desarrollar un backend.

---

# Requisitos funcionales

## 1. Listado de tareas

La aplicación deberá mostrar un listado de tareas.

Cada tarea debe mostrar como mínimo:

* Título
* Descripción
* Estado
* Prioridad
* Responsable
* Fecha de vencimiento

### Estados disponibles

* `Todo`
* `In Progress`
* `Done`

### Prioridades disponibles

* `Low`
* `Medium`
* `High`

El usuario deberá poder:

* Buscar tareas por título.
* Filtrar por estado.
* Filtrar por prioridad.
* Ordenar las tareas por fecha de vencimiento.

Puedes utilizar una tabla, cards o cualquier otra representación que consideres adecuada.

---

## 2. Crear tarea

La aplicación deberá disponer de un botón **"Add task"**.

Al pulsarlo, se deberá mostrar un formulario o modal para crear una nueva tarea.

### Campos

* Title *
* Description
* Status *
* Priority *
* Assignee *
* Due date

### Validaciones

* El título es obligatorio.
* La descripción no puede superar los 500 caracteres.
* El estado es obligatorio.
* La prioridad es obligatoria.
* El responsable es obligatorio.

Una vez creada la tarea, deberá aparecer inmediatamente en el listado.

---

## 3. Editar tarea

Cada tarea deberá disponer de una acción **"Edit"**.

Al seleccionarla, se deberá abrir el formulario con los datos actuales de la tarea.

El usuario deberá poder modificar cualquiera de sus campos y guardar los cambios.

---

## 4. Eliminar tarea

Cada tarea deberá disponer de una acción **"Delete"**.

Antes de eliminar una tarea, deberá solicitarse confirmación al usuario.

Una vez confirmada la eliminación, la tarea deberá desaparecer del listado.

---

# Datos

Se proporcionará un archivo `tasks.json` con los datos iniciales.

Ejemplo:

```json
[
  {
    "id": 1,
    "title": "Implement login",
    "description": "Create the login page",
    "status": "in_progress",
    "priority": "high",
    "assignee": "John Doe",
    "dueDate": "2026-09-20"
  },
  {
    "id": 2,
    "title": "Create dashboard",
    "description": "Build the main dashboard",
    "status": "todo",
    "priority": "medium",
    "assignee": "Jane Smith",
    "dueDate": "2026-09-25"
  }
]
```

No es necesario implementar persistencia en un servidor.

Los cambios pueden mantenerse utilizando el estado de React.

Como funcionalidad adicional, puedes utilizar `localStorage` para mantener los cambios después de recargar la página.

---

# Estados de la interfaz

La aplicación deberá contemplar diferentes estados de UI:

### Loading

Mostrar un estado de carga mientras se obtienen los datos.

### Error

Mostrar un mensaje cuando se produzca un error al obtener los datos.

### Empty state

Mostrar un mensaje adecuado cuando no existan tareas o cuando los filtros no devuelvan resultados.

### Data

Mostrar el listado de tareas cuando existan datos.

---

# Requisitos técnicos

Se valorará especialmente:

* Uso adecuado de React.
* Uso correcto de TypeScript.
* Creación de componentes reutilizables.
* Gestión adecuada del estado.
* Uso apropiado de React Hooks.
* Definición de tipos/interfaces.
* Separación de responsabilidades.
* Código limpio y fácil de mantener.
* Evitar componentes excesivamente grandes.
* Estructura de proyecto coherente.

No es necesario utilizar una arquitectura compleja. Se busca una solución sencilla, clara y mantenible.

---

# Diseño y UX

No se requiere un diseño visual complejo.

Se valorará que la aplicación tenga:

* Interfaz clara.
* Buena jerarquía visual.
* Diseño responsive básico.
* Estados `hover` y `focus`.
* Formularios fáciles de utilizar.
* Feedback visual después de realizar acciones.
* Consistencia visual entre los diferentes componentes.

Puedes utilizar tu propio diseño o partir de la referencia proporcionada.

---

# Bonus

Estas funcionalidades no son obligatorias, pero pueden aportar valor:

* Persistencia con `localStorage`.
* Tests unitarios o de componentes.
* React Hook Form.
* Zod para validación.
* Context API.
* React Router.
* Animaciones o microinteracciones.
* Accesibilidad.
* Dark mode.

Los extras no deben realizarse en detrimento de los requisitos principales.

---

# Entrega

El proyecto deberá entregarse en un repositorio Git.

El repositorio deberá incluir un `README.md` con:

* Instrucciones para instalar y ejecutar el proyecto.
* Decisiones técnicas relevantes.
* Funcionalidades implementadas.
* Funcionalidades adicionales implementadas.
* Qué funcionalidades o mejoras realizarías con más tiempo.

---

# Criterios de evaluación

| Área                |           Peso |
| -------------------- | -------------: |
| React y arquitectura |            25% |
| TypeScript           |            15% |
| Gestión de estado   |            15% |
| Funcionalidad        |            20% |
| UI / UX              |            10% |
| Calidad del código  |            10% |
| Documentación       |             5% |
| **Total**      | **100%** |

---

# Consideraciones

El objetivo no es completar el mayor número posible de funcionalidades, sino demostrar capacidad para construir una aplicación funcional y mantenible dentro del tiempo disponible.

Si no puedes completar algún requisito, prioriza los requisitos principales y documenta en el README qué quedaría pendiente y cómo lo implementarías.

**Tiempo máximo: 2 horas y 30 minutos.**
