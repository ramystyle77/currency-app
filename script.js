* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background: #000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
    min-height: 100vh;
    display: flex;
    justify-content: center;
}

.container {
    width: 100%;
    min-height: 100vh;
    background: radial-gradient(circle at center, #0a191e 0%, #000 100%);
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: inset 0 0 50px #00fff033;
    text-align: center;
}

/* تأثيرات النيون الموحدة */
.neon-text {
    color: #00fff0;
    text-shadow: 0 0 5px #00fff0, 0 0 10px #00fff0, 0 0 20px #00fff0;
    font-size: 22px;
    margin-bottom: 15px;
}

.neon-text-alt {
    color: #ff00ff;
    text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff;
    margin: 20px 0;
}

.info-section p {
    color: #ccc;
    font-size: 14px;
    margin-bottom: 5px;
}

/* تنسيق المدخلات */
input, select {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    background: #111;
    border: 1px solid #00fff0;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    outline: none;
}

input:focus {
    box-shadow: 0 0 10px #00fff0;
}

button {
    width: 100%;
    padding: 15px;
    margin-top: 15px;
    background: transparent;
    border: 2px solid #ff00ff;
    border-radius: 50px;
    color: #ff00ff;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
    text-shadow: 0 0 5px #ff00ff;
    box-shadow: 0 0 10px #ff00ff33;
}

button:active {
    background: #ff00ff;
    color: #000;
}

#result {
    margin-top: 25px;
    font-size: 20px;
    min-height: 50px;
}

/* التذييل (Footer) */
footer {
    margin-top: auto;
    padding-top: 30px;
}

.neon-footer {
    color: #00fff0;
    text-shadow: 0 0 5px #00fff0;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 5px;
}

.dedication {
    color: #555;
    font-size: 12px;
}
