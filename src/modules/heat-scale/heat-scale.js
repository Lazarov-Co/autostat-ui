(function() {
  function setHeatScales() {
    const heatScales = document.querySelectorAll('.HeatScale');

    heatScales.forEach(heatScale => {
      const value = parseFloat(heatScale.getAttribute('data-value'));
      const percentage = (value * 100) + '%';
      const indicator = heatScale.querySelector('.HeatScale-scale-indicator');
      const realValue = heatScale.querySelector('.HeatScale-realValue');

      indicator.style.left = percentage;
      realValue.style.left = percentage;
      if (value > 0.25 && value < 0.75) indicator.classList.add('HeatScale-scale-indicator--yellow'); 
      if (value >= 0.75) indicator.classList.add('HeatScale-scale-indicator--green');
      realValue.classList.add('is-active');
    });
  }

  window.addEventListener('load', setHeatScales);
})();