function calculateTime(deliveries) {
    const tLimitInS = 25200
    const totalS = deliveries.map(t => {
      const tArr = t.split(':')
      tArr[0] = Number(tArr[0]) * 3600
      tArr[1] = Number(tArr[1] * 60)
      tArr[2] = Number(tArr[2])
      return tArr.reduce((acum, current) => acum + current, 0)
    }).reduce((acum, current) => acum + current, 0)
    const timeLeft = Math.abs(tLimitInS - totalS)
    const sign = tLimitInS - totalS > 0 ? '-' : ''
    const hLeft = `${Math.floor(timeLeft / 3600)}`
    const mLeft = `${Math.floor((timeLeft - hLeft * 3600) / 60)}`
    const sLeft = `${timeLeft - hLeft * 3600 - mLeft * 60}`
  
    return `${sign}${hLeft.padStart(2, 0)}:${mLeft.padStart(2, 0)}:${sLeft.padStart(2, 0)}`
  }
  
  console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))
  
  
  function calculateTime(deliveries) {
    const tLimitInS = 25200
    let totalS = 0
    for(const t of deliveries){
      const tArr = t.split(':')
      totalS += tArr[0] * 3600 + tArr[1] * 60 + +(tArr[2])
    }
    
    const timeLeft = Math.abs(tLimitInS - totalS)
    const sign = ['', '-'][+(tLimitInS - totalS > 0)]
    const h = `${Math.floor(timeLeft / 3600)}`.padStart(2, 0)
    const m = `${Math.floor((timeLeft - h * 3600) / 60)}`.padStart(2, 0)
    const s = `${timeLeft - h * 3600 - m * 60}`.padStart(2, 0)
  
    return `${sign}${h}:${m}:${s}`
  }
  
  console.log(calculateTime(['01:00:00', '05:00:00', '00:30:00']))