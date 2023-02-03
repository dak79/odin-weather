/**
 * Handle errors in promises
 * @param {Function} fn
 * @return {Function}
 */
export function errorHandler(fn) {
    return function (...params) {
        return fn(...params).catch(function (err) {
            console.error('Opss!!!', err)
        })
    }
}
