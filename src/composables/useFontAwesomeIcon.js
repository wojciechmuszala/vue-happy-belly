import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  //General
  faChevronRight,

  //User
  faUser,
  faRightToBracket,

  //Nav
  faHouse,
  faBook,
  faPlateWheat,
} from "@fortawesome/free-solid-svg-icons";

export const useFontAwesomeIcon = () => {
  library.add(
    // General:
    faChevronRight,

    // User:
    faUser,
    faRightToBracket,

    // Nav:
    faHouse,
    faBook,
    faPlateWheat,
  );

  return {
    FontAwesomeIcon,
  };
};
