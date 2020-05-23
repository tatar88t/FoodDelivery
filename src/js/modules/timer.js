const timer = () => {
    
    const liveTimer = () => {
        const 
          deadline = new Date(2021, 0, 1),
          currentDate = Date.parse(new Date()),
          time = deadline - currentDate,
          timerField = document.querySelector('.timer'),
          secondsField = document.querySelector('#seconds'),
          minutesField = document.querySelector('#minutes'),
          hoursField = document.querySelector('#hours'),
          daysField = document.querySelector('#days');
        
        let seconds = Math.floor((time/1000)%60),
            minutes = Math.floor((time/1000/60)%60),
            hours = Math.floor((time/1000/60/60)%24),
            days = Math.floor((time/1000/60/60/24));
    
        const setClock = () => {
            if(seconds < 10){
                secondsField.textContent = '0' + seconds; 
            } else {secondsField.textContent = seconds;}
            if (minutes < 10) {
                minutesField.textContent = '0' + minutes;
            } else {minutesField.textContent = minutes;}
            if(hours < 10) {
                hoursField.textContent = '0' + hours;
            } else {hoursField.textContent = hours;}
            if(days < 10) {
                daysField.textContent = '0' + days;
            } else {daysField.textContent = days;}
            
               
        }
        setClock();
        
        if (time <= 0){
            clearInterval(timerId);
            secondsField.textContent = '00';
            minutesField.textContent = '00';
            hoursField.textContent = '00';
            daysField.textContent = '00';
        }

    }
    
    const timerId = setInterval(liveTimer, 1000);
    
    
}
export default timer;