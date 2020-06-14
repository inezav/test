// Домашнее задание:
// Задание 1: Функция, возвращающая объект, и меняющая местами ключ <-> значение.
// исходный объект должен остаться неизменным.
// Уровень 1: Работа с конкретныйм объектом и конкретными его свойствами

const firstObject = {
  'one': 'number',
};

function resolve1(inputObject) {
  let obj = new Object();
  let keys = Object.keys(inputObject);
  obj[inputObject[keys[0]]] = keys[0];
  return(obj);
  // let val = inputObject[key]; 
  // console.log(val)  // get the value for the current key
  // var val2 = val;
  // rule2[val] = key;      // reverse is done here
};

const result1 = resolve1(firstObject);
console.log(result1); // ожидаемый результат { 'number': 'one' }
console.log(firstObject); // ожидаемый результат { 'one': 'number' }

// Уровень 2: Работа с любым объектом БЕЗ вложенных объектов внутри
// и любым количеством свойствам
// Данный объект. Должен остаться неизменным
const secondObject = {
  'apple': 'fruit',
  'potato': 'vegetable',
  'strawberry': 'berry',
};


function resolve2(inputObject) {
  let obj = new Object();
  let keys = Object.keys(inputObject);
  // let lengthKey = keys.length;
  // let i = 0;
  // while(i < lengthKey){
  //   obj[inputObject[keys[i]]] = keys[i];
  //   i++;
  // }

  for (let i = 0; i < keys.length; i++){
    obj[inputObject[keys[i]]] = keys[i];
  }
  return(obj);
};

const result2 = resolve2(secondObject);
console.log(result2); 
// // ожидаемый результат: { 'apple': 'fruit', 'potato': 'vegetable', 'strawberry': 'berry' }
console.log(secondObject);
// // ожидаемый результат { 'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry' }


// // Задание 2. Написать функцию, возвращающую век, соответствующий данному году
// // Использовать Глобальный объект Math

function centuryFromYear (year) {
  let res = (Math.floor(year / 100) + 1);
  console.log(res)
  return(res);
  }

const year = 1905;
centuryFromYear(1522); // 20
// const year2 = 1700;
// centuryFromYear(year2); // 18.
