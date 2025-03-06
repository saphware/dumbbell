# API Documentation
Se mencionará a detalle las apis internas que tiene la base de datos. Se datallará que, en el caso que lo necesiten, que parametrso espera y que devuelve y casos de error.

## is\_email\_whitelisted

### Descripción

Verifica si un correo electrónico está en la lista blanca de correos permitidos y devuelve el ID de la compañía asociada si aplica.

### **Endpoint**

`GET /rpc/is_email_whitelisted`

### **Parámetros**

| Nombre           | Tipo   | Descripción                     |
| ---------------- | ------ | ------------------------------- |
| `email_to_check` | `TEXT` | Correo electrónico a verificar. |

### **Respuesta**

| Campo        | Tipo      | Descripción                                    |
| ------------ | --------- | ---------------------------------------------- |
| `is_allowed` | `BOOLEAN` | Indica si el email está en la lista blanca.    |
| `company_id` | `BIGINT`  | ID de la empresa asociada (NULL si no aplica). |

### **Ejemplo de Llamada**

```json
{
  "email_to_check": "usuario@example.com"
}
```

### **Ejemplo de Respuesta (Email permitido)**

```json
{
  "is_allowed": true,
  "company_id": 12345
}
```

### **Ejemplo de Respuesta (Email no permitido)**

```json
{
  "is_allowed": false,
  "company_id": null
}
```
### **Ejemplo de Respuesta (Email nulo)**
#### Llamada

```json
{
}
```

```json
{
	"code": "P0001",
	"details": null,
	"hint": null,
	"message": "El parámetro email es obligatorio"
}
```
### **Notas**
- Si el correo no está en `whiteListEmail`, la función devuelve `false` y `company_id` como `NULL`.



## assign\_random\_coach

### Descripción

Asigna un coach aleatorio a un cliente (o viceversa) 

### **Endpoint**

`POST /rpc/assign_client_to_random_coach`

### **Parámetros**

| Nombre           | Tipo   | Descripción                     |
| ---------------- | ------ | ------------------------------- |
| `id_client` | `INT`       | Id del cliente. |

### **Respuesta**

| Campo        | Tipo      | Descripción                                    |
| ------------ | --------- | ---------------------------------------------- |
| `status_code` | `int` | Indica si fue registrado correctamente o hubo un error.    |
| `message` | `text`  | Mensaje. |

### **Ejemplo de Llamada**

```json
{
  "id_client": "5"
}
```

### **Ejemplo de Respuesta (Email permitido)**

```json
{
  "status_code": 200,
  "message": "Coach asignado correctamente"
}
```

### **Ejemplo de Respuesta (Relacion ya existente)**

```json
{
  "status_code": 400,
  "message": "La relacion ya existe"
}
```
### **Ejemplo de Respuesta (El id client no exite)**
#### Llamada

```json
{
  "status_code": 404,
  "message": "El cliente no existe"
}
```

### **Ejemplo de Respuesta (No hay coaches disponibles)**
#### Llamada

```json
{
  "status_code": 404,
  "message": "No hay coaches disponibles"
}
```
### **Notas**
- Si el correo no está en `whiteListEmail`, la función devuelve `false` y `company_id` como `NULL`.




