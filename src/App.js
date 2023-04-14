import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      'https://gorest.co.in/public/v2/users'
    );
    // console.log("res", res);
    console.log("res data", res.data)
    setUsers(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className='row'>
      <h2 className='text-center text-primary pt-3'>User Details : </h2>

        {
          users.map((key) => {
            console.log("value", key);
            return <>
              <div className="col-md-4 pt-3">
                <div class="card">
                  <div className='rounded-3 text-center pt-2'> 
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzH6TfTtq91hzmeIvm_4JOdb5y1UWjTlYZdA&usqp=CAU" 
                  class="card-img-top" alt="..." style={{height:'200px', width:'200px'}}/>
                  </div>
                    <div class="card-body">
                      <h5 class="card-title">{key.name}</h5>
                      <p class="card-text">{key.email}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">User ID: {key.id}</li>
                      <li class="list-group-item">Gender: {key.gender}</li>
                      <li class="list-group-item">Status: {key.status}</li>
                    </ul>
                </div>
              </div>
            </>
          })

        }
      </div>
    </>
  );
}

export default App;
