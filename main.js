// Ex 1: Thuế và lương ròng
const getSalery = (salery) => {
    if(salery >= 15000000){
        console.log('Thuế thu nhập =',salery*30/100);
        console.log('Lương ròng = ',salery*70/100);
    }
    else if (salery < 15000000 && salery > 7000000) {
        console.log('Thuế thu nhập =',salery*20/100);
        console.log('Lương ròng =',salery*80/100);
    }
    else if (salery < 7000000 && salery > 0) {
        console.log('Thuế thu nhập = ',salery*10/100);
        console.log('Lương ròng = ',salery*90/100);
    }
}

// Ex 2: tuổi vào lớp 10 của học sinh
function ageClass(tuoi) {
    if(tuoi == 16) return 'Đủ điều kiện vào học lớp 10';
    else if (tuoi < 16 || tuoi > 16) return 'Không đủ điều kiện vào học lớp 10';
}

// Bài 3: lớn hay nhỏ hơn 100
const compareVs100 = (number) => {
    if(number > 100) {
        return 'Số lớn hơn 100';
    } else if (number < 100) {
        return 'Số nhỏ hơn 100';
    } else {
        return 'Số bằng 100';
    }
}

// Bài 4 Tìm số lớn nhất trong 3 số 
const maxnum = (a,b,c) => {
    if( a > b ) {
        return a
    }
    if( b > c) {
        return b
    }
    if(a < c) {
        return c
    }
}

// Bài 5 xếp hạng học lực của học sinh
function rank(point) {
    if (typeof (point) !=='number' || point < 0 || point > 10) {
        return 'Không hợp lệ'
    } else if (point < 5) {
        return 'Hạng F'
    } else if (point >= 5 && point < 7 ) {
        return 'Hạng C'
    } else if (point >= 7 && point < 9 ) {
        return 'Hạng B'
    } else return 'Hạng A'
}

// Bài 6 : tìm nghiệm của phương trình bậc hai ax2 + bx + c = 0.

const numberQuadratic = (a,b,c) => {
    const delta = b*b - 4*a*c
    if (a == 0 && b == 0) {
        return 'Phương trình vô nghiệm'
    } else if ( a == 0 && b !==0 ) {
        console.log('phương trình có một nghiệm là:', -c/b);
    } else if( delta < 0 ) {
        return 'Phương trình vô nghiệm'
    } else if( delta ==0 ) {
        console.log ('PT co nghiem kep la: ',-b/2*a)
    } else if ( delta > 0 ) {
        const x1 = (-b - Math.sqrt(delta)) / ( 2 * a)
        const x2 = (-b + Math.sqrt(delta)) / ( 2 * a)
        return `
            Phương trình có 2 nghiệp:
            x1 = ${x1}
            x2 = ${x2}
        `
      }
}
// Bài 7 mức hoa hồng theo doanh số bán:

const totalSales = (money) => {
    if (typeof (money) !=='number' || money < 0 ) {
        return 'Không hợp lệ'
    } else if (money <= 100000000) {
        console.log('Hoa hồng được nhận là:', money*5/100)
    } else if (money <= 300000000) {
        console.log('Hoa hồng được nhận là:', money*10/100)
    } else if (money > 300000000) {
        console.log('Hoa hồng được nhận là:', money*20/100)
    }
}

// Bài 8 tính cước điện thoại bàn:

const telephoneCharges = (minutes) => {
    if ( typeof (minutes) !=='number' || minutes <= 0 ) {
        return 'Troll à'
    } 
    if (minutes <= 50) {
        console.log('Cước phí thuê bao của bạn là:', minutes*600 +25000 , ('Phí thuê bao bắt buộc là 25.000'));
    }
    if (minutes <= 200) {
        console.log('Cước phí thuê bao của bạn là:', minutes*400 +25000 , ('Phí thuê bao bắt buộc là 25.000'));
    }
    if (minutes >= 200) {
        console.log('Cước phí thuê bao của bạn là:', minutes*200 +25000 , ('Phí thuê bao bắt buộc là 25.000'));
    }
}