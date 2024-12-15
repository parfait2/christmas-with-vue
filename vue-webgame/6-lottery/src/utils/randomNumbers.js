// 로또 번호를 무작위로 섞어서 반환
export function getWinNumbers() {
    // const candidate = Array(45).fill().map((v, i) => i + 1);
    // Array.from : 직관적으로 배열 생성할 수 있는 메서드. fill()를 호출할 필요 없음.(코드가 간결하고 읽기 쉬워짐)
    const candidate = Array.from({ length: 45 }, (_, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    // const bonusNumber = shuffle.pop();
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber]; // 당첨 번호 6개와 보너스 번호를 하나의 배열에 담아 반환
    // return { winNumbers, bonusNumber } // 당첨 번호와 보너스 번호를 객체 형태로 반환
}