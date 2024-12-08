const OPTIONS = {
    ROCK: '바위',
    SCISSORS: '가위',
    PAPER: '보',
};
const rpsCoords = {
    [OPTIONS.ROCK]: '0',
    [OPTIONS.SCISSORS]: '-142px',
    [OPTIONS.PAPER]: '-284px',
};

// 점수 매핑
const scores = {
    [OPTIONS.SCISSORS]: 1,
    [OPTIONS.ROCK]: 0,
    [OPTIONS.PAPER]: -1,
};

// 컴퓨터의 선택을 이미지 좌표로 변환
const computerChoice = (imgCoord) => {
    return Object.entries(rpsCoords).find(function (v) {
        return v[1] === imgCoord;
    })[0];
};

export { OPTIONS, rpsCoords, scores, computerChoice };
