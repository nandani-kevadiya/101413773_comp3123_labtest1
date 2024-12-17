const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved Promise: Success after 500ms");
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Rejected Promise: Error after 500ms");
        }, 500);
    });
};

// Call both promises
resolvedPromise()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

rejectedPromise()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
