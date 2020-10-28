/* Exercises 1: Viết 1 hàm trả về 1 array, nhận vào 2 tham số
tham số thứ 1 là ký tự cần lặp, tham số thứ 2 là số lần lặp */
// Way 1
const getArray = (string, numofrep) => {
  const arrayChar = []
  for (let i = 0; i < numofrep; i++) {
    arrayChar.push(string)
  }
  return arrayChar
}

console.log("------- Test Ex1 Way 1 ------- ")
console.log(getArray('hihi',3))

// Way 2
const getArray2 = (string, numofrep) => {
  const arr = []
  let i = 0;
  do {
    arr.push(string)
    i++;
  } while (i <= numofrep)
  return arr
};

console.log("------- Test Ex1 Way 2 ------- ");
console.log(getArray2('haha', 5))

/* Exercires 2: Viết 1 hàm để đảo ngược 1 mảng
không được dùng hàm array.reverse() */

const getReverseArray = (array) => {
  const newArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    newArray.push(array[index])
    newArray.join(newArray)
  }
  return newArray;
};
console.log("------- Test Ex 2 ------- ")
console.log(getReverseArray('hello'))

// Exercies 3: Xóa đi các giá trị được xem là sai



/* Bài 4: Tạo ra 1 array gồm các object có key và value tương ứng cặp array ban đầu
  const data = [['a', 1], ['b', 2]]
  { a: 1, b: 2 } */

  const createObj = dataArr => {
    const obj = {}
    dataArr.forEach(arr => {
      obj[arr[0]] = arr[1]
    })
    return obj
  }

  const createObject = (array = []) => {
    const newObject = {}
    array.forEach(item => {
      newObject[item[0]] = item[1]
    })
    return newObject
  }

// Exercies 5: Sắp xếp mảng tăng dần

const sortArr = arr => arr.sort()

console.log("------- Test Ex 5 ------- ")
console.log(`array='1','3','4','-4','0'`)
console.log(sortArr(['1','3','4','-4','0']))


// Bài 6: Kiểm tra input đầu vào có phải là object hay không?
const checkObject = obj => {
  if (typeof(obj) !== 'object') return 'It is not object'
  else return 'It is object'
}
console.log("------- Test Ex 6 ------- ")
const linh = [
  { name: 'Nguyễn linh', age: 9.2 }
]
console.log(`checkObject linh`);
console.log(checkObject(linh));

// Bài 7: Viết 1 hàm trả về các key (của 1 object) khác các key truyền vào Vd:



// Bài 8: Viết hàm nhập vào 1 array có nhiều hơn 5 phần tử Xóa phần tử số 2, 3 trong array Return mảng sau khi đã xóa
const delIndexArray = (array = []) => {
  if (array.length < 5) return 'not compatible'
  if (array.splice(1,2)) return array
}

console.log("------- Test Ex 8 ------- ")
console.log(`Text với array= '1','3','4','-4','0'`);
console.log(delIndexArray (['1','3','4','-4','0']));

/* Bài 9:
Hãy tạo 1 array mới với cấu trúc sau:
['Pass', 'Fail', 'Fail', 'Pass', 'Pass', 'Fail', 'Pass']
Điều kiện Pass:
Điểm trên 5.0 và không có chữ Duy là tên đệm

 */

const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const getStudentPass = (array = []) => {
  const studentPass = []
  array.forEach(student => {
    if (student.score < 5.0 || (student.name.indexOf('Duy') >= 3 && student.name.indexOf('Duy') <= 7)) {
      studentPass.push('Fail')
    } else {
      studentPass.push('Pass')
    }
  })
  return studentPass
}

console.log("------- Test Ex 9 ------- ")
console.log(getStudentPass (students));


// Bài 10
/**
Cho array có cấu trúc như input bài 9

Hãy tìm các students có điểm là số mà tổng số nút của phần trước dấu thập phân và phần sau dấu thập phân cộng lại lớn hơn 5

Vd: 6.9 -> 6 + 9 = 5 (không lấy)

3.7 -> 3 + 7 = 0 (không lấy) 5.2 -> 5 + 2 = 7 (lấy)


 */

