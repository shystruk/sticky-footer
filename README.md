Sticky-footer-CSS-and-jQuery
============================
***Sticky Footer*** is very specify and have a lot tricks. But, only two tricks is correct and work in different situation.<br/>
First, you must think and choose which trick you will use:
- if footer doesn't be responsive - use *CSS trick*;
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
If we want to use jQuery we include ***library jQuery*** [Donwload jQuery](http://jquery.com/download/) and file ***main.js***.
```html
<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
<script type="text/javascript" src="main.js"></script>
```

Our ***html*** file look little bit different like file for ***CSS trick***:
```html
<div id="wrapper">

    <div class="header">...</div>
    
    <div class="container">...</div>
    
</div>

<div id="js-footer" class="footer">
    ...
</div>
```

Adding ***css style*** for our blocks:
```css
#wrapper {
    position: relative;
}
.footer {
    width: 100%;
    padding: 10px 0;
}
.footer-sticky {
    position: absolute;
    bottom: 0;
}
.footer-static {
    position: static;
}
```

And last step is write jQuery code for ***footer***:
```javascript
$(function() {
    //Variables
    var footer = $('#js-footer'),
        footerHeight = footer.innerHeight();

    //Now we check document height and window height
    if (($(document.body).height() + footerHeight) < $(window).height()) {
        footer.addClass('footer-sticky'); //If window height more than document height we add class
    } else {
        footer.addClass('footer-static'); //If window height less than document height we add class
    }
});
```

Information
============
If you have some question, problem or improvement for this tricks create issue and we will discuss.<br/>
Thank you!

License
========
[MIT License](http://opensource.org/licenses/mit-license.php)


