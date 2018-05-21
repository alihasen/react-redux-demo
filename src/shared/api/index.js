import api from "../api/api";

export default {
  login: (body, callback) => {

    // verify the required parameter 'body' is set
    if (body == undefined || body == null) {
      throw "Missing the required parameter 'body' when calling login";
    }

    return api.get(
      'https://jsonplaceholder.typicode.com/posts/1',
      body,
      callback
    );
  }
}