import { useSelector } from "react-redux";

import SearchBar from "@/features/widget/SearchBar";
import LinksWidget from "@/features/widget/LinksWidget";
import Tabber from "@/features/widget/Tabber";
import { RootState } from "@/store/rootReducer";

import { WIDGETS } from "@/features/widget/Tabber";

enum WidgetThemes {
  Default = "general",
  Alert = "pink"
}

const linksForMonth = [
  {
    name: "April 2021",
    path: "/"
  },
  {
    name: "March 2021",
    path: "/"
  },
  {
    name: "February 2021",
    path: "/"
  },
  {
    name: "January 2021",
    path: "/"
  },
  {
    name: "December 2020",
    path: "/"
  },
  {
    name: "November 2020",
    path: "/"
  },
  {
    name: "October 2020",
    path: "/"
  },
  {
    name: "September 2020",
    path: "/"
  },
  {
    name: "August 2020",
    path: "/"
  },
  {
    name: "July 2020",
    path: "/"
  },
  {
    name: "June 2020",
    path: "/"
  },
  {
    name: "May 2020",
    path: "/"
  }
];

const linksForPosts = [
  {
    name: "exampleA",
    path: "/"
  },
  {
    name: "exampleB",
    path: "/"
  },
  {
    name: "exampleC",
    path: "/"
  },
  {
    name: "exampleD",
    path: "/"
  },
  {
    name: "exampleE",
    path: "/"
  },
  {
    name: "exampleF",
    path: "/"
  },
  {
    name: "exampleG",
    path: "/"
  },
  {
    name: "exampleH",
    path: "/"
  },
  {
    name: "exampleI",
    path: "/"
  },
  {
    name: "exampleJ",
    path: "/"
  },
  {
    name: "exampleK",
    path: "/"
  },
  {
    name: "exampleL",
    path: "/"
  }
];

const linksForTags = [
  {
    name: "tag1",
    path: "/"
  },
  {
    name: "tag2",
    path: "/"
  },
  {
    name: "tag3",
    path: "/"
  }
];

export default function MobileWidgets() {
  const nameOfActiveWidget = useSelector(
    (state: RootState) => state.widget.nameOfActiveWidget
  );

  return (
    <>
      {nameOfActiveWidget === WIDGETS[0].name && (
        <LinksWidget
          title="recent posts"
          links={linksForPosts}
          theme={WidgetThemes.Alert}
        />
      )}
      {nameOfActiveWidget === WIDGETS[1].name && (
        <LinksWidget
          title="archives"
          links={linksForMonth}
          theme={WidgetThemes.Default}
        />
      )}
      {nameOfActiveWidget === WIDGETS[2].name && <SearchBar />}
      {nameOfActiveWidget === WIDGETS[3].name && (
        <LinksWidget
          title="tags"
          links={linksForTags}
          theme={WidgetThemes.Default}
        />
      )}
      <Tabber />
    </>
  );
}
