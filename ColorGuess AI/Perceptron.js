/**
 * Class for every neuron in our ColoryChooser
 */
class Perceptron {
  constructor(n) {
    this.weights = [];
    this.inputs = [];
    this.lastSum = 0;
    for (let i = 0; i < 3; i++)
      this.weights[i] = random(-1, 1);
  }

  sigmoid(x, deriv) {
    if (deriv == true)
      return (x * (1 - x));

    return 1 / (1 + Math.exp(-1 * x))
  }

  /**
   * 
   * @param {Array} inputs representing the RGB color to look 
   * 
   * @returns a number representing the output of the perceptron
   */
  guess(inputs) {
    this.inputs = inputs;
    let sum = 0;
    for (let i = 0; i < this.inputs.length; i++) {
      sum += (this.inputs[i] * this.weights[i]);
    }
    sum = this.sigmoid(sum, false);

    this.lastSum = sum;
    return sum;
  }

  /**
   * 
   * @param {Number} target represents the ratio of error
   * 
   * @returns a Number representing the error of the perceptron 
   */
  train(target) {

    let error;
    do {
      error = target - this.lastSum;
      for (let i = 0; i < this.inputs.length; i++) {
        this.weights[i] += this.sigmoid(error, true)
      }
      this.guess(this.inputs);

    } while (error >= 0.1);

    return error;
  }
}