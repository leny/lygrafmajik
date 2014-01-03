"use strict";
var LyGrafikMajik;

LyGrafikMajik = (function() {
  var _registerOption;

  function LyGrafikMajik(from, to) {
    this.utility = "none";
    this.from = "";
    this.to = "";
    this.parts = [];
    if (typeof from === "string") {
      this.from = from;
    } else {
      this.from = from.join(" ");
    }
    if (typeof to === "string") {
      this.to = to;
    } else {
      this.to = to.join(" ");
    }
    Object.defineProperty(this, "convert", {
      get: function() {
        this.utility = "convert";
        return this;
      }
    });
    Object.defineProperty(this, "identify", {
      get: function() {
        this.utility = "identify";
        return this;
      }
    });
  }

  LyGrafikMajik.prototype.exec = function(fNext) {
    this.command = ("gm " + this.utility + " " + this.parts.join(" ") + " " + this.from + " " + this.to).replace(/(<|>)/gi, "'$1'");
    require("child_process").exec(this.command, fNext);
    return this;
  };

  _registerOption = function(name, params) {
    this.parts.push(("-" + name + " ") + [].slice.call(params, 0).join(" "));
    return this;
  };

  LyGrafikMajik.prototype["adjoin"] = function() {
    return _registerOption.call(this, "adjoin", arguments);
  };

  LyGrafikMajik.prototype["affine"] = function() {
    return _registerOption.call(this, "affine", arguments);
  };

  LyGrafikMajik.prototype["antialias"] = function() {
    return _registerOption.call(this, "antialias", arguments);
  };

  LyGrafikMajik.prototype["append"] = function() {
    return _registerOption.call(this, "append", arguments);
  };

  LyGrafikMajik.prototype["asc-cdl"] = function() {
    return _registerOption.call(this, "asc-cdl", arguments);
  };

  LyGrafikMajik.prototype["authenticate"] = function() {
    return _registerOption.call(this, "authenticate", arguments);
  };

  LyGrafikMajik.prototype["auto-orient"] = function() {
    return _registerOption.call(this, "auto-orient", arguments);
  };

  LyGrafikMajik.prototype["average"] = function() {
    return _registerOption.call(this, "average", arguments);
  };

  LyGrafikMajik.prototype["background"] = function() {
    return _registerOption.call(this, "background", arguments);
  };

  LyGrafikMajik.prototype["black-threshold"] = function() {
    return _registerOption.call(this, "black-threshold", arguments);
  };

  LyGrafikMajik.prototype["blue-primary"] = function() {
    return _registerOption.call(this, "blue-primary", arguments);
  };

  LyGrafikMajik.prototype["blur"] = function() {
    return _registerOption.call(this, "blur", arguments);
  };

  LyGrafikMajik.prototype["border"] = function() {
    return _registerOption.call(this, "border", arguments);
  };

  LyGrafikMajik.prototype["bordercolor"] = function() {
    return _registerOption.call(this, "bordercolor", arguments);
  };

  LyGrafikMajik.prototype["box"] = function() {
    return _registerOption.call(this, "box", arguments);
  };

  LyGrafikMajik.prototype["channel"] = function() {
    return _registerOption.call(this, "channel", arguments);
  };

  LyGrafikMajik.prototype["charcoal"] = function() {
    return _registerOption.call(this, "charcoal", arguments);
  };

  LyGrafikMajik.prototype["chop"] = function() {
    return _registerOption.call(this, "chop", arguments);
  };

  LyGrafikMajik.prototype["clip"] = function() {
    return _registerOption.call(this, "clip", arguments);
  };

  LyGrafikMajik.prototype["coalesce"] = function() {
    return _registerOption.call(this, "coalesce", arguments);
  };

  LyGrafikMajik.prototype["colorize"] = function() {
    return _registerOption.call(this, "colorize", arguments);
  };

  LyGrafikMajik.prototype["colors"] = function() {
    return _registerOption.call(this, "colors", arguments);
  };

  LyGrafikMajik.prototype["colorspace"] = function() {
    return _registerOption.call(this, "colorspace", arguments);
  };

  LyGrafikMajik.prototype["comment"] = function() {
    return _registerOption.call(this, "comment", arguments);
  };

  LyGrafikMajik.prototype["compose"] = function() {
    return _registerOption.call(this, "compose", arguments);
  };

  LyGrafikMajik.prototype["compress"] = function() {
    return _registerOption.call(this, "compress", arguments);
  };

  LyGrafikMajik.prototype["contrast"] = function() {
    return _registerOption.call(this, "contrast", arguments);
  };

  LyGrafikMajik.prototype["convolve"] = function() {
    return _registerOption.call(this, "convolve", arguments);
  };

  LyGrafikMajik.prototype["crop"] = function() {
    return _registerOption.call(this, "crop", arguments);
  };

  LyGrafikMajik.prototype["cycle"] = function() {
    return _registerOption.call(this, "cycle", arguments);
  };

  LyGrafikMajik.prototype["debug"] = function() {
    return _registerOption.call(this, "debug", arguments);
  };

  LyGrafikMajik.prototype["deconstruct"] = function() {
    return _registerOption.call(this, "deconstruct", arguments);
  };

  LyGrafikMajik.prototype["define"] = function() {
    return _registerOption.call(this, "define", arguments);
  };

  LyGrafikMajik.prototype["delay"] = function() {
    return _registerOption.call(this, "delay", arguments);
  };

  LyGrafikMajik.prototype["density"] = function() {
    return _registerOption.call(this, "density", arguments);
  };

  LyGrafikMajik.prototype["depth"] = function() {
    return _registerOption.call(this, "depth", arguments);
  };

  LyGrafikMajik.prototype["despeckle"] = function() {
    return _registerOption.call(this, "despeckle", arguments);
  };

  LyGrafikMajik.prototype["display"] = function() {
    return _registerOption.call(this, "display", arguments);
  };

  LyGrafikMajik.prototype["dispose"] = function() {
    return _registerOption.call(this, "dispose", arguments);
  };

  LyGrafikMajik.prototype["dither"] = function() {
    return _registerOption.call(this, "dither", arguments);
  };

  LyGrafikMajik.prototype["draw"] = function() {
    return _registerOption.call(this, "draw", arguments);
  };

  LyGrafikMajik.prototype["edge"] = function() {
    return _registerOption.call(this, "edge", arguments);
  };

  LyGrafikMajik.prototype["emboss"] = function() {
    return _registerOption.call(this, "emboss", arguments);
  };

  LyGrafikMajik.prototype["encoding"] = function() {
    return _registerOption.call(this, "encoding", arguments);
  };

  LyGrafikMajik.prototype["endian"] = function() {
    return _registerOption.call(this, "endian", arguments);
  };

  LyGrafikMajik.prototype["enhance"] = function() {
    return _registerOption.call(this, "enhance", arguments);
  };

  LyGrafikMajik.prototype["equalize"] = function() {
    return _registerOption.call(this, "equalize", arguments);
  };

  LyGrafikMajik.prototype["extent"] = function() {
    return _registerOption.call(this, "extent", arguments);
  };

  LyGrafikMajik.prototype["fill"] = function() {
    return _registerOption.call(this, "fill", arguments);
  };

  LyGrafikMajik.prototype["filter"] = function() {
    return _registerOption.call(this, "filter", arguments);
  };

  LyGrafikMajik.prototype["flatten"] = function() {
    return _registerOption.call(this, "flatten", arguments);
  };

  LyGrafikMajik.prototype["flip"] = function() {
    return _registerOption.call(this, "flip", arguments);
  };

  LyGrafikMajik.prototype["flop"] = function() {
    return _registerOption.call(this, "flop", arguments);
  };

  LyGrafikMajik.prototype["font"] = function() {
    return _registerOption.call(this, "font", arguments);
  };

  LyGrafikMajik.prototype["format"] = function() {
    return _registerOption.call(this, "format", arguments);
  };

  LyGrafikMajik.prototype["frame"] = function() {
    return _registerOption.call(this, "frame", arguments);
  };

  LyGrafikMajik.prototype["fuzz"] = function() {
    return _registerOption.call(this, "fuzz", arguments);
  };

  LyGrafikMajik.prototype["gamma"] = function() {
    return _registerOption.call(this, "gamma", arguments);
  };

  LyGrafikMajik.prototype["gaussian"] = function() {
    return _registerOption.call(this, "gaussian", arguments);
  };

  LyGrafikMajik.prototype["geometry"] = function() {
    return _registerOption.call(this, "geometry", arguments);
  };

  LyGrafikMajik.prototype["gravity"] = function() {
    return _registerOption.call(this, "gravity", arguments);
  };

  LyGrafikMajik.prototype["green-primary"] = function() {
    return _registerOption.call(this, "green-primary", arguments);
  };

  LyGrafikMajik.prototype["hald-clut"] = function() {
    return _registerOption.call(this, "hald-clut", arguments);
  };

  LyGrafikMajik.prototype["help"] = function() {
    return _registerOption.call(this, "help", arguments);
  };

  LyGrafikMajik.prototype["implode"] = function() {
    return _registerOption.call(this, "implode", arguments);
  };

  LyGrafikMajik.prototype["intent"] = function() {
    return _registerOption.call(this, "intent", arguments);
  };

  LyGrafikMajik.prototype["interlace"] = function() {
    return _registerOption.call(this, "interlace", arguments);
  };

  LyGrafikMajik.prototype["label"] = function() {
    return _registerOption.call(this, "label", arguments);
  };

  LyGrafikMajik.prototype["lat"] = function() {
    return _registerOption.call(this, "lat", arguments);
  };

  LyGrafikMajik.prototype["level"] = function() {
    return _registerOption.call(this, "level", arguments);
  };

  LyGrafikMajik.prototype["limit"] = function() {
    return _registerOption.call(this, "limit", arguments);
  };

  LyGrafikMajik.prototype["list"] = function() {
    return _registerOption.call(this, "list", arguments);
  };

  LyGrafikMajik.prototype["log"] = function() {
    return _registerOption.call(this, "log", arguments);
  };

  LyGrafikMajik.prototype["loop"] = function() {
    return _registerOption.call(this, "loop", arguments);
  };

  LyGrafikMajik.prototype["magnify"] = function() {
    return _registerOption.call(this, "magnify", arguments);
  };

  LyGrafikMajik.prototype["map"] = function() {
    return _registerOption.call(this, "map", arguments);
  };

  LyGrafikMajik.prototype["mask"] = function() {
    return _registerOption.call(this, "mask", arguments);
  };

  LyGrafikMajik.prototype["matte"] = function() {
    return _registerOption.call(this, "matte", arguments);
  };

  LyGrafikMajik.prototype["mattecolor"] = function() {
    return _registerOption.call(this, "mattecolor", arguments);
  };

  LyGrafikMajik.prototype["median"] = function() {
    return _registerOption.call(this, "median", arguments);
  };

  LyGrafikMajik.prototype["minify"] = function() {
    return _registerOption.call(this, "minify", arguments);
  };

  LyGrafikMajik.prototype["modulate"] = function() {
    return _registerOption.call(this, "modulate", arguments);
  };

  LyGrafikMajik.prototype["monitor"] = function() {
    return _registerOption.call(this, "monitor", arguments);
  };

  LyGrafikMajik.prototype["monochrome"] = function() {
    return _registerOption.call(this, "monochrome", arguments);
  };

  LyGrafikMajik.prototype["morph"] = function() {
    return _registerOption.call(this, "morph", arguments);
  };

  LyGrafikMajik.prototype["mosaic"] = function() {
    return _registerOption.call(this, "mosaic", arguments);
  };

  LyGrafikMajik.prototype["motion-blur"] = function() {
    return _registerOption.call(this, "motion-blur", arguments);
  };

  LyGrafikMajik.prototype["negate"] = function() {
    return _registerOption.call(this, "negate", arguments);
  };

  LyGrafikMajik.prototype["noise"] = function() {
    return _registerOption.call(this, "noise", arguments);
  };

  LyGrafikMajik.prototype["noop"] = function() {
    return _registerOption.call(this, "noop", arguments);
  };

  LyGrafikMajik.prototype["normalize"] = function() {
    return _registerOption.call(this, "normalize", arguments);
  };

  LyGrafikMajik.prototype["opaque"] = function() {
    return _registerOption.call(this, "opaque", arguments);
  };

  LyGrafikMajik.prototype["operator"] = function() {
    return _registerOption.call(this, "operator", arguments);
  };

  LyGrafikMajik.prototype["ordered-dither"] = function() {
    return _registerOption.call(this, "ordered-dither", arguments);
  };

  LyGrafikMajik.prototype["orient"] = function() {
    return _registerOption.call(this, "orient", arguments);
  };

  LyGrafikMajik.prototype["page"] = function() {
    return _registerOption.call(this, "page", arguments);
  };

  LyGrafikMajik.prototype["paint"] = function() {
    return _registerOption.call(this, "paint", arguments);
  };

  LyGrafikMajik.prototype["pen"] = function() {
    return _registerOption.call(this, "pen", arguments);
  };

  LyGrafikMajik.prototype["ping"] = function() {
    return _registerOption.call(this, "ping", arguments);
  };

  LyGrafikMajik.prototype["pointsize"] = function() {
    return _registerOption.call(this, "pointsize", arguments);
  };

  LyGrafikMajik.prototype["preview"] = function() {
    return _registerOption.call(this, "preview", arguments);
  };

  LyGrafikMajik.prototype["process"] = function() {
    return _registerOption.call(this, "process", arguments);
  };

  LyGrafikMajik.prototype["profile"] = function() {
    return _registerOption.call(this, "profile", arguments);
  };

  LyGrafikMajik.prototype["quality"] = function() {
    return _registerOption.call(this, "quality", arguments);
  };

  LyGrafikMajik.prototype["raise"] = function() {
    return _registerOption.call(this, "raise", arguments);
  };

  LyGrafikMajik.prototype["random-threshold"] = function() {
    return _registerOption.call(this, "random-threshold", arguments);
  };

  LyGrafikMajik.prototype["recolor"] = function() {
    return _registerOption.call(this, "recolor", arguments);
  };

  LyGrafikMajik.prototype["red-primary"] = function() {
    return _registerOption.call(this, "red-primary", arguments);
  };

  LyGrafikMajik.prototype["region"] = function() {
    return _registerOption.call(this, "region", arguments);
  };

  LyGrafikMajik.prototype["render"] = function() {
    return _registerOption.call(this, "render", arguments);
  };

  LyGrafikMajik.prototype["repage"] = function() {
    return _registerOption.call(this, "repage", arguments);
  };

  LyGrafikMajik.prototype["resample"] = function() {
    return _registerOption.call(this, "resample", arguments);
  };

  LyGrafikMajik.prototype["resize"] = function() {
    return _registerOption.call(this, "resize", arguments);
  };

  LyGrafikMajik.prototype["roll"] = function() {
    return _registerOption.call(this, "roll", arguments);
  };

  LyGrafikMajik.prototype["rotate"] = function() {
    return _registerOption.call(this, "rotate", arguments);
  };

  LyGrafikMajik.prototype["sample"] = function() {
    return _registerOption.call(this, "sample", arguments);
  };

  LyGrafikMajik.prototype["sampling-factor"] = function() {
    return _registerOption.call(this, "sampling-factor", arguments);
  };

  LyGrafikMajik.prototype["scale"] = function() {
    return _registerOption.call(this, "scale", arguments);
  };

  LyGrafikMajik.prototype["scene"] = function() {
    return _registerOption.call(this, "scene", arguments);
  };

  LyGrafikMajik.prototype["set"] = function() {
    return _registerOption.call(this, "set", arguments);
  };

  LyGrafikMajik.prototype["segment"] = function() {
    return _registerOption.call(this, "segment", arguments);
  };

  LyGrafikMajik.prototype["shade"] = function() {
    return _registerOption.call(this, "shade", arguments);
  };

  LyGrafikMajik.prototype["sharpen"] = function() {
    return _registerOption.call(this, "sharpen", arguments);
  };

  LyGrafikMajik.prototype["shave"] = function() {
    return _registerOption.call(this, "shave", arguments);
  };

  LyGrafikMajik.prototype["shear"] = function() {
    return _registerOption.call(this, "shear", arguments);
  };

  LyGrafikMajik.prototype["size"] = function() {
    return _registerOption.call(this, "size", arguments);
  };

  LyGrafikMajik.prototype["solarize"] = function() {
    return _registerOption.call(this, "solarize", arguments);
  };

  LyGrafikMajik.prototype["spread"] = function() {
    return _registerOption.call(this, "spread", arguments);
  };

  LyGrafikMajik.prototype["strip"] = function() {
    return _registerOption.call(this, "strip", arguments);
  };

  LyGrafikMajik.prototype["stroke"] = function() {
    return _registerOption.call(this, "stroke", arguments);
  };

  LyGrafikMajik.prototype["strokewidth"] = function() {
    return _registerOption.call(this, "strokewidth", arguments);
  };

  LyGrafikMajik.prototype["swirl"] = function() {
    return _registerOption.call(this, "swirl", arguments);
  };

  LyGrafikMajik.prototype["texture"] = function() {
    return _registerOption.call(this, "texture", arguments);
  };

  LyGrafikMajik.prototype["threshold"] = function() {
    return _registerOption.call(this, "threshold", arguments);
  };

  LyGrafikMajik.prototype["thumbnail"] = function() {
    return _registerOption.call(this, "thumbnail", arguments);
  };

  LyGrafikMajik.prototype["tile"] = function() {
    return _registerOption.call(this, "tile", arguments);
  };

  LyGrafikMajik.prototype["transform"] = function() {
    return _registerOption.call(this, "transform", arguments);
  };

  LyGrafikMajik.prototype["transparent"] = function() {
    return _registerOption.call(this, "transparent", arguments);
  };

  LyGrafikMajik.prototype["treedepth"] = function() {
    return _registerOption.call(this, "treedepth", arguments);
  };

  LyGrafikMajik.prototype["trim"] = function() {
    return _registerOption.call(this, "trim", arguments);
  };

  LyGrafikMajik.prototype["type"] = function() {
    return _registerOption.call(this, "type", arguments);
  };

  LyGrafikMajik.prototype["units"] = function() {
    return _registerOption.call(this, "units", arguments);
  };

  LyGrafikMajik.prototype["unsharp"] = function() {
    return _registerOption.call(this, "unsharp", arguments);
  };

  LyGrafikMajik.prototype["use-pixmap"] = function() {
    return _registerOption.call(this, "use-pixmap", arguments);
  };

  LyGrafikMajik.prototype["verbose"] = function() {
    return _registerOption.call(this, "verbose", arguments);
  };

  LyGrafikMajik.prototype["version"] = function() {
    return _registerOption.call(this, "version", arguments);
  };

  LyGrafikMajik.prototype["view"] = function() {
    return _registerOption.call(this, "view", arguments);
  };

  LyGrafikMajik.prototype["virtual-pixel"] = function() {
    return _registerOption.call(this, "virtual-pixel", arguments);
  };

  LyGrafikMajik.prototype["wave"] = function() {
    return _registerOption.call(this, "wave", arguments);
  };

  LyGrafikMajik.prototype["white-point"] = function() {
    return _registerOption.call(this, "white-point", arguments);
  };

  LyGrafikMajik.prototype["white-threshold"] = function() {
    return _registerOption.call(this, "white-threshold", arguments);
  };

  LyGrafikMajik.prototype["write"] = function() {
    return _registerOption.call(this, "write", arguments);
  };

  LyGrafikMajik.factory = function(from, to) {
    return new LyGrafikMajik(from, to);
  };

  return LyGrafikMajik;

})();

module.exports = LyGrafikMajik.factory;
