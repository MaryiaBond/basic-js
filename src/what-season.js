module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  try {
    if(typeof date.getMonth === "function" ) {
      if (Object.prototype.toString.call(date) === "[object Date]") {
  
        if (isNaN(date.getTime()) && isNaN(date.getMonth())&& isNaN(date.getYear())) {
          throw new Error
        } 
      } else {
        throw new Error
      }
          let month = date.getMonth()
          
          console.log(month)
          let season = ''
          month < 11 && month > 7 ? season = 'autumn' 
          : month > 1 && month < 5 ? season = 'spring' 
          : month > 4 && month < 8 ? season = 'summer' : season = 'winter'
         return season
    }
    else {
      throw Error()
    }
    }
    catch {
      throw new Error
    }
  
};
