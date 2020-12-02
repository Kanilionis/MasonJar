import axios from "axios";

export default {
  // Gets all books
  getShakers: function() {
    return axios.get("/api/shakers");
  },
  getChosenShaker: function(theme, id){
    return axios.get("/api/shakers/"+ theme + "/" + id)
  }
  // Gets the shaker with the given id
  // getDateNightInShaker: function(id) {
  //   return axios.get("/api/shakers/" + id);
  // },
  // getDateNightOutShaker: function(id) {
  //   return axios.get("/api/shakers/" + id)
  // },
  // getNetflixandChillShaker: function(id) {
  //   return axios.get("/api/shakers/" + id)
  // },
  // getWeekendShaker: function(id) {
  //   return axios.get("/api/shakers/" + id)
  // },
  // getOutdoorShaker: function(id) {
  //   return axios.get("/api/shakers/" + id)
  // }

};
