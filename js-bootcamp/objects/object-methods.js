const restaurant = {
  name: 'ASB',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function(party) {
    return this.guestCapacity - this.guestCount - party >= 0 ? "There's room!" : "There isn't room!";
  },
  sitParty: function(party) {
    if (this.guestCount + party < this.guestCapacity) this.guestCount += party;
  },
  removeParty: function(party) {
    this.guestCount -= party;
  }
};

restaurant.sitParty(23);
console.log(restaurant.checkAvailability(25));
restaurant.sitParty(44);
console.log(restaurant.checkAvailability(25));
