# Flexbox
Flexbox es un sistema de diseño de CSS que nos va a permitir alinear y dsitribuir el espacio entre elementos de una forma eficiente y sencilla, incluso cuando el tamaño sea desconocido.

## Como uso flexbox
Dentro de tu caja padre o elemento padre, llamaras a tal etiqueta desde css y pondras `display: flex`

```html
<div class="container">
   <div>1</div>
   <div>2</div>
   <div>3</div>
   <div>4</div>
</div>
```
Yo debo en mi css llamar a la clase container
```css
.container{
   display: flex
}
```