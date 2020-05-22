import generateRandomArray from "../sort_test_helper/sortTestHelper";
import 'mocha';
import * as should from 'should'

describe('generate rand num test', function () {
    it('test case 1', function () {
        const arr = generateRandomArray(10, 100, 105);
        let isRight = true;
        for (let index in arr) {
            if (arr[index] < 100 || arr[index] > 105) {
                isRight = false;
                break
            }
        }
        should(isRight).be.equal(true);

    })
});

// mocha -r ts-node/register ./tests/*test.ts