async function decryptBundle(instance, publicParams, cipher, batchKey) {

    const decryptResult = instance.decrypt(publicParams, batchKey, cipher);
    if (!decryptResult.success) {
        console.log('Failed to decrypt :(');
        return;
    }

    return decryptResult.plaintext
}

module.exports = {
    decryptBundle
};
