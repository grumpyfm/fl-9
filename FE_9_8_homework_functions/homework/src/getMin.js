function getMin(x, y, z) {
    let array = [x, y, z];
    let minNumb = array[0];
    for (let i = 1; i < array.length; i++) {

        if (array[i] < minNumb) {
            minNumb = array[i];
        }
    }
    return minNumb;
}