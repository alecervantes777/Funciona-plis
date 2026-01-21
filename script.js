function generarQR() {
  const texto = document.getElementById('texto').value.trim();
  if (!texto) { alert('Escribe algo primero'); return; }

  const canvas = document.getElementById('qrcode');
  const ctx    = canvas.getContext('2d');
  const qr     = qrcode(0, 'H'); // error-correction High
  qr.addData(texto);
  qr.make();

  const cellW = 4;
  canvas.width  = qr.getModuleCount() * cellW;
  canvas.height = qr.getModuleCount() * cellW;

  for (let row = 0; row < qr.getModuleCount(); row++) {
    for (let col = 0; col < qr.getModuleCount(); col++) {
      ctx.fillStyle = qr.isDark(row, col) ? '#000000' : '#ffffff';
      ctx.fillRect(col * cellW, row * cellW, cellW, cellW);
    }
  }
}