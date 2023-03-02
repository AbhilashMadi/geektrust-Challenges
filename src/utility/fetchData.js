/*
It is an utility function that takes URL and a value for attempts which will attempt to make a fetch request.
On failure it tries again with increasing delay for number of times which user has requestd.

My main intension to build this function is that, sometimes due to deficulty browser or server is not able to send requests at once so in that times making requests after a certain slight delay may be have a chance for successful response.
*/

import axios from "axios";
/* in this case I am using axios instead of "fetch", axios internally uses AJAX, it supported in older versions of browsers(advantage)*/

function requestManager(url,options={},attempts=3){
    return new Promise((resolve,reject) => {
        axios.get(url,options)
        .then(resolve)
        .catch((error) => {
            const isLastAttempt = attempts === 1;
            if(isLastAttempt){
                return reject(error);
            }
            setTimeout(() => {
                requestManager(url,options,attempts-1)
                .then(resolve)
                .catch(reject);
            },3000)
        });
    });
};

export {requestManager};