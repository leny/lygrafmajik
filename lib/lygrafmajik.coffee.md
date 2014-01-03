# lygrafmajik
> GraphicsMagick wrapper for node.js

[leny/lygrafmajik](https://github.com/Leny/lygrafmajik)

Copyright (c) 2014 Leny
Licensed under the MIT license.

* * *

    "use strict"

    util = require "util"

We use a class named LyGrafikMajik, each instance represent an image manipulation.

    class LyGrafikMajik

        constructor: ( @from = "", @to = "" ) ->
            @utility = "none"
            @parts = []

            if util.isArray @from
                @from = @from.join " "

            if util.isArray @to
                @to = @to.join " "

Creating utility properties.

            Object.defineProperty @, "convert",
                get: ->
                    @utility = "convert"
                    @

            Object.defineProperty @, "identify",
                get: ->
                    @utility = "identify"
                    @

Execution method.

        exec: ( fNext ) ->
            @command = ( "gm " + @utility + " " + @parts.join( " " ) + " " + @from + " " + @to ).replace /(<|>)/gi, "'$1'"
            require( "child_process" ).exec @command, fNext
            @

Handling options.

        _registerOption = ( name, params ) ->
            @parts.push "-#{ name } " + [].slice.call( params, 0 ).join " "
            @

        "adjoin": -> _registerOption.call @, "adjoin", arguments
        "affine": -> _registerOption.call @, "affine", arguments
        "antialias": -> _registerOption.call @, "antialias", arguments
        "append": -> _registerOption.call @, "append", arguments
        "asc-cdl": -> _registerOption.call @, "asc-cdl", arguments
        "authenticate": -> _registerOption.call @, "authenticate", arguments
        "auto-orient": -> _registerOption.call @, "auto-orient", arguments
        "average": -> _registerOption.call @, "average", arguments
        "background": -> _registerOption.call @, "background", arguments
        "black-threshold": -> _registerOption.call @, "black-threshold", arguments
        "blue-primary": -> _registerOption.call @, "blue-primary", arguments
        "blur": -> _registerOption.call @, "blur", arguments
        "border": -> _registerOption.call @, "border", arguments
        "bordercolor": -> _registerOption.call @, "bordercolor", arguments
        "box": -> _registerOption.call @, "box", arguments
        "channel": -> _registerOption.call @, "channel", arguments
        "charcoal": -> _registerOption.call @, "charcoal", arguments
        "chop": -> _registerOption.call @, "chop", arguments
        "clip": -> _registerOption.call @, "clip", arguments
        "coalesce": -> _registerOption.call @, "coalesce", arguments
        "colorize": -> _registerOption.call @, "colorize", arguments
        "colors": -> _registerOption.call @, "colors", arguments
        "colorspace": -> _registerOption.call @, "colorspace", arguments
        "comment": -> _registerOption.call @, "comment", arguments
        "compose": -> _registerOption.call @, "compose", arguments
        "compress": -> _registerOption.call @, "compress", arguments
        "contrast": -> _registerOption.call @, "contrast", arguments
        "convolve": -> _registerOption.call @, "convolve", arguments
        "crop": -> _registerOption.call @, "crop", arguments
        "cycle": -> _registerOption.call @, "cycle", arguments
        "debug": -> _registerOption.call @, "debug", arguments
        "deconstruct": -> _registerOption.call @, "deconstruct", arguments
        "define": -> _registerOption.call @, "define", arguments
        "delay": -> _registerOption.call @, "delay", arguments
        "density": -> _registerOption.call @, "density", arguments
        "depth": -> _registerOption.call @, "depth", arguments
        "despeckle": -> _registerOption.call @, "despeckle", arguments
        "display": -> _registerOption.call @, "display", arguments
        "dispose": -> _registerOption.call @, "dispose", arguments
        "dither": -> _registerOption.call @, "dither", arguments
        "draw": -> _registerOption.call @, "draw", arguments
        "edge": -> _registerOption.call @, "edge", arguments
        "emboss": -> _registerOption.call @, "emboss", arguments
        "encoding": -> _registerOption.call @, "encoding", arguments
        "endian": -> _registerOption.call @, "endian", arguments
        "enhance": -> _registerOption.call @, "enhance", arguments
        "equalize": -> _registerOption.call @, "equalize", arguments
        "extent": -> _registerOption.call @, "extent", arguments
        "fill": -> _registerOption.call @, "fill", arguments
        "filter": -> _registerOption.call @, "filter", arguments
        "flatten": -> _registerOption.call @, "flatten", arguments
        "flip": -> _registerOption.call @, "flip", arguments
        "flop": -> _registerOption.call @, "flop", arguments
        "font": -> _registerOption.call @, "font", arguments
        "format": -> _registerOption.call @, "format", arguments
        "frame": -> _registerOption.call @, "frame", arguments
        "fuzz": -> _registerOption.call @, "fuzz", arguments
        "gamma": -> _registerOption.call @, "gamma", arguments
        "gaussian": -> _registerOption.call @, "gaussian", arguments
        "geometry": -> _registerOption.call @, "geometry", arguments
        "gravity": -> _registerOption.call @, "gravity", arguments
        "green-primary": -> _registerOption.call @, "green-primary", arguments
        "hald-clut": -> _registerOption.call @, "hald-clut", arguments
        "help": -> _registerOption.call @, "help", arguments
        "implode": -> _registerOption.call @, "implode", arguments
        "intent": -> _registerOption.call @, "intent", arguments
        "interlace": -> _registerOption.call @, "interlace", arguments
        "label": -> _registerOption.call @, "label", arguments
        "lat": -> _registerOption.call @, "lat", arguments
        "level": -> _registerOption.call @, "level", arguments
        "limit": -> _registerOption.call @, "limit", arguments
        "list": -> _registerOption.call @, "list", arguments
        "log": -> _registerOption.call @, "log", arguments
        "loop": -> _registerOption.call @, "loop", arguments
        "magnify": -> _registerOption.call @, "magnify", arguments
        "map": -> _registerOption.call @, "map", arguments
        "mask": -> _registerOption.call @, "mask", arguments
        "matte": -> _registerOption.call @, "matte", arguments
        "mattecolor": -> _registerOption.call @, "mattecolor", arguments
        "median": -> _registerOption.call @, "median", arguments
        "minify": -> _registerOption.call @, "minify", arguments
        "modulate": -> _registerOption.call @, "modulate", arguments
        "monitor": -> _registerOption.call @, "monitor", arguments
        "monochrome": -> _registerOption.call @, "monochrome", arguments
        "morph": -> _registerOption.call @, "morph", arguments
        "mosaic": -> _registerOption.call @, "mosaic", arguments
        "motion-blur": -> _registerOption.call @, "motion-blur", arguments
        "negate": -> _registerOption.call @, "negate", arguments
        "noise": -> _registerOption.call @, "noise", arguments
        "noop": -> _registerOption.call @, "noop", arguments
        "normalize": -> _registerOption.call @, "normalize", arguments
        "opaque": -> _registerOption.call @, "opaque", arguments
        "operator": -> _registerOption.call @, "operator", arguments
        "ordered-dither": -> _registerOption.call @, "ordered-dither", arguments
        "orient": -> _registerOption.call @, "orient", arguments
        "page": -> _registerOption.call @, "page", arguments
        "paint": -> _registerOption.call @, "paint", arguments
        "pen": -> _registerOption.call @, "pen", arguments
        "ping": -> _registerOption.call @, "ping", arguments
        "pointsize": -> _registerOption.call @, "pointsize", arguments
        "preview": -> _registerOption.call @, "preview", arguments
        "process": -> _registerOption.call @, "process", arguments
        "profile": -> _registerOption.call @, "profile", arguments
        "quality": -> _registerOption.call @, "quality", arguments
        "raise": -> _registerOption.call @, "raise", arguments
        "random-threshold": -> _registerOption.call @, "random-threshold", arguments
        "recolor": -> _registerOption.call @, "recolor", arguments
        "red-primary": -> _registerOption.call @, "red-primary", arguments
        "region": -> _registerOption.call @, "region", arguments
        "render": -> _registerOption.call @, "render", arguments
        "repage": -> _registerOption.call @, "repage", arguments
        "resample": -> _registerOption.call @, "resample", arguments
        "resize": -> _registerOption.call @, "resize", arguments
        "roll": -> _registerOption.call @, "roll", arguments
        "rotate": -> _registerOption.call @, "rotate", arguments
        "sample": -> _registerOption.call @, "sample", arguments
        "sampling-factor": -> _registerOption.call @, "sampling-factor", arguments
        "scale": -> _registerOption.call @, "scale", arguments
        "scene": -> _registerOption.call @, "scene", arguments
        "set": -> _registerOption.call @, "set", arguments
        "segment": -> _registerOption.call @, "segment", arguments
        "shade": -> _registerOption.call @, "shade", arguments
        "sharpen": -> _registerOption.call @, "sharpen", arguments
        "shave": -> _registerOption.call @, "shave", arguments
        "shear": -> _registerOption.call @, "shear", arguments
        "size": -> _registerOption.call @, "size", arguments
        "solarize": -> _registerOption.call @, "solarize", arguments
        "spread": -> _registerOption.call @, "spread", arguments
        "strip": -> _registerOption.call @, "strip", arguments
        "stroke": -> _registerOption.call @, "stroke", arguments
        "strokewidth": -> _registerOption.call @, "strokewidth", arguments
        "swirl": -> _registerOption.call @, "swirl", arguments
        "texture": -> _registerOption.call @, "texture", arguments
        "threshold": -> _registerOption.call @, "threshold", arguments
        "thumbnail": -> _registerOption.call @, "thumbnail", arguments
        "tile": -> _registerOption.call @, "tile", arguments
        "transform": -> _registerOption.call @, "transform", arguments
        "transparent": -> _registerOption.call @, "transparent", arguments
        "treedepth": -> _registerOption.call @, "treedepth", arguments
        "trim": -> _registerOption.call @, "trim", arguments
        "type": -> _registerOption.call @, "type", arguments
        "units": -> _registerOption.call @, "units", arguments
        "unsharp": -> _registerOption.call @, "unsharp", arguments
        "use-pixmap": -> _registerOption.call @, "use-pixmap", arguments
        "verbose": -> _registerOption.call @, "verbose", arguments
        "version": -> _registerOption.call @, "version", arguments
        "view": -> _registerOption.call @, "view", arguments
        "virtual-pixel": -> _registerOption.call @, "virtual-pixel", arguments
        "wave": -> _registerOption.call @, "wave", arguments
        "white-point": -> _registerOption.call @, "white-point", arguments
        "white-threshold": -> _registerOption.call @, "white-threshold", arguments
        "write": -> _registerOption.call @, "write", arguments

Factory static method.

        @factory: ( from, to ) ->
            new LyGrafikMajik from, to

Exporting factory.

    module.exports = LyGrafikMajik.factory

