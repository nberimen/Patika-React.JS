import getData from "./apiCalls.js";

const get = async() => {
try {
    const result = await getData(1);
    console.log(result);
} catch (err) {
    console.log(err);
}
}

get();