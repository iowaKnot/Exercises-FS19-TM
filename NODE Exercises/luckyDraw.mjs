const players = ["Joe", "Caroline", "Sabrina"];

const luckyDraw = (player) => {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
};

const executeLuckyDraw = (player) => {
  luckyDraw(player)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message);
    });
};

players.forEach((player) => {
  executeLuckyDraw(player);
});
