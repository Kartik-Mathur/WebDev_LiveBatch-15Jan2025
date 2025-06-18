export function increment() {
    return { type: 'counter/increment' }
}

export function decrement() {
    return { type: 'counter/decrement' }
}


export function reset() {
    return { type: 'counter/reset' };
}