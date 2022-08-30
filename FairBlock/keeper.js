async function extractBundleKey(instance, masterSecret, publicParams, identity) {

    const batchKey = instance.extract(publicParams, masterSecret, identity);
    if (!batchKey.success) {
        console.log('Failed to extract :(');
        return;
    }
    return batchKey.privateKey
}
module.exports = {
    extractBundleKey
};