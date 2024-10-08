// テスト リバーシ
const testRev = {};

// デバッグ用：盤面を文字列にして出力
testRev.outBoard = function(board) {
    const lineArray = board.map(array => array.join(', '));
    console.log(lineArray.join('\n'));
};

// デバッグ用：デバッグ用データ設定（テスト盤面の代入）
testRev.set = function(data) {
    //data.board = gameUtil.deepClone(this.endWin);
    //this.outBoard(data.board);
};

testRev.endWin =   [[0, 0, 0, 0, 0, 0, 0, 0],   // 終了 勝利
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 0, 0],
                    [8, 0, 0, 0, 0, 0, 0, 0]];

testRev.endLose =  [[0, 1, 1, 1, 1, 1, 1, 1],   // 終了 敗北
                    [1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1],
                    [8, 1, 1, 1, 1, 1, 1, 1]];

testRev.endDraw =  [[0, 1, 0, 1, 0, 1, 1, 1],   // 終了 引き分け
                    [0, 1, 0, 1, 0, 1, 1, 1],
                    [0, 1, 0, 1, 0, 1, 0, 1],
                    [0, 1, 0, 1, 0, 1, 0, 1],
                    [0, 1, 0, 1, 0, 1, 0, 1],
                    [0, 1, 0, 1, 0, 1, 0, 1],
                    [1, 1, 0, 1, 0, 1, 0, 1],
                    [8, 1, 0, 1, 0, 1, 0, 1]];

testRev.pass    =  [[0, 1, 1, 8, 8, 0, 0, 0],   // パス
                    [8, 8, 8, 8, 8, 8, 8, 8],
                    [8, 8, 8, 8, 8, 8, 8, 8],
                    [8, 8, 8, 1, 1, 1, 8, 8],
                    [8, 8, 8, 1, 0, 1, 8, 8],
                    [8, 8, 8, 1, 1, 1, 8, 8],
                    [8, 8, 8, 8, 8, 8, 8, 8],
                    [8, 8, 8, 8, 8, 8, 8, 8]];

testRev.corner =   [[1, 1, 1, 1, 1, 1, 8, 8],   // 角に積極的に置く
                    [1, 1, 1, 1, 1, 1, 8, 8],
                    [1, 1, 1, 1, 1, 1, 0, 8],
                    [1, 1, 1, 1, 1, 1, 1, 1],
                    [0, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 8],
                    [8, 1, 1, 1, 1, 1, 1, 8],
                    [8, 1, 1, 1, 1, 1, 1, 8]];

testRev.avoid =    [[8, 0, 1, 8, 8, 8, 8, 8],   // 指し手なしの回避
                    [8, 8, 8, 8, 8, 8, 8, 8],
                    [8, 8, 8, 8, 8, 8, 8, 8],
                    [8, 8, 8, 1, 0, 8, 8, 8],
                    [8, 8, 8, 0, 1, 8, 8, 8],
                    [8, 8, 8, 8, 8, 8, 8, 8],
                    [8, 8, 8, 8, 8, 8, 8, 8],
                    [8, 8, 8, 8, 8, 8, 8, 8]];

testRev.around =   [[8, 8, 8, 8, 8, 8, 8, 8],   // 周囲判定
                    [8, 8, 8, 8, 8, 8, 8, 8],
                    [0, 8, 8, 8, 8, 8, 8, 8],
                    [8, 0, 1, 0, 1, 8, 8, 8],
                    [0, 8, 8, 1, 0, 8, 8, 8],
                    [8, 8, 8, 8, 8, 8, 8, 8],
                    [8, 8, 8, 8, 8, 8, 8, 8],
                    [8, 8, 8, 8, 8, 8, 8, 8]];
