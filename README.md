Sticky-footer-CSS-and-jQuery
============================
***Sticky Footer*** is very specify and have a lot tricks. But, only two tricks is correct and work in different situation.<br/>
First, you must think and choose which trick you will use:
- if footer doesn't be responisive - use *CSS trick*;
- if footer doesn't change height - use *CSS trick*;
- if footer will be responsive - use *jQuery trick*;
- if footer will be change height - use *jQuery trick*.

You ask me:<br/>
*Why we choose trick and what difference between CSS trick and jQuery trick ?*
> Yes, we may always use jQuery trick. It's better and more fail-safe.<br/>
> But, I always keep the rule: " If you can implement by CSS and it not broke your project do it ". 
> CSS much better for browser speed, doesn't have to be evaluated by the browser.
> jQuery has to be evaluated by the browser. 
> But, you always must look ahead what will be with your stuff.


If you choose what trick use, you can start to create or edit **html** file.<br/>
***HTML*** structure must be:
```html
<div id="wrapper">

  <div class="header">...</div>
  
  <div class="container">...</div>
  
  <div id="push"></div>
  
</div>

<div id="footer">
  ...
</div>
```
The **footer** needs to sit outside the wrapper because we will be checking the height in **wrapper**.<br/>
id=***"push"*** need it because we prepared space for footer when container will be more.<br/>
Let's start:


###CSS trick
```css
/* General */
* {
    margin: 0;
    padding: 0;
}
html,body {
    height: 100%;
}

/* Main */
#wrapper {
    min-height: 100%;
}
#push {
    height: 55px;
}
#footer {
    height: 55px;
    margin-top: -55px;
}
```


###jQuery trick


