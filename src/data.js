const dataComponents = [
  {
    id: "1",
    name: "Slider",
    description:
      "The Slider component accepts an array of objects and a 'loop' value, which is responsible for repeating the slider.",
    url: "slider",
  },
  {
    id: "2",
    name: "Hidden text",
    description:
      "Сomponent that accepts a string consisting of a large number of sentences, returns a reduced string to one sentence and a button to expand the string",
    url: "hidden_text",
  },
  {
    id: "3",
    name: "Accordion",
    description:
      "Accordion component, accepts an array of objects, returns a list with dropdown content",
    url: "accordion",
  },
  {
    id: "4",
    name: "Translator v1",
    description:
      "List component, word-translation, saves words in an array of objects, when translating a word, it checks the “translation” property of the object, if necessary, changes it to the desired one",
    url: "translator_v1",
  },
  {
    id: "5",
    name: "Translator v2",
    description:
      "List component, word-translation, saves words in an array of objects, uses the state of the component to translate the word",
    url: "translator_v2",
  },
  {
    id: "6",
    name: "Pagination",
    description:
      "Pagination component, accepts a link to api, returns a list of elements with pagination",
    url: "pagination",
    favorites: true,
  },
  {
    id: "7",
    name: "To-do list with sections",
    description: "Todo",
    url: "todo",
  },
  {
    id: "8",
    name: "Area",
    description: "Area",
    url: "area",
  },
];

const dataProject = [
  {
    id: "1",
    name: "Countries",
    description:
      "Project information about countries, made on react and react router, database is taken from api",
    link: "https://info-about-countries.netlify.app/",
    favorites: true,
  },
];

export { dataComponents, dataProject };
