// Задача 1

function getSolutions(a, b, c) {
  let D = b**2 - 4 * a * c;

  if (D < 0) {
    return {D: D, roots: []};
  } else if (D == 0) {
    const x1 = -b / (2 * a);
    return {D: D, roots: [x1]};
  } else if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    return {D: D, roots: [x1, x2]};
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);

  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.roots.length == 1) {
    return `Уравнение имеет один корень X₁ = ${result.roots[0]}`;
  } else if (result.roots.length == 2) {
    return `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
  } else {
    return `Уравнение не имеет вещественных корней`;
  }
}


// Задача 2

function getAverageScore(data) {
  let result = {};
  let dataArray = [];

  for (let key in data) {
    result[key] = getAverageMark(data[key]);
    dataArray.push(result[key]);
  }
  
  result.average = getAverageMark(dataArray);

  return result;

}

function getAverageMark(marks) {
  let marksSum = 0;

  if (marks.length == 0) {
    return 0;
  }

  for (let i = 0; i < marks.length; i++) {
    marksSum += marks[i];
  }

  return marksSum / marks.length;
}

//Задача 3

function getPersonData(secretData) {
 return {firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb)};
}

function getDecodedValue(secret) {
  return secret ? 'Эмильо' : 'Родриго';
}