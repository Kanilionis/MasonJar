import axios from "axios";

export default {
  // Gets all themes
  getThemes: function() {
    return axios.get("/api/shakeIt/themes");
  },
  // gets all activities by a given theme
  getActivitiesByTheme: function(theme) {
    return axios.get("/api/shakeIt/" + theme);
  }
};
