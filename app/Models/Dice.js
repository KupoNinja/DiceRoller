export default class Dice {
  constructor(data) {
    this.name = data.name;
    this.count = 0;
    this.sides = data.sides;
    this.result = [];
  }
}

// NOTE Should the dice themselves be in model?
// NOTE Need to see actual dice for accuracy
const BOOST = new Dice({
  name: 'Boost',
  sides: ['Advantage', 'Success', 'DblAdvantage',]
});
