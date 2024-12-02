const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

// 데이터 저장소 (임시 메모리 저장소)
let totalLikes = 0; // 전체 좋아요 수
const userLikes = {}; // 유저별 좋아요 상태 { userId: true/false }

// 미들웨어
app.use(bodyParser.json());

// 전체 좋아요 데이터 가져오기
app.get('/api/total-likes', (req, res) => {
    res.json({ totalLikes });
});

// 좋아요 요청 처리
app.post('/api/like', (req, res) => {
    const { userId } = req.body;

    // 이미 좋아요 누른 상태인지 확인
    if (userLikes[userId]) {
        return res.status(400).json({ success: false, message: '이미 좋아요를 눌렀습니다.' });
    }

    // 좋아요 처리
    userLikes[userId] = true;
    totalLikes++;

    res.json({ success: true, totalLikes });
});

// 좋아요 취소 요청 처리
app.post('/api/unlike', (req, res) => {
    const { userId } = req.body;

    // 좋아요를 누르지 않은 상태인지 확인
    if (!userLikes[userId]) {
        return res.status(400).json({ success: false, message: '좋아요를 누르지 않았습니다.' });
    }

    // 좋아요 취소 처리
    userLikes[userId] = false;
    totalLikes--;

    res.json({ success: true, totalLikes });
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
