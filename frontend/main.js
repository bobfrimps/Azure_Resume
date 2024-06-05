window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://api.example.com/visits'; // Replace with actual API endpoint

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
        .then(response => response.json())
        .then(response => {
            console.log("Website called function API.");
            count = response.count;
            document.getElementById("counter").innerText = count;
        })
        .catch(function(error) {
            console.log(error);
        });
    return count;
};
