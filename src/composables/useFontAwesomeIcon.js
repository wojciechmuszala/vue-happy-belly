import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronRight,
  faHouse,
  faBowlFood,
  faDice,
} from "@fortawesome/free-solid-svg-icons";

export const useFontAwesomeIcon = () => {
  library.add(faChevronRight, faHouse, faDice, faBowlFood);

  return {
    FontAwesomeIcon,
  };
};
