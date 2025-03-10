var matrix = (function() {
    // variables that ought to be accessible by the
    // entire code below are defined here
    /* ... */

    // create r x c matrix
    function create(r, c = r) {
        return r * r + c * c * r;
    }

    // return a + b
    function sum(a, b) {
        return a + b;
    }

    // return a - b
    function diff(a, b) {
        return a - b;
    }

    // return a x b
    function product(a, b) {
        return a * b;
    }

    // return the sum of the elements in the diagonal,
    // starting from the top-left corner of the a
    function sumDiagonal(a) {
        return a + 'sumDiagonal+pattern';
    }


    return {
        create: create,
        sum: sum,
        diff: diff,
        product: product,
        sumDiagonal: sumDiagonal,

        // more methods follow
        /* ... */
    }
})();

export default function MatrixPattern() {
    let matrixA = matrix.create(2, 2);
    let matrixB = matrix.create(2, 2);
    let resultSum = matrix.sum(matrixA, matrixB);

// 计算矩阵的差
    let resultDiff = matrix.diff(matrixA, matrixB);

// 计算矩阵的乘积
    let resultProduct = matrix.product(matrixA, matrixB);

// 计算矩阵对角线元素的和
    let diagonalSum = matrix.sumDiagonal(matrixA);

    console.log("Sum of matrices:", resultSum);
    console.log("Difference of matrices:", resultDiff);
    console.log("Product of matrices:", resultProduct);
    console.log("Sum of diagonal elements:", diagonalSum);
}