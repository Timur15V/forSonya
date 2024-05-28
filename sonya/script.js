const canvasP = document.getElementById('canvas_p');
const ctx = canvasP.getContext('2d');

const canvasP_Width = canvasP.clientWidth;
const canvasP_Height = canvasP.clientHeight;

const scaleX = 60;
const scaleY = 60;

const xAxis = Math.round(canvasP_Width / scaleX / 2) * scaleX;
const yAxis = Math.round(canvasP_Height / scaleY / 2) * scaleY;

ctx.font = `${Math.round((scaleX / 2) / 2)}px Arial`;
ctx.textAlign = 'left';
ctx.textBaseline = 'top';

// Создадим сетку
ctx.beginPath();
ctx.strokeStyle = '#808080';

for (let i = 0; i <= canvasP_Width; i += scaleX) {
   ctx.moveTo(i, 0);
   ctx.lineTo(i, canvasP_Height);

   ctx.fillText((i - xAxis) / scaleX, i + 3, yAxis + 3);
}

for (let j = 0; j <= canvasP_Height; j += scaleY) {
   ctx.moveTo(0, j);
   ctx.lineTo(canvasP_Width, j);

   ctx.fillText((yAxis - j) / scaleY, xAxis + 3, j + 3);
}

ctx.stroke();
ctx.closePath();

// Cоздадим главные оси
ctx.beginPath();
ctx.strokeStyle = '#000000';
ctx.moveTo(xAxis, 0);
ctx.lineTo(xAxis, canvasP_Height);
ctx.fillText('y', xAxis - 20, 0);

ctx.moveTo(0, yAxis);
ctx.lineTo(canvasP_Width, yAxis);
ctx.fillText('x', canvasP_Width - 20, yAxis - 20);

ctx.stroke();
ctx.closePath();

// Рисуем график
ctx.fillStyle = '#ff0000';

for (let k = 0; k <= canvasP_Width; k++) {
   for (let a = 1; a <= 20; a += 0.5) {
      const x = (k - xAxis) / scaleX;
      const y = (-20 * Math.cos((a * Math.PI) / 10) + 7 * Math.abs(x) + Math.sqrt(400 * Math.pow(Math.cos((a * Math.PI) / 10), 2) - 280 * Math.cos((a * Math.PI) / 10) * Math.abs(x) - 351 * Math.pow(x, 2) - 800 * Math.sin((a * Math.PI) / 10) * x)) / 20;
      const y1 = (-20 * Math.cos((a * Math.PI) / 10) + 7 * Math.abs(x) - Math.sqrt(400 * Math.pow(Math.cos((a * Math.PI) / 10), 2) - 280 * Math.cos((a * Math.PI) / 10) * Math.abs(x) - 351 * Math.pow(x, 2) - 800 * Math.sin((a * Math.PI) / 10) * x)) / 20;


      setTimeout(() => {
         ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 2, 2)
      }, 1000)
      setTimeout(() => {
         ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y1, 2, 2)
      }, 2000)
   }
}

