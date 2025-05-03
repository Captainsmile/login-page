function login() {
  const password = document.getElementById('password').value;
  const correctPassword = '112233'; // 设置你的密码
  const redirectURL = 'https://www.kdocs.cn/l/cai2S9P8bG9l'; // 设置你的金山文档链接

  if (password === correctPassword) {
    window.location.href = redirectURL;
  } else {
    document.getElementById('message').textContent = '密码错误，请重试。';
  }
}
