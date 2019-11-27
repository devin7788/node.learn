/**
 * 生成n个随机数的的数组
 * @param n 数组的元素个数
 * @param rangeL 随机数的最小值
 * @param rangeR 随机数的最大值
 */
function generateRandomArray(n: number, rangeL: number, rangeR: number): number[]{
    if(rangeL > rangeR){
        throw new Error('rangeL应该大于rangR')
    }
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * (rangeR - rangeL + 1)) + rangeL
    }
    return arr
}

export default generateRandomArray;
