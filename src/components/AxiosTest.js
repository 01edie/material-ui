import React, { useEffect } from "react";
import axios from "../apiCall";
// import axios from 'axios';

const AxiosTest = () => {
  const [data, setData] = React.useState([
    { id: 1, name: "someone" },
    { id: 2, name: "sometwo" },
  ]);
  const [isLoading, setIsLoading] = React.useState(false);
  //   console.log(data);
  //    get
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("users", { params: { id: 1 } })
      .then((res) => {
        setData([res.data[0]]);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // post
  // useEffect(() => {
  //   axios
  //     .post("users", {
  //         name: 'someone',
  //         phone:'1697'
  //     })
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error));
  // }, []);
  // 201 (created)

  //   patch
  //   useEffect(() => {
  //     axios
  //       .patch("users/1", { name:'edi', title:'abc' })
  //       .then((res) => console.log(res))
  //       .catch((error) => console.log(error));
  //   }, []);
  //   200 ok

  //post,patch,put for fetch()

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users/1", {
  //       method: "PATCH",
  //       body: JSON.stringify({
  //         title: "foo",
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((json) => console.log(json));
  //   }, []);

  // test
  //     useEffect(()=>{
  //         fetch('https://jsonplaceholder.typicode.com/users/1', {
  //             method: 'PATCH',
  //             body: JSON.stringify({
  //               title: 'foo',
  //             }),
  //             headers: {
  //               'Content-type': 'application/json; charset=UTF-8',
  //             },
  //           })
  //             .then((response) => response.json())
  //             .then((json) => console.log(json));
  // })

  //   axios.defaults.onDownloadProgress = (ProgressEvent)=>{
  //     setIsLoading(true);
  //   }
  //   axios.defaults.onUploadProgress=()=>{
  //     console.log(1);
  //   }

  //put
  //   useEffect(()=>{
  //     setIsLoading(true)
  //     axios.put('users/1',{
  //       name:'abc',
  //       age:45,
  //       city: 'kolkata'
  //     }).then((res)=>{console.log(res);setIsLoading(false)}).catch((error)=>console.log(error));
  //   },[])
  // 200

  //   delete
  //   useEffect(()=>{
  //     axios.delete('users/1').then((res)=>console.log(res)).catch((error)=>console.log(error));
  //   },[])

  // useEffect(()=>{
  //     const abc = async ()=>{
  //         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  //         console.log(response.data);
  //         setData(response.data)
  //     }
  //    abc();
  // },[])

  return (
    <>
      <div>AxiosTest</div>

      <div>
        {isLoading ? (
          <div>Loading </div>
        ) : (
          data.map((item) => (
            <div key={item.id}>
              <h4>{item.name}</h4>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AxiosTest;
