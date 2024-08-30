const rollFateDice = () => {
    const diceFaces = [-1, 0, 1];
    let total = 0;

    for (let i = 0; i < 4; i++) {
        total += diceFaces[Math.floor(Math.random() * diceFaces.length)];
    }

    return total;
};
