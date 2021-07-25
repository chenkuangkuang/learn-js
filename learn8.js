// 编辑距离算法

function levenshtein(s1, s2) {
  const l1 = s1.length;
  const l2 = s2.length;
  let matrix = [];
  for (var i = 0; i < l1; i++) {
    matrix[i] = [];
    for (var j = 0; j < l2; j++) {
      if (i == 0) {
        matrix[i][j] = j;
      } else if (j == 0) {
        matrix[i][j] = i;
      } else {
        const isSame = s1[i] == s2[j];
        matrix[i][j] = Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1, matrix[i - 1][j - 1] + (isSame ? 0 : 1));
      }
    }
  }
  console.log('=matrix=', matrix);
  return matrix[l1-1][l2-1];
}

const res = levenshtein('bai', 'ba2y');
console.log('=res=', res);
