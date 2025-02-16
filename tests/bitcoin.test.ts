import {createBTCAddress} from "../src/bitcoin/bitcoin";
import {mnemonicToSeed} from "../src/bip/bip";


describe('btc unit test case', () => {
    test('createAddress', () => {
        const mnemonic = "install million poem gloom timber equal way cash spread lobster spring depth";
        const params_1 = {
            mnemonic: mnemonic,
            password: ""
        }
        const seed = mnemonicToSeed(params_1)
        const account = createBTCAddress(seed.toString("hex"), "0", "0", "mainnet")
        console.log(account)
    //  bc1qs6zjd5jfn6a37ffkdfnmhd2lm4ykg8uhyjh0qy
    });

});
