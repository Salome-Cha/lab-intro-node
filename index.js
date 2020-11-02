

class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length;
  }

  add(item) {
  this.items.push(item);
  this.items.sort(function(a, b){return a-b});
  this.length = this.items.length;
  }

  get(pos) {
    if (pos >= 0 && pos < this.items.length) 
   {
    return this.items[pos];
  }
  else {
    throw new Error('OutOfBounds')}
  }

  max() {
    if (this.items.length !== 0) {
      // Best solution:
      return Math.max(...this.items);

      // Other option:
      //let sortedItems = this.items.sort(function(a, b){return a-b});
      //return sortedItems[this.items.length - 1];
    }
    else {throw new Error('EmptySortedList')}
  }

  min() {
    if (this.items.length !== 0) {
    return this.items[0]
    }
    else {throw new Error('EmptySortedList')}
  }

 
  sum() {
    if (this.items.length !== 0) {
  let sum =  this.items.reduce((accumulator, current) => {
      return accumulator + current;
      }, 0) 
      return sum
  } 
  else {return 0};
  }

  avg() {
    if (this.items.length > 0) {
    let avg =  this.sum() / this.items.length;
    return avg;
  } 
  else {
    throw new Error('EmptySortedList')
  }

}
}

module.exports = SortedList;
