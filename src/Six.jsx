/**
 * Q6 FETCH data through api
 */



import { useEffect, useState } from "react";

function Six() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
          .then((json) => setData(json))
            //.catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            {data ? (
              <div>
                {data.map((comment,index) => {
                
            return <h1 key={index}>{comment.email}</h1>

})}

              )
                </div>
                )  : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Six;