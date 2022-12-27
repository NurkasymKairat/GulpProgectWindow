const times = (days, hours, minutes, seconds, line) => {

    const day= document.querySelector(days),
        hour = document.querySelector(hours),
        minute = document.querySelector(minutes),
        second = document.querySelector(seconds);

    let deadline = line;

    timeLIne();

    function timeLIne()  {
        const t = Date.parse(deadline) - Date.parse(new Date()),
        d = Math.floor((t/(1000 * 60 * 60 * 24))),
        h = Math.floor((t/(1000 * 60 * 60) % 24)),
        m = Math.floor( (t/1000/60) % 60 ),
        s = Math.floor( (t/(1000) % 60));


        function getZero(num) {
            if (num >= 0 && num < 10) {
                return '0' + num;
            } else {
                return num;
            }
        }
    
        day.innerHTML = `${getZero(d)}`;
        hour.innerHTML = `${getZero(h)}`;
        minute.innerHTML = `${getZero(m)}`;
        second.innerHTML = `${getZero(s)}`;

        if (t <= 0) {
            clearInterval(ti);
        }

    }

    let ti = setInterval(timeLIne, 1000);

   
 
};

export default times;