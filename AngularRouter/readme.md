# An empty starter with routing pages using Angular, animation and bootstrap

### Add to htaccess to redirect to page if refreshing browser window. Only if using
###### app.js
```
$locationProvider.html5Mode(true);
$locationProvider.hashPrefix('!');
```
###### .htaccess
```
Redirect /yourrootfolder/pagename /yourrootfolder/#!/pagename
```
![Routing](routing.jpg)
