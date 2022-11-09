import axios from "axios";
const url = "https://data.mongodb-api.com/app/data-upwsf/endpoint/data/v1";

export class ApiClient {
  apiCall(method, url, data) {
    return axios({
      method,
      url,
      data,
    }).catch((error) => {
      throw error;
    });
  }

  getEvent() {
    return this.apiCall("get", url);
  }

  addEvent(name, description, location, date, time, attendance) {
    return this.apiCall("post", url, {
      name,
      description,
      location,
      date,
      time,
      attendance,
    });
  }

  removeEvent(id) {
    return this.apiCall("delete", `${url}${id}`);
  }

  updateEvent(id, name, description, location, date, time, attendance) {
    return this.apiCall("post", `${url}${id}`, {
      name,
      description,
      location,
      date,
      time,
      attendance,
    });
  }
}
