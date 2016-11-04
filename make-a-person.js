var Person = function(firstAndLast) {

    this.full = firstAndLast;
    var nameArray = this.full.split(" ");
    this.first = nameArray[0];
    this.last = nameArray[1];

    this.getFullName = function() {
      return this.full;
    };
    this.getFirstName = function() {
      return this.first;
    };
    this.getLastName = function() {
      return this.last;
    };

    return firstAndLast;
};


Person.prototype.setFullName = function(firstAndLast) {
  this.full = firstAndLast;
  var nameArray = this.full.split(" ");
  this.first = nameArray[0];
  this.last = nameArray[1];
};

Person.prototype.setFirstName = function(first) {
  this.first = first;
  this.full = this.first + " " + this.last;
};

Person.prototype.setLastName = function(last) {
  this.last = last;
  this.full = this.first + " " + this.last;
};

var bob = new Person('Bob Ross');
console.log(Object.keys(bob));



/*
This looked tough at first because it's in a different format than most of the previous challenges, but it made more sense after reading a bit about object constructor and methods and finding a nice resource here: http://bit.ly/1p5pjBi

This one also gets weird because testing later methods appears to break the testing for earlier ones.

Initially had the three 'get' functions outside of the object constructor, which allowed all the tests to pass except the Object.keys(bob).length (which returned 3 instead of 6).

I still suspect there is a slightly cleaner way to do this, but I also suspect I'll continue to feel that way about most of the code I write for awhile.
*/
