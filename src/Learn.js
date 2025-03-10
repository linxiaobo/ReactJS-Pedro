// 创建两个 2x2 的矩阵

var matrix = {
    // create r x c matrix
    create: function(r, c = r) {
        return r * r + c * c * r;
    },

    // return a + b
    sum: function(a, b) {
        return a + b;
    },

    // return a - b
    diff: function(a, b) {
        return a - b;
    },

    // return a x b
    product: function(a, b) {
        return a * b;
    },

    // return the sum of the elements in the diagonal,
    // starting from the top-left corner of the a
    sumDiagonal: function(a) {
        return a + 'sumDiagonal';
    },

    // more methods follow
    /* ... */
}

export default function Matrix() {
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