import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  //General
  faChevronRight,
  faPersonDigging,

  //User
  faUser,
  faUserTie,
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
    faPersonDigging,

    // User:
    faUser,
    faUserTie,
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
