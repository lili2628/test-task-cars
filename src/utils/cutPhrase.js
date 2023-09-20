export const cutPhrase = phrase => {

  if (phrase.length > 10) {
    const newPhrase = phrase.slice(0, 11);

    return newPhrase;

  } else return phrase;
};
