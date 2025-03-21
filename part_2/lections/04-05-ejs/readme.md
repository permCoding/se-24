# Шаблонизатор ejs  

> установка: `npm install ejs`  
> [ejs docs](https://ejs.co/#docs)  

---  

Отправить на рендеринг html-страницы:  

```js
app.get('/', (req, res) => {
   res.render('index', object);
});
```

- index - это index.ejs - html-шаблон для заполнения  
- object - это пары ключ-значение для заполнения шаблона  

---  

Пример условного оператора:  

```js
<% if (user) { %>
   <h2><%= user.name %></h2>
<% } %>
```

---  

Пример цикла:  

```js

```

---  