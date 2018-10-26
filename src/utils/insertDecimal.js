const  insertDecimal = (num)  => {
  if(isNaN(num)) return;
  return (parseInt(num) / 100).toFixed(2).toString()
};
export default insertDecimal;
