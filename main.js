// Exerciess 1: in một bảng của một số bất kì với các số từ 1 đến 10 và hiển thị ra kết quả
const multiplicationTable = (num) => {
  if (num < 1 || num > 10) return;

  console.log("Bảng tính nhân của:", num, "là");
  for (let i = 1; i <= 10; i++) {
    return console.log(num, "x", i, "=", i * num);
  }
};

/**
 * Exerciess 2:
 * Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30
 * In các số chẵn từ 1 đến n Vd n = 6: in ra: 2 4 6
 */
const findEvenNumber = (num) => {
  if (1 <= num <= 30) {
    for (let i = 1; i <= num; i++) {
      if (i % 2 === 0) console.log(i);
    }
  }
};

/**
 * Exerciess 3:
 * Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 Tính tổng từ 1 đến n
 * vd nhập vào 6: Tổng = 1 + 2 + 3 + 4 + 5 + 6 = 21
 */

const sum = (num) => {
  if (num < 1 || num > 30) return "Hãy điền 1 số từ 1 đến 30";

  let sum = 0;
  if (1 <= num <= 30) {
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
  }
  return console.log("Tổng từ 1 đến", num, "là", sum);
};

/**
 * Exerciess 4:
 * Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30
 * In ra n! (giai thừa của n)
 */

const calculateFactorial = (num) => {
  let factorial = 1;

  if (1 <= num <= 30) {
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
  }
  return console.log("Giai thừa của", num, "là", factorial);
};

/**
 * Exerciess 5:
 * Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn
 * Vd: param là [1, 2, 3, 6, 2, 9, 0] thì return 4 vì có 4 số chẵn
 */

const getEvenNum = () => {
  let evenNum = 0;
  array.forEach((num) => {
    if (num % 2 === 0) {
      evenNum++;
    }
  });
  return console.log("có:", evenNum, "số chẵn");
};

console.log("Check Ex_5");
array = [1, 4, 56, 78, 43, 23, 45];
getEvenNum(array);

/**
 * Exerciess 6:
 * Hàm nhận vào 1 mảng chứa các chữ cái bị trùng lặp ngẫu nhiên
 * Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp
 */
const deLetter = (array) => {
  const getLetter = [];
  for (let i = 0; i < array.length; i++) {
    if (getLetter.indexOf(array[i]) === -1) {
      getLetter.push(array[i]);
    }
  }
  return console.log(getLetter);
};

console.log("Check Ex_6");
getLetter = ["A", "C", "A", "A", "B", "D", "B"];
deLetter(getLetter);

/**
 * Exerciess 7:
 * Bạn cần phải tạo ra 1 object có đầy đủ các thuộc tính: name, score từ 2 array
 */

const studentNames = [
  { id: 1, name: "Nguyễn Thị Tèo" },
  { id: 2, name: "Phạm Văn Bưởi" },
  { id: 3, name: "Hoàng Văn Nam" },
  { id: 4, name: "Vũ Ngọc Duy" },
  { id: 5, name: "Nguyễn Minh Nhật" },
  { id: 6, name: "Phí Duy Quân" },
  { id: 7, name: "Trần Minh Minh" },
];
const studentScores = [
  { id: 1, score: 222 },
  { id: 2, score: 2.3 },
  { id: 3, score: 3.7 },
  { id: 1, score: 111 },
  { id: 5, score: 5.2 },
  { id: 6, score: 9.6 },
  { id: 7, score: 6.1 },
];
const listStudents = (studentNames, studentScores) => {
  const student = [];
  studentNames.forEach((studentName) => {
    studentScores.forEach((studentScore) => {
      if (studentName.id === studentScore.id) {
        studentName.score = studentScore.score;
        //student.push(studentName)
      }
    });
  });
  return console.log(studentNames);
};
listStudents(studentNames, studentScores);
/**
 * Exerciss 8:
 * Tìm sinh viên có điểm (score) thấp nhất và sinh viên có score cao nhất
 */

const students = [
  { id: 1, name: "Nguyễn Thị Tèo", score: 9.2 },
  { id: 2, name: "Phạm Văn Bưởi", score: 2.3 },
  { id: 3, name: "Hoàng Văn Nam", score: 3.7 },
  { id: 4, name: "Vũ Ngọc Duy", score: 6.9 },
  { id: 5, name: "Nguyễn Minh Nhật", score: 5.2 },
  { id: 6, name: "Phí Duy Quân", score: 9.6 },
  { id: 7, name: "Trần Minh Minh", score: 6.1 },
];
const scoreMaxMin = () => {
  let scoreMax = 0;
  let scoreMin = 12;
  let theBest = {};
  let theBad = {};
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > scoreMax) {
      scoreMax = students[i].score;
    }
    if (students[i].score < scoreMin) {
      scoreMin = students[i].score;
    }
  }
  for (let i = 0; i < students.length; i++) {
    if (students[i].score === scoreMax) {
      theBest.id = students[i].id;
      theBest.name = students[i].name;
      theBest.score = students[i].score;
    }
    if (students[i].score === scoreMin) {
      theBad.id = students[i].id;
      theBad.name = students[i].name;
      theBad.score = students[i].score;
    }
  }
  console.log("The Best:", theBest);
  console.log("The Bad", theBad);
};

scoreMaxMin();
