const dicemodule = (function () {
  return {
    rollDice: function(n) {
      const rolling = [];
      for (let i = 0; i < n; i++) {
        rolling.push(Math.floor(Math.random() * 6) + 1);
      }
      return rolling;
    },
    returnNums: function(rollResults) {
      rollResults = this.rollDice(10);
      return rollResults.toString();
    },

    max: function(rollResults) {
      rollResults = this.rollDice(10);
      return Math.max(...rollResults);
    },

    min: function(rollResults) {
      rollResults = this.rollDice(10);
      return Math.min(...rollResults);
    },

    calcAvg: function(rollResults) {
      rollResults = this.rollDice(10);
      return rollResults.reduce((a, b) => a + b, 0) / rollResults.length;
    }};
}
)();


module.exports = dicemodule;