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
    return score;
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
    
