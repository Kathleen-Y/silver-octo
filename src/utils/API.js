import axios from "axios";
// Export an object containing methods we'll use for accessing the employee API
const BASEURL = "https://randomuser.me/api/?results=200&nat=us";


export default {
  search: function() {
       return axios.get(BASEURL);
  }
};

