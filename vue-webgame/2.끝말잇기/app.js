const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

// 단어 유효성 검증 API
app.post('/api/validate-word', (req, res) => {
    const { word } = req.body;

    // 단어 유효성 검증(길이 체크)
    if (word && word.length > 1) {
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
