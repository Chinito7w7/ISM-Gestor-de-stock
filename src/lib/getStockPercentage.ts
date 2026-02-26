const getStockPercentage = (stock: number,) => {
    const max = 100;
    return Math.min((stock / max) * 100, 100);
  };

export default getStockPercentage