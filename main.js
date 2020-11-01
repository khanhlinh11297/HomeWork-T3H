/**
 * Lesson 1:
Chào mọi người, nhân vật chính hôm nay là Tèo. Má tèo là chủ của 1 đại lý vé số, sáng mới ngủ dậy chưa kịp làm gì đã bị má bắt kiểm tra đống vé số ở bên dưới
Mỗi 1 array là 1 tờ vé số việt lốt, chứa các số khác nhau, thứ tự có thể không sắp xếp tăng dần. Hãy so sánh 2 vé số bất kì, và cho biết có trùng nhau hoàn toàn hay không
 */
// Các dãy vé số:
const arr1 = [1, 2, 3, 4]
const arr2 = [1, 2, 3, 4]
const arr3 = [1, 2, 3, 5]
const arr4 = [1, 2, 3, 4, 5]

function isEqual(newarr1_1, newarr2_1) {
    max_lenght = newarr1_1.length > newarr2_1.length ? newarr1_1.length : newarr2_1.length;
    for (var i = 0; i < max_lenght; i++) {
        if (newarr1_1[i] != newarr2_1[i]) {
            return false;
        }
    }
    return true;
}

/**
 * Lesson 2:
Nhà Tèo vừa bán vé số vừa bán đồ tạp hóa, ở trong kho, mặt hàng đồ chơi để không ngăn nắp cho lắm, mỗi 1 lần tìm đồ lại tốn rất nhiều thời gian. Má Tèo vừa mua các kệ để show mặt hàng đồ chơi cho dễ nhìn, dễ lựa.
Nhìn xem, array data bên dưới chính là cách mà má Tèo sắp xếp đồ trước đây, không có quy luật gì cả, trong cái lọ lại chứa cái chai, trong cái chai lại có thể chứa cái gì đấy khác nữa
Má Tèo muốn sắp xếp lại gọn gàng, đơn giản, dễ nhìn như ví dụ, giúp má Tèo nha
 */
const data = [1, 2, [3, 4, [5]]]
// Way 1
const flatten = arr => {
  const convertToString = arr.toString().replaceAll(',', '')
  return convertToString.split('')
}

// Way 2:
const flat = arr => {
  const convertToString = arr.flat(Infinity)
  return convertToString
}

/**
 * Lesson 3:
Lại là Tèo, sau khi đã có array 1 chiều ở lần trước, Tèo muốn chia array ra thành nhiều đoạn nhỏ hơn, mỗi đoạn chứa n phần tử, giúp Tèo thêm lần nữa nha
Lại là má Tèo, sau khi bày 1024 đồ hàng lên 1 cái kệ, má Tèo phát hiện ra rằng: mình nên đặt đồ theo từng kệ 1, chẳng hạn kệ 1 sẽ để bàn là + bàn chải đánh răng, kệ 2 sẽ để ô mô và bột giặt, ... nghĩ là làm, má Tèo gọi ngay Tèo ra sai việc vặt
Kệ data chínhh là công sức lần trước của Tèo, việc bây giờ Tèo phải làm là vứt cái kệ cũ đi thay bằng những cái kệ mới.
Mỗi 1 kệ sẽ chứa tối đa 1 hay 2 hay 3 hay ... bao nhiêu tùy Tèo cho phép, vì quá mệt mỏi, Tèo đã chạy sang nhờ bạn code hộ output bên dưới
 */
const data2 = [1, 2, 3, 4, 5, 6, 7,8];

const divideArray = (arr,n) => {
  const tempArray = []
  for (let i = 0; i < arr.length; i += n) {
    myChunk = arr.slice(i, i + n)
    tempArray.push(myChunk);
  }
  return tempArray
}

console.log(divideArray(data2,3));
console.log("Bài 3 :");
const data_3 = [1, 2, 3, 4, 5, 6, 7,8];
var newdata_3 = [],
    newarr_3 = [];

function chunk(data_3, n) {
    for (var i = 0; i < data_3.length; i++) {
        newarr_3.push(data_3[i]);
        if ((i + 1) % n === 0) {
            newdata_3.push(newarr_3);
            newarr_3 = [];
        } 
        else if (i >= (Math.floor(data_3.length / n)) * n) {
            newdata_3.push(newarr_3);
            newarr_3 = [];
        }
    }
}

chunk(data_3, 3);
console.log(newdata_3);

// Exercise 4:
const findDuplicatesArray = array => {
  const duplicatesArray = []
  const uniqueArray = []
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i])
    } else {
      duplicatesArray.push(array[i])
    }
  }
  return duplicatesArray
}

const intersectionArray = (array1, array2, array3 = []) => {
  const unifyArray = [ ...array1, ...array2, ...array3 ]
  return findDuplicatesArray(unifyArray)
}

//---
const getIntersection = (data1, data2) => {
  const result = []
  for (let i = 0; i < data1.length; i++) {
    for (let j = 0; j < data2.length; j++) {
      if (data1[i] === data2[j]) {
        result.push(data1[i])
      }
    }
  }
  return result
}

const arr11 = [1, 2,4,5,6,76]
const arr22 = [2, 2,2,2,3,76,3,9]

const duplicate = []
let check = false
for (let i = 0; i < arr11.length; i++) {
  for (let j = 0; j < arr22.length; j++) {
    if (arr11[i] === arr22[j]) {
      for (let r = 0; r < duplicate.length; r++) {
        if (arr11[i] === duplicate[r]) {
          check = true
        }
      }
      if (check == false) {
        duplicate.push(arr11[i])
        check = false
      }
    }
  }
} console.log('số trùng:', duplicate); 

//----------------- 
// ex5:
const checkDates = (date) => {
  const milestoneTime = 'Oct 30, 2020 12:30:32'
  if (Date.parse(date) <= Date.parse(milestoneTime)) return true
  else return false
}

const kiemtra = (bien2) => {
  const bien1 = '12'
  if (bien2 <= bien1) return true
  else return false
}



//ex 6:
const checkUserName = (userName) => {
  const regexUserName = /^([a-z0-9_]){2,10}$/
  return userName.indexOf('__') === -1 ? regexUserName.test(userName) : false
}
const checkEmail = (email) => {
  const regexEmail = /^[a-z0-9]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z](?:[a-z]*[a-z])?\.)+[a-z](?:[a-z]*[a-z])?$/i
  return regexEmail.test(email)
}
//----------------- 



