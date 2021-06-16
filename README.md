# Urbania

## Motivos:
**Es un proyecto de de juego RPG desarrollado meramente basado en entretenimiento donde la idea es seleccionar a travéz de una plantilla de heroe y poder competir contra diversos personajes.**

**La V1 consiste en personajes sacados de  plantillas (Heroes) ya pre desarrolladas y después la idea sería que el usuario pueda crear su propio personajes a medida.**

---
<br>

## Funcionalidades y casos de uso

- Batalla entre el personaje del usuario y un villano ya pre desarrollado.
- Conseguir monedas para, en una versión posterior, comprar artilugios.
- Subir de nivel.
- Tener más de un personaje por usuario, en una versión posterior.

---
<br>

## Actores/roles

- Usuario => Jugador.

---
<br>

## Entidades pricnipales

- Heroes.
- Villanos.
- Personajes.
- usario.

---
<br>

## Como usar

**Solicitar fichero .env para poder acceder a los endpoints.**

```
npm i
```

Para correrlo en desarrollo
```
npm run startDev
```

Para el build de producción:
```
npm run start
```

## Endpoints - Heroes

### GET

```
api/heroes/
```

```
api/heroes/:id
```

PUT

```
api/heroes/:id
```

POST

```
api/heroes/
```

DELETE

```
api/heroes/:id
```

<br>

## Endpoints - Personajes

### GET

```
api/personajes/
```

```
api/personajes/:id
```

PUT

```
api/personajes/:id
```

POST

```
api/personajes/
```

DELETE

```
api/personajes/:id
```
