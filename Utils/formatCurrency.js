const formatCurrency= (amount)=>{
    if (!amount) return "£0.00";
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    }).format(amount);
  }
  
  module.exports = formatCurrency;