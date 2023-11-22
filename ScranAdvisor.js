const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype

// get number of restaurants
ScranAdvisor.prototype.countRestaurants = function(){
    return this.restaurants.length;
}

//  find restaurant by name
ScranAdvisor.prototype.findRestaurantByName = function(name){
    return this.restaurants.find(restaurant => restaurant.name === name);
}

// get all restaurant names
ScranAdvisor.prototype.getAllRestaurantNames = function(){
    return this.restaurants.map(restaurant => restaurant.name);
}

// find restaurants by city
ScranAdvisor.prototype.getRestaurantsByCity = function(city){
    return this.restaurants.filter(restaurant => restaurant.location.town === city);
}

// EXTENSIONS



module.exports = ScranAdvisor; 