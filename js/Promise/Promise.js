function fetchDataFromAPI(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (response.status === 200) {
                    resolve(response.json());
                } else {
                    reject(
                        `Error: ${response.status} - ${response.statusText}`
                    );
                }
            })
            .catch((error) => {
                reject(`Error: ${error.message}`);
            });
    });
}

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

fetchDataFromAPI(apiUrl)
    .then((data) => {
        console.log("API Response:", data);
    })
    .catch((error) => {
        console.error("API Error:", error);
    });
