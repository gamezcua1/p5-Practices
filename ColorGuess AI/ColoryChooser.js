/**
 *  Colory Chooser is our Genetic Algorithm that learns every time the user chooses
 *  a circle.
 * 
 *  Neural Network Structure 
 * 
 *  O -> O -> O
 *  O -> O -> O
 *  O -> O 
 * 
 */
class ColoryChooser {
  constructor() {
    this.firstLayer = [];
    this.secondLayer = [];
    this.thirdLayer = [];


    for (let i = 0; i < 3; i++)
      this.firstLayer.push(new Perceptron(3));

    for (let i = 0; i < 3; i++)
      this.secondLayer.push(new Perceptron(3));

    for (let i = 0; i < 2; i++)
      this.thirdLayer.push(new Perceptron(3));
  }

  guess(rgb) {
    let first = [];
    for (let i = 0; i < 3; i++)
      first.push(this.firstLayer[i].guess(rgb));

    let second = [];
    for (let i = 0; i < 3; i++)
      second.push(this.secondLayer[i].guess(first));

    let third = [];
    for (let i = 0; i < 2; i++)
      third.push(this.thirdLayer[i].guess(second));

    console.log(third);

    if (third[0] > third[1])
      return "WHITE";
    else
      return "BLACK"
  }

  training(person) {
    let e = null, x = null;
    if (person == "WHITE"){
      e = this.thirdLayer[0].train(1);
      x = this.thirdLayer[1].train(0);
    }
    else if(person == "BLACK"){
      e = this.thirdLayer[1].train(1);
      x = this.thirdLayer[0].train(0);
    }

    let esec = 0;
    for (let i = 0; i < 3; i++) {
      esec += this.secondLayer[i].train(e);
    }

    for (let i = 0; i < 3; i++)
      this.firstLayer[i].train(esec / 3);
  }

}