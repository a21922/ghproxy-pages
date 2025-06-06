function generate() {
  const input = document.getElementById("inputUrl").value.trim();
  const resultDiv = document.getElementById("result");
  const validDomains = [
    "github.com",
    "api.github.com",
    "codeload.github.com",
    "github-releases.githubusercontent.com",
    "gist.github.com",
    "raw.githubusercontent.com"
  ];

  try {
    const url = new URL(input);
    if (!validDomains.includes(url.hostname)) {
      resultDiv.innerHTML = `<p style="color:red;">❌ 不支持的域名：${url.hostname}</p>`;
      return;
    }

    const proxyUrl = `https://ghproxy.edgeone.app/${url.href}`;
    resultDiv.innerHTML = `
      <p>✅ 加速链接：</p>
      <a href="${proxyUrl}" target="_blank">${proxyUrl}</a>
    `;
  } catch (e) {
    resultDiv.innerHTML = `<p style="color:red;">❌ 请输入合法的 URL！</p>`;
  }
}
