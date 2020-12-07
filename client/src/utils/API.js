import axios from "axios";

export default {
  // Gets all themes
  getThemes: function() {
    return axios.get("/api/shakeit");
  },
  // gets all activities by a given theme
  getActivitiesByTheme: function(theme) {
    return axios.get("/api/shakeit/" + theme);
  },

  // Saves a theme to the database
  saveTheme: function(theme) {
    return axios.post("/api/shakeit/" + theme);
  },

  //Inserts a new activity into the theme
  saveActivity: function(theme, activity){
    return axios.put("/api/shakeit/" + theme + "/" + activity)
  },

  deleteActivity: function(theme, activity){
    return axios.put("/api/shakeit/delete/" + theme + "/" + activity)
  },

  updateActivity: function(theme, activity, index){
    return axios.put("/api/shakeit/update/" + theme + "/" + activity + "/" + index)
  },

  deleteTheme: function(theme){
    return axios.delete("/api/shakeit/" + theme)
  }
};
   