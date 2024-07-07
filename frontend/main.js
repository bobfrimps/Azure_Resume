window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl = 'https://bobcounter.azurewebsites.net/api/GetResumeCounter?code=Aa1eRJj1_IcPGfVZXEwkWgHmv73_h0KMnqvv1KB_OOZgAzFuVXODng%3D%3D'
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter'; // Replace with actual API endpoint

const getVisitCount = () => {
    let count = 1;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
            console.log("Website called function API.");
            count = response.count;
            document.getElementById("counter").innerText = count;
        })
        .catch(function(error) {
            console.log(error);
        });
    return count;
};
