// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    let obj = {}
    let i = 0
    for (key of keys) {
        if (i > values.length - 1) {
            obj[key] = null
        }
        else {
            obj[key] = values[i]
        }
        i++
    }
    return obj;
}
