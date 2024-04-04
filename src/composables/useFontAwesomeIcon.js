import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faBowlFood } from "@fortawesome/free-solid-svg-icons";

export const useFontAwesomeIcon = () => {
  library.add(faHouse, faBowlFood);

  return {
    FontAwesomeIcon,
  };
};
