const CryptID = require('@cryptid/cryptid-js');

async function setup() {
    const instance = await CryptID.getInstance();
``
    const setupResult = instance.setup(CryptID.SecurityLevel.LOW);

    if (!setupResult.success) {
        console.log('Failed to setup :(');
        return;
    }

    const publicParams = setupResult.publicParameters
    const masterSecret = setupResult.masterSecret

    return [publicParams, masterSecret, instance]
}
module.exports = {
    setup
};