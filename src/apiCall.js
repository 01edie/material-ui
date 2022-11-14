import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 3000,
  headers: { "X-Custom-Header": "abc" },
  maxRedirects: 1,
  //   transformRequest: [function (data, headers) {
  //     const data1 = {...data, createdBy:'axios-instance'};
  //     return JSON.stringify(data1);
  //   }],
  transformResponse: [
    function (data) {
      // Do whatever you want to transform the data
      let data1 = { ...JSON.parse(data), recievedBy: "axios-instance" };
      return data1;
    },
  ],
//   onDownloadProgress: function (progressEvent) {
//     // Do whatever you want with the native progress event
//     alert("response downloading");
    
//   },

//   onUploadProgress: function (progressEvent) {
//     // Do whatever you want with the native progress event
//     alert('request uploading');
//   },

  //   maxContentLength: 2,
  //   maxBodyLength: 2,
  //node only
});

//   "{\"name\":\"abc\",\"age\":45,\"city\":\"kolkata\"}" ok
//   "{\"name\":\"abc\",\"age\":45,\"city\":\"kolkata\"}"

// const getData = async(data)=>{
//    const response= await axiosInstance.get('/users');
//    console.log(response);
//    data(response.data);

// }

// const getData1 = async()=>{
//     const response=await axios.get('https://jsonplaceholder.typicode.com/users');
//     return response.data;
//  }

// export {getData, getData1}

export default axiosInstance;
