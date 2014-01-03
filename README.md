# lygrafmajik

> GraphicsMagick wrapper for node.js

## What's lygrafmajik ?

In fact, **lygrafmajik** is simple (not as the name I choose).

It's just a simple wrapper to the CLI of **GraphicsMagick** for *Node.js*.

### Why don't you use the npm module for GraphicsMagick ?

I think the [npm module for GraphicsMagick](https://npmjs.org/package/gm) is really, really great.  
But when dealing with big images on large websites, the processing time is way too big.

So I write an handler to deal with the CLI, but without control, without verification.
You must use the documentation of GraphicsMagick to know what parameters to give to each methods.

## Getting Started
Install the module with: `npm install lygrafmajik`

```javascript
lgm = require('lygrafmajik');

lgm( "./from_file.jpg", "./to_file.jpg" )
    .convert
    .size( "100x100" )
    .strip()
    .interlace( "Line" )
    .geometry( "100x100^>" )
    .gravity( "Center" )
    .extent( "100x100" )
    .quality( 95 )
    .exec( function( oError ) {
        // do awesome things !
    } );
```

## Documentation

After including the module and storing to a variable, initiate an lygrafmajik object by calling it : 

It accept two parameters : `source path` and `destination path`.

```javascript
lgm = require('lygrafmajik');
myImage = lgm( "./from_file.jpg", "./to_file.jpg" );
```

After that, you must precise the GraphicsMagick utility you want to use.

For now, two are supported : [convert](http://www.graphicsmagick.org/convert.html) and [identify](http://www.graphicsmagick.org/identify.html).

```javascript
myImage.convert;
```

Then, you can call all the options you want to use to treat your image.  
Refer to the doc of [convert](http://www.graphicsmagick.org/convert.html) and [identify](http://www.graphicsmagick.org/identify.html) to know the usage.

```javascript
myImage.strip();
myImage.geometry( "100x100^>" )
myImage.gravity( "Center" );
```

When all is set, you can call the exec method to let the magic happens. 
The optional callback function get three parameters : 
* **error** `Error`
* **stdout** `Buffer`
* **stderr** `Buffer`
Those are the three parameters of the [child_process.exec's node.js command callback](http://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback).

```javascript
myImage.exec( function( oError ) {
    if( oError ) {
        // do less awesome things...
    }
} );
```

As each methods of lygrafmajik object returns itself, all the above methods can be chained, *jQuery-style* : 

lgm = require('lygrafmajik');

myImage = lgm( "./from_file.jpg", "./to_file.jpg" )
    .convert
    .size( "100x100" )
    .strip()
    .interlace( "Line" )
    .geometry( "100x100^>" )
    .gravity( "Center" )
    .extent( "100x100" )
    .quality( 95 )
    .exec( function( oError ) {
        if( oError ) {
            // do less awesome things...
        }
    } );

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* **2014/01/03** : v0.1.0

## License
Copyright (c) 2014 Leny  
Licensed under the MIT license.

## TODO

* Writing Unit tests ;)
