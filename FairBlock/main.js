const PKG = require("./PKG");
const user = require("./user");
const keeper = require("./keeper");
const relayer = require("./relayer");

(async function main() {

    const [publicParams, masterSecret, instance] = await PKG.setup();
    console.log("IBE Public Params:\n", publicParams, "\n\n")
    const [cipher, identity] = await user.sendEncrypted(instance, publicParams);
    console.log("Encrypted Bundle:\n", cipher, "for:\n", identity, "\n\n")
    const bundleKey = await keeper.extractBundleKey(instance, masterSecret, publicParams, identity)
    console.log("Bundle Private Key:\n", bundleKey, "\n\n")
    const plaintext = await relayer.decryptBundle(instance, publicParams, cipher, bundleKey)
    console.log("Decrypted Bundle:\n", plaintext)
})
();