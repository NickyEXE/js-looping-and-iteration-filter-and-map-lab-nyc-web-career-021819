// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  const filteredDrivers = drivers.filter(driver => driver.revenue > revenue)
  return filteredDrivers
}

function driverNamesWithRevenueOver(drivers, revenue){
  let newDrivers = driversWithRevenueOver(drivers, revenue)
  newDrivers = newDrivers.map(driver => driver.name)
  return newDrivers
}

function exactMatch(drivers, condition){
  const filteredDrivers = drivers.filter(driver => driver[Object.keys(condition)] == condition[Object.keys(condition)])
  return filteredDrivers
}

function exactMatchToList(drivers, condition){
  let newDrivers = exactMatch(drivers,condition)
  newDrivers = newDrivers.map(driver => driver.name)
  return newDrivers
}
