// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');

server.use(middlewares);
server.use(bodyParser.json());

// ✅ Thêm endpoint /login
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = router.db.get('useraccounts').value();
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({
      success: true,
      username: user.username,
      avatar: user.avatar,
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Sai tên đăng nhập hoặc mật khẩu.',
    });
  }
});

server.use(router);

server.listen(3001, () => {
  console.log('🚀 JSON Server is running at http://localhost:3001');
});
