const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// MySQL 연결 설정
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'likes_db',
});

db.connect((err) => {
    if (err) {
        console.error('MySQL 연결 실패:', err);
        return;
    }
    console.log('MySQL 연결 성공!');
});

// 미들웨어 설정
app.use(bodyParser.json());
app.use(cors());

// 전체 좋아요 데이터 가져오기
app.get('/api/total-likes', (req, res) => {
    db.query('SELECT total_count FROM total_likes WHERE id = 1', (err, result) => {
        if (err) {
            console.error('쿼리 실행 중 오류:', err);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }

        const totalLikes = result[0]?.total_count || 0;
        res.json({ totalLikes });
    });
});

// 좋아요 요청 처리
app.post('/api/like', (req, res) => {
    const { userId } = req.body;

    db.query('SELECT liked FROM likes WHERE userId = ?', [userId], (err, result) => {
        if (err) {
            console.error('쿼리 실행 중 오류:', err);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }

        if (result.length > 0 && result[0].liked) {
            return res.status(400).json({ success: false, message: '이미 좋아요를 눌렀습니다.' });
        }
        // 좋아요 처리
        db.query(
            'INSERT INTO likes (userId, liked) VALUES (?, true) ON DUPLICATE KEY UPDATE liked = true',
            [userId],
            (err) => {
                if (err) {
                    console.error('좋아요 처리 중 오류:', err);
                    return res.status(500).json({ success: false, message: 'Internal Server Error' });
                }

                // 전체 좋아요 수 증가
                db.query('UPDATE total_likes SET total_count = total_count + 1 WHERE id = 1', (err) => {
                    if (err) {
                        console.error('전체 좋아요 카운트 증가 중 오류:', err);
                        return res.status(500).json({ success: false, message: 'Internal Server Error' });
                    }

                    res.json({ success: true });
                });
            }
        );
    });
});

// 좋아요 취소 요청 처리
app.post('/api/unlike', (req, res) => {
    const { userId } = req.body;

    // 좋아요 상태 확인
    db.query('SELECT liked FROM likes WHERE userId = ?', [userId], (err, result) => {
        if (err) {
            console.error('쿼리 실행 중 오류:', err);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }

        if (result.length === 0 || !result[0].liked) {
            return res.status(400).json({ success: false, message: '좋아요를 누르지 않았습니다.' });
        }

        // 좋아요 취소 처리
        db.query('UPDATE likes SET liked = false WHERE userId = ?', [userId], (err) => {
            if (err) {
                console.error('좋아요 취소 중 오류:', err);
                return res.status(500).json({ success: false, message: 'Internal Server Error' });
            }

            // 전체 좋아요 수 감소
            db.query('UPDATE total_likes SET total_count = total_count - 1 WHERE id = 1', (err) => {
                if (err) {
                    console.error('전체 좋아요 카운트 감소 중 오류:', err);
                    return res.status(500).json({ success: false, message: 'Internal Server Error' });
                }

                res.json({ success: true });
            });
        });
    });
});


// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
