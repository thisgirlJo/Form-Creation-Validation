function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    dataContainer = document.getElementById(api-data);
   
}
 try {
        const response = await(fetchUserData(apiUrl));
        const users = await response.json();
    }
    catch (error) {
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
        return;
    }