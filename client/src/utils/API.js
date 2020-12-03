import axios from "axios";

export default {
  // Gets all themes
  getThemes: function() {
    return axios.get("/api/shakeit/themes");
  },
  // gets all activities by a given theme
  getActivitiesByTheme: function(theme) {
    return axios.get("/api/shakeit/" + theme);
  }
};
