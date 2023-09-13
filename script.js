document.addEventListener('DOMContentLoaded', function () {
  const inputValue = document.getElementById('inputValue');
  const unit = document.getElementById('unit');
  const convertBtn = document.getElementById('convertBtn');
  const result = document.getElementById('result');

  convertBtn.addEventListener('click', function () {
      const value = parseFloat(inputValue.value);
      const selectedUnit = unit.value;

      let convertedValue;

      switch (selectedUnit) {
          case 'meter':
              convertedValue = value;
              break;
          case 'kilometer':
              convertedValue = value * 0.001;
              break;
          case 'sekon':
              convertedValue = value;
              break;
          case 'ampere':
              convertedValue = value;
              break;
          case 'kelvin':
              convertedValue = value;
              break;
          case 'candela':
              convertedValue = value;
              break;
          case 'mole':
              convertedValue = value;
              break;
          default:
              convertedValue = 'Invalid unit';
      }

      result.textContent = `Converted value: ${convertedValue}`;
  });
});
