/*!
 * Discrete Cosine Transform Matrix Generator
 * Boris Bischoff, July 2020
 */

/*
 * Execute this program as follows:
 *      $ node createDCTMatrix.js 8
 * for plain text output of a 8x8 matrix.
 * 
 * For KaTeX mode, execute the program as follows for a 8x8 matrix:
 *      $ node createDCTMatrix.js 8 latex
 */

let parameters = process.argv.slice(2);
let n = parameters[0];
let style = parameters[1];

let delimiter = '\t';
let linebreak = '\n';

if (style === 'latex' || style === 'katex') {
    delimiter = '\&';
    linebreak = '\\\\';
}

function getMatrixHead(n) {
    return Math.sqrt(1/n).toFixed(3);
}

function getMatrixBody(x, y, n) {
    let cos = Math.cos((((2*y)-1)*(x-1)*Math.PI)/(2*n));
    let sqrt = Math.sqrt(2/n);
    return (sqrt*cos).toFixed(3);
}

function getStructure(y, n) {
    if (y < n) {
        process.stdout.write(delimiter);
    }

    if (y == n) {
        process.stdout.write(linebreak);
    }
}

if (n) {
    for (let y = 1; y <= n; y++) {
        process.stdout.write(getMatrixHead(n));
        getStructure(y, n);
    }
    
    for (x = 2; x <= n; x++) {
        for (y = 1; y <= n; y++) {
            process.stdout.write(getMatrixBody(x, y, n));
            getStructure(y, n);
        }
    }
    console.log("\n");
} else {
    console.log('Please execute the program as follows: $ node createDCTMatrix.js <integer>.\nExample: $ node createDCTMatrix.js 8');
}