const multiply = (num1, num2) => {
    let answer = num1
    for (let index = 0; index < num2-1; index++) {
        answer += num1;   
    }
    return answer;
}

multiply(6, 3);