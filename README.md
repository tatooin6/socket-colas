# **ServiDesk**   
Sistema de gestión de turnos para optimizar la atención en escritorios, cajas y plataformas.*

## **Descripción**
**ServiDesk** es un sistema ligero de gestión de turnos diseñado para mejorar la organización en espacios de atención al cliente, como bancos, oficinas gubernamentales y centros de servicio. Utiliza **Node.js**, **Express** y **Socket.io** para una comunicación en tiempo real entre los usuarios y los escritorios de atención.  

El sistema permite:  
✅ Generar tickets de atención.  
✅ Asignar turnos a escritorios.  
✅ Visualizar los tickets en tiempo real.  
✅ Atender a los clientes de manera ordenada y eficiente.  

---

## ⚙️ **Instalación**
Para ejecutar **ServiDesk** en tu máquina local, sigue estos pasos:  

### 1️ Clonar el repositorio
```bash
git clone https://github.com/tatooin6/socket-colas.git ServiDesk
cd ServiDesk
```

### 2️ Instalar dependencias
Ejecuta el siguiente comando para instalar los módulos de Node.js:
```bash
npm install
```

### 3️ Iniciar el servidor  
Para iniciar el servidor en **modo producción**:
```bash
npm start
```
Para iniciar el servidor en **modo desarrollo** con recarga automática:
```bash
npm run dev
```

El servidor se ejecutará en http://localhost:3000 por defecto.

---

## 🖥️ **Uso del Sistema**
1. **Interfaz Principal:**  
   - Los usuarios pueden generar nuevos tickets de atención.  
   - Los empleados pueden ingresar su número de escritorio para comenzar a atender.  

2. **Modos de Visualización:**  
   - 📺 *Pantalla Pública:* Muestra el turno actual y los próximos en la fila.  
   - 🎫 *Generar Ticket:* Permite a los clientes obtener un número en la fila de espera.  
   - 🖥️ *Escritorio:* Los empleados pueden ver y atender los turnos asignados a su escritorio.  

---

## 🛠️ **Tecnologías Utilizadas**
- **Node.js** - Servidor backend.  
- **Express.js** - Framework para manejo de rutas y API.  
- **Socket.io** - Comunicación en tiempo real.  
- **Bootstrap 4** - Diseño responsivo y estilización.  
- **FontAwesome** - Íconos para la UI.  

---

## 🏗️ **Futuras Mejoras**
✔ **Dockerización**: Crear contenedores para facilitar el despliegue y la portabilidad.  
✔ **Soporte para múltiples tipos de atención** (cajas, plataformas, etc.).  
✔ **Atención preferencial** para personas con capacidades diferentes, mujeres embarazadas y adultos mayores.  
✔ **Reportes y estadísticas** sobre turnos atendidos.  
✔ **Modo multiusuario** con autenticación.  

---

## 💡 **Contribuir**
Si deseas mejorar **ServiDesk**, ¡toda contribución es bienvenida!   
Puedes crear un *fork* del proyecto y hacer un **pull request** con tus mejoras.

---

## 📝 **Licencia**

Este proyecto está bajo la licencia **MIT**.  
