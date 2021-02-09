const roundUp = (float, limit) => {
    return +(Math.round((float) + "e+" + limit)  + "e-" + limit);
}

export default {
    roundUp
}