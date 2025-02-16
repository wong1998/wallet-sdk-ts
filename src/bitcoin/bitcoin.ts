import * as bitcoin from 'bitcoinjs-lib';
import BIP32Factory from 'bip32';
import * as ecc from 'tiny-secp256k1';
// You must wrap a tiny-secp256k1 compatible implementation
const bip32 = BIP32Factory(ecc);



export function createBTCAddress (seedHex: string, receiveOrChange: string, addressIndex: string, network: string): any {
    const root = bip32.fromSeed(Buffer.from(seedHex, 'hex'));
    let path = "m/44'/0'/0'/0/" + addressIndex + '';
    if (receiveOrChange === '1') {
        path = "m/44'/0'/0'/1/" + addressIndex + '';
    }
    const child = root.derivePath(path);
    const { address } = bitcoin.payments.p2pkh({
        pubkey: child.publicKey,
        network: bitcoin.networks[network]
    });
    return {
        privateKey: Buffer.from(child.privateKey).toString('hex'),
        publicKey: Buffer.from(child.publicKey).toString('hex'),
        address
    };
}