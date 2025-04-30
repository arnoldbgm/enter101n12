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

## Justify-content
![Img](https://miro.medium.com/v2/resize:fit:434/1*iigDGiNFBOUVJQ_07C1B2g.png)

Nostros podemos señalar como van a actuar los elementos hijos, si queremos que estos esten centrados colocariamos `justify-content:center;`

🔴 Recuerda que las propiedades de `justify-content` solo se pueden invocar dentro del elemento padre donde usaste flex

```css
.container{
   display: flex;
   justify-content:center;
}
```

## Align-items
Con `align-items:center` nosotros podemos centrar de manera vertical nuestros elementos hijos.

```css
.container{
   display: flex;
   align-items:center;
}
```

## Gap
El gap me va permitir generar espacio entre mis cajas `gap: 2px;`

```css
.container{
   display: flex;
   gap: 2px;
}
```