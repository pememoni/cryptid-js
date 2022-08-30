async function sendEncrypted(instance, publicParams) {

    const bundle = 'some tx.';

    const identity = {
        batchNumber: '15400000',
        network: 'ETH-Mainnet'
    };

    const encryptResult = instance.encrypt(publicParams, identity, bundle);
    if (!encryptResult.success) {
        console.log('Failed to encrypt :(');
        return;
    }
    let cipher = encryptResult.ciphertext

    return [cipher, identity]
}
module.exports = {
    sendEncrypted
}