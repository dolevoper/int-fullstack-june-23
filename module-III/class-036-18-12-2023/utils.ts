export function doSomethingLongSync() {
    const endTime = new Date();

    endTime.setSeconds(endTime.getSeconds() + 10);

    let currTime = new Date();

    while (currTime < endTime) {
        currTime = new Date();
    }
}

export function doSomethingLong() {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            console.log("completed something long");
            resolve("completed!");
        }, 10000);
    });
}