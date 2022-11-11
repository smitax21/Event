import axios from "axios";
const url = "http://localhost:3001/";

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }

  // the call function to access protected endpoints
  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        // function that returns the token in state
        authorization: this.tokenProvider(),
      },
      data,
    }).catch((error) => {
      if (error.response.status === 403) {
        //this.logoutHandler()
        return Promise.reject();
      } else {
        throw error;
      }
    });
  }
  async login(userName, password) {
    return axios({
      method: "post",
      url: `${url}auth`,
      data: {
        userName,
        password,
      },
    }).catch((error) => {
      throw error;
    });
  }

  getEvent() {
    return this.authenticatedCall("get", url);
  }

  addEvent(id, name, description, location, date, time, attendance) {
    return this.authenticatedCall("post", url, {
      name,
      description,
      location,
      date,
      time,
      attendance,
    });
  }

  removeEvent(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }

  updateEvent(id, name, description, location, date, time, attendance) {
    return this.authenticatedCall("put", `${url}${id}`, {
      name,
      description,
      location,
      date,
      time,
      attendance,
    });
  }
}

// export class ApiClient {
//   apiCall(method, url, data) {
//     return axios({
//       method,
//       url,
//       data,
//     }).catch((error) => {
//       throw error;
//     });
//   }

//   getUser() {
//     console.log(this.apiCall("get", `${url}user`));
//     return this.apiCall("get", `${url}user`);
//   }

//   getEvent() {
//     return this.apiCall("get", url);
//   }

//   addEvent(name, description, location, date, time, attendance) {
//     return this.apiCall("post", url, {
//       name,
//       description,
//       location,
//       date,
//       time,
//       attendance,
//     });
//   }

//   removeEvent(id) {
//     return this.apiCall("delete", `${url}${id}`);
//   }

//   updateEvent(id, name, description, location, date, time, attendance) {
//     return this.apiCall("put", `${url}${id}`, {
//       name,
//       description,
//       location,
//       date,
//       time,
//       attendance,
//     });
//   }
// }
