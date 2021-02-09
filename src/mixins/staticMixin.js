export default {
  methods: {
    setStrCapitalized(str) {
      if (!str) return;
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    replaceNotDigits(str) {
      return str.replace(/\D/g, "");
    },
    isNumber(e) {
      let charCode = e.keyCode;

      /*if (isNaN(e.target.value))
				e.target.value = e.target.value.slice(0, -1);*/

      if (
        e.shiftKey ||
        (charCode > 31 &&
          charCode !== 32 &&
          (charCode !== 44 || isDecimal) &&
          (charCode !== 45 || !allowMinus) &&
          (charCode !== 46 || isDecimal) &&
          (charCode < 48 || charCode > 57) &&
          (charCode < 96 || charCode > 105) &&
          charCode !== 108 &&
          charCode !== 110 &&
          charCode !== 190 &&
          charCode !== 191)
      ) {
        e.preventDefault();
        return false;
      } else {
        return true;
      }
    },
  },
};
