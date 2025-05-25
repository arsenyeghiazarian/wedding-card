(function(){
      // 1) compute target date: June 28 of current year at midnight
      const now       = new Date();
      const year      = now.getFullYear();
      let   target    = new Date(year, 5, 28, 0, 0, 0);

      //  optional: if that date’s already passed, countdown to next year
      if (now > target) {
        target = new Date(year + 1, 5, 28, 0, 0, 0);
      }

      const outputEl = document.getElementById('countdown');

      function update() {
        const now   = new Date();
        let   diff  = target - now;  // milliseconds remaining

        if (diff <= 0) {
          outputEl.textContent = '🎉 The day is here!';
          clearInterval(timer);
          return;
        }

        // 2) compute days, hours, minutes
        const msInMin  = 1000 * 60;
        const msInHour = msInMin * 60;
        const msInDay  = msInHour * 24;

        const days    = Math.floor(diff / msInDay);
        diff          = diff % msInDay;

        const hours   = Math.floor(diff / msInHour);
        diff          = diff % msInHour;

        const minutes = Math.floor(diff / msInMin);

        // 3) render
        outputEl.textContent = 
          String(days).padStart(2, '0') + ' ' +
          String(hours).padStart(2, '0') + ' ' +
          String(minutes).padStart(2, '0') + ' ';
      }

      // first render immediately, then every minute
      update();
      const timer = setInterval(update, 1000);
    })();