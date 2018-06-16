const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
  .map(node => node.dataset.time) // get time of each video
  .map(timecode => { // convert time to seconds
    const [mins, secs] = timecode.split(':').map(parseFloat); // get mins, seconds, also converting string array to number
    return (mins * 60) + secs;
  })
  .reduce((total, arrSeconds) => total + arrSeconds); // return combined time in seconds

  let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft / 3600); // no of hours
  secondsLeft = secondsLeft % 3600;

  const mins = Math.floor(secondsLeft / 60); // no of mins
  secondsLeft = secondsLeft % 60;

  console.log(hours, mins, secondsLeft);