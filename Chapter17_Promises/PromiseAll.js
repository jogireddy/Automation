// 1. Create three separate mock API requests
const fetchUserData = new Promise((resolve) => {
    setTimeout(() => {
        console.log("User data loaded.");
        resolve({ userid: 101, name: "Jogireddy" });
    }, 1000);
});

const fetchPosts = new Promise((resolve) => {
    
    setTimeout(() => {
        console.log("Posts data loaded.");
        resolve(["Post 1", "Post 2", "Post 3"])

    }, 2000);
});

const fetchComments = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Comments data loaded.");
        resolve([
            { id: 1, postId: 1, text: "Nice post!" },
            { id: 2, postId: 2, text: "Very informative." }
        ]);
    }, 1000);
});

Promise.all([fetchUserData, fetchPosts, fetchComments])
    .then(([userData, posts, comments]) => {
        console.log("All data loaded:", { userData, posts, comments });
    })
    .catch(error => {
        console.error("Error loading data:", error);
    });
