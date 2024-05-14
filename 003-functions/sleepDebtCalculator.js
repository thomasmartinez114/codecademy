getSleepHours = (day) => {
  day = day.toLowerCase()

  // switch conditional for the days
  switch (day) {
    case "sunday":
      return 7
    case "monday":
      // console.log(8)
      return 6
    case "tuesday":
      return 10
    case "wednesday":
      return 6
    case "thursday":
      return 10
    case "friday":
      return 20
    case "saturday":
      return 7
  }
}

getActualSleepHours = () => {
  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ]

  let hoursOfSleep = 0

  // iterate through days arr and tally hoursOfSleep
  for (let i = 0; i < days.length; i++) {
    hoursOfSleep += getSleepHours(days[i])
    // console.log(hoursOfSleep)
  }

  // console.log(hoursOfSleep)
  return hoursOfSleep
}

getIdealSleepHours = () => {
  let idealHours = 8
  return idealHours * 7
}

calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()

  if (actualSleepHours === idealSleepHours) {
    console.log("User got perfect amount of sleep")
  } else if (actualSleepHours > idealSleepHours) {
    let sleepDifference = actualSleepHours - idealSleepHours
    console.log(`User got ${sleepDifference} more sleep than needed`)
  } else {
    let sleepDifference = idealSleepHours - actualSleepHours
    console.log(`User should get ${sleepDifference} more rest`)
  }
}

// getSleepHours('monday')
// getActualSleepHours()
calculateSleepDebt()
