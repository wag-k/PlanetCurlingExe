window.gLocalAssetContainer["planet"] = function(g) { (function(exports, require, module, __filename, __dirname) {

class Planet {
  #radius = 0.0;
  #mass = 0.0;
  constructor(radius, mass) {
      this.#radius = radius;
      this.#mass = mass;
  }
}

function createPlanet(radius, mass){
  return new Planet(radius, mass);
}

module.exports.create = function(radius, mass) {
  return createPlanet(radius, mass);
};
})(g.module.exports, g.module.require, g.module, g.filename, g.dirname);
}