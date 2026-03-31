class Exam {
  constructor(weight, correctAnswer)
  {
    this.weight = weight;
    this.correctAnswer = correctAnswer;
    this.studentsAnswer = [];
  }
  
  add(answers) {
    this.studentsAnswer.push(answers);
  }
  
  avg(answers) {
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === this.correctAnswer[i]) {
            score += this.weight[i];
    }
  }
    return score.toFixed(1);
} 
  
  min(n) {
  const scores = this.studentsAnswer.map(answers => this.avg(answers));
  scores.sort((a, b) => a - b); 
  return scores.slice(0, n);    
  }
  
  max(n) {
    const scores = this.studentsAnswer.map(answers => this.avg(answers));
    scores.sort((a, b) => b - a); 
    return scores.slice(0, n);    
  }
  
  lt(num) {
    const result = [];

    for (let i = 0; i < this.studentsAnswer.length; i++) { 
      const score = this.avg(this.studentsAnswer[i]);
      if (score < num) {
        result.push(score); 
      }
    }
    return result;
  }

  gt(num) {
  const result = [];

  for (let i = 0; i < this.studentsAnswer.length; i++) { 
    const score = this.avg(this.studentsAnswer[i]);
    if (score > num) {
      result.push(score);
    }
  }
  return result;
}

}


const example = new Exam([2.0, 2.0, 2.0, 2.0, 2.0], ['a', 'b', 'a', 'c', 'd']);

example.add(['a', 'b', 'b', 'b', 'b']);
example.add(['a', 'b', 'a', 'c', 'd']);
example.add(['a', 'b', 'a', 'c', 'b']);
example.add(['a', 'a', 'a', 'c', 'd']);
example.add(['b', 'c', 'a', 'c', 'd']);

console.log(example.avg(example.studentsAnswer[0]));
console.log(example.avg(example.studentsAnswer[1]));
console.log(example.avg(example.studentsAnswer[2]));
console.log(example.avg(example.studentsAnswer[3]));
console.log(example.avg(example.studentsAnswer[4]));
console.log(example.min(3));
console.log(example.max(4));
console.log(example.lt(5));
console.log(example.gt(3)); 