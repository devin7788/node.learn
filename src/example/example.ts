const TSMap = require("typescript-map").TSMap;

export function MapExample() {
    // es6 map
    const a = new Map<string, string>();
    a.set('name', 'xxx');               // add
    // cc.log(a.get('name'), a.get('age'));              // get
    // cc.log(a.size);
    a.delete('name');             // delete
    // cc.log(a.has('name'));
    a.clear();
    // cc.log(a.size);

    // 遍历
    const map = new Map();
    map.set('name', 'mmm');
    map.set('age', 22);
    // cc.log(map.size, map.get('name'));

    map.forEach(function (v, key, map) {
        // cc.log('map ',key, v);

    if (key == 'name')
            map.delete(key);
    });

    console.log(map.size);

    const maparr = Array.from(map.values());
    for(let i=0;i<maparr.length;i++){
        console.log(maparr[i]);
    }

    let x = map.entries();
    // console.log(x.next());
    // console.log(x.next());
    // console.log(x.next());
    map.keys();

}

function ExampleArray() {
    // 定义
// const arr: number[] = [];   //  限定元素类型
// const arr2: any[] = []   //  不限定元素类型
    const arr: Array<number | string>  = [] ;     //  复合元素类型

//  增
    arr.push(123);
    arr.push('a');
    arr.push('b');
    arr.push('c');

    arr.length;         //  4

//  删
    const first = arr.shift();        //  删除并获得第一个元素 [a, b, c]
    const last = arr.pop();          //  删除并获得最后一个元素 [a, b]
    const d = arr.splice(1,1);            //  删除并获得第二个元素后的1个元素   [a]

//  改
    const c = arr.splice(2,0, 1,'b');   // 第二个位置后添加2个元素  [a,1,b]

    arr[2] = 'c';                       //  [a, 1, c]

//  查, 返回寻找元素的下标
    arr.indexOf('c');           //  2
    arr.indexOf('b');           //  -1
    arr.findIndex((v) => {
        return v == 'c';
    });
// arr.includes('b');          // bool

//  遍历
// for(let i=0;i<arr.length;i++){
//     cc.log('---', arr[i]);
// }
//
// arr.forEach(function (value, index, array) {
//     cc.log('...', value);
// });


    let p = new Promise(function () {

    });

}

