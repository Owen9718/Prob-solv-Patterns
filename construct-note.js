// add whatever parameters you deem necessary
function constructNote(note, letters) {
    let noteFreq = {}
    let lettersFreq = {}

    for (let char of note) {
        noteFreq[char] = ++noteFreq[char] || 1;
    }


    for (let char of letters) {
        lettersFreq[char] = ++lettersFreq[char] || 1;
    }

    for (let char in noteFreq) {
        if (!lettersFreq[char]) {
            return false;
        }

        if (noteFreq[char] > lettersFreq[char]) {
            return false;
        }
    }
    return true;
}
