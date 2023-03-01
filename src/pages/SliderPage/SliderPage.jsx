import React from "react";
import LinkToMain from "../../components/LinkToMain/LinkToMain";
import PagesContent from "../../components/PagesContent/PagesContent";
import Slider from "../../components/project/Slider/Slider";

const dataImg = [
  {
    id: 0,
    title: "Image 1",
    imgLink:
      "https://wallpapers.com/images/high/happy-new-year-2023-banner-2a6he054xbdhjc9d.webp",
  },
  {
    id: 1,
    title: "Image 2",
    imgLink:
      "https://wallpapers.com/images/high/happy-new-year-2023-foil-balloons-2szjdk22elgh31gg.webp",
  },
  {
    id: 2,
    title: "Image 3",
    imgLink:
      "https://wallpapers.com/images/high/wonderful-happy-new-year-2023-present-red-ribbon-31huq7u279gwh9pd.webp",
  },
  {
    id: 3,
    title: "Image 4",
    imgLink:
      "https://wallpapers.com/images/high/artistic-happy-new-year-2023-4f2tut7bn7qr094p.webp",
  },
];

const SliderPage = () => {
  return (
    <>
      <LinkToMain />
      <PagesContent
        title="Slider no loop"
        component={<Slider data={dataImg} />}
      />
      <PagesContent
        title="Slider with repeat"
        component={<Slider data={dataImg} loop={true} />}
      />
    </>
  );
};

export default SliderPage;
