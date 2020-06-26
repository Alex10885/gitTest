let a ={
    a1: 'object a',
    a3: 5,
    a2: function (){
        console.log(this.a1);
        return true
    },
    set a3(x){
        this._a3 = x;
    }
};

let b = {
    a1:'sssssssss',
    a3: 555,
    b1 : 'object b'
};

// b.__proto__ = a;
Object.setPrototypeOf(b, a);

// console.log(a);
// console.log(b);
// console.log(b.a2());
// console.log(b.a1);
// b.a1 = 1548411;
// console.log(b.a1);
// console.log('--------------------------');
// a.a3 = 77;
// console.log(a);
// b.a3 = 88;
// console.log(b);

console.log(b.a3);
console.log(a.a1);
console.log(b.__proto__.a3);