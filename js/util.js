function getRandomPositiveInteger (a, b) {
    if (a < 0 || b < 0) {
      return NaN;
    }
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));

    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  }
  const checkStringLength = (string, length) => string.length <= length;

  const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

  const isEscapeKey = (evt) => evt.key === 'Escape';

  export {getRandomArrayElement,getRandomPositiveInteger, checkStringLength, isEscapeKey};