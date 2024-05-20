import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  //General
  faChevronRight,
  faPersonDigging,

  //User
  faUser,
  faUserTie,
  faGear,
  faBell,
  faRightFromBracket,

  //Nav
  faHouse,
  faBook,
  faPlateWheat,
  faBroom,

  // Utility:
  faMagnifyingGlass,
  faUpload,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export const useFontAwesomeIcon = () => {
  library.add(
    // General:
    faChevronRight,
    faPersonDigging,

    // User:
    faUser,
    faUserTie,
    faGear,
    faBell,
    faRightFromBracket,

    // Nav:
    faHouse,
    faBook,
    faPlateWheat,
    faBroom,

    // Utility:
    faMagnifyingGlass,
    faUpload,
    faPlus,
  );

  return {
    FontAwesomeIcon,
  };
};
