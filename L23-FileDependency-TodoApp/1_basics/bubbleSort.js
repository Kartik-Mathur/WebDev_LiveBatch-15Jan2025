console.log("I am inside bubbleSort file");
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    // Keep looping through the array until no swaps are made
    do {
        swapped = false;

        // Loop through the array
        for (let i = 0; i < n - 1; i++) {
            // If the current element is greater than the next, swap them
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }

        // Decrease n because the largest element is now in its correct position
        n--;
    } while (swapped);

    return arr;
}

module.exports = bubbleSort;