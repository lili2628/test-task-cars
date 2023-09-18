export const cutPhrase = phrase => {

  if (phrase.length > 20) {
    const newPhrase = phrase.slice(0, 21);

    return newPhrase;

  } else return phrase;
};
