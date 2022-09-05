async function sendEncrypted(instance, publicParams) {

    const bundle = '{from": "0x1923f626bb8dc025849e00f99c25fe2b2f7fb0db",\n' +
        '      "gas": "0x55555",\n' +
        '      "maxFeePerGas": "0x1234",\n' +
        '      "maxPriorityFeePerGas": "0x1234",\n' +
        '      "input": "0xabcd",\n' +
        '      "nonce": "0x0",\n' +
        '      "to": "0x07a565b7ed7d7a678680a4c162885bedbb695fe0",\n' +
        '      "value": "0x1234"}';

    console.log(Buffer.from(bundle).length)

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

    console.log(Buffer.from(JSON.stringify(cipher)).length)

    return [cipher, identity]
}
module.exports = {
    sendEncrypted
}