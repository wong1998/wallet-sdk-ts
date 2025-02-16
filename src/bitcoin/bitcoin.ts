import * as bitcoin from 'bitcoinjs-lib';
import BIP32Factory from 'bip32';
import * as ecc from 'tiny-secp256k1';
import * as bip39 from 'bip39';
// You must wrap a tiny-secp256k1 compatible implementation
const bip32 = BIP32Factory(ecc);

export function generateMnemonic (params) {
    const { number, language } = params;
    if (!number && !language) throw new Error('Must have language and language');
    switch (language) {
        case 'chinese_simplified':
            if (number === 12) {
                return bip39.generateMnemonic(128, null, bip39.wordlists.chinese_simplified);
            } else if (number === 15) {
                return bip39.generateMnemonic(160, null, bip39.wordlists.chinese_simplified);
            } else if (number === 18) {
                return bip39.generateMnemonic(192, null, bip39.wordlists.chinese_simplified);
            } else if (number === 21) {
                return bip39.generateMnemonic(224, null, bip39.wordlists.chinese_simplified);
            } else if (number === 24) {
                return bip39.generateMnemonic(256, null, bip39.wordlists.chinese_simplified);
            } else {
                throw new Error("Don't support this number");
            }
        case 'chinese_traditional':
            if (number === 12) {
                return bip39.generateMnemonic(128, null, bip39.wordlists.chinese_traditional);
            } else if (number === 15) {
                return bip39.generateMnemonic(160, null, bip39.wordlists.chinese_traditional);
            } else if (number === 18) {
                return bip39.generateMnemonic(192, null, bip39.wordlists.chinese_traditional);
            } else if (number === 21) {
                return bip39.generateMnemonic(224, null, bip39.wordlists.chinese_traditional);
            } else if (number === 24) {
                return bip39.generateMnemonic(256, null, bip39.wordlists.chinese_traditional);
            } else {
                throw new Error("Don't support this number");
            }
        case 'english':
            if (number === 12) {
                return bip39.generateMnemonic(128, null, bip39.wordlists.english);
            } else if (number === 15) {
                return bip39.generateMnemonic(160, null, bip39.wordlists.english);
            } else if (number === 18) {
                return bip39.generateMnemonic(192, null, bip39.wordlists.english);
            } else if (number === 21) {
                return bip39.generateMnemonic(224, null, bip39.wordlists.english);
            } else if (number === 24) {
                return bip39.generateMnemonic(256, null, bip39.wordlists.english);
            } else {
                throw new Error("Don't support this number");
            }
        case 'french':
            if (number === 12) {
                return bip39.generateMnemonic(128, null, bip39.wordlists.french);
            } else if (number === 15) {
                return bip39.generateMnemonic(160, null, bip39.wordlists.french);
            } else if (number === 18) {
                return bip39.generateMnemonic(192, null, bip39.wordlists.french);
            } else if (number === 21) {
                return bip39.generateMnemonic(224, null, bip39.wordlists.french);
            } else if (number === 24) {
                return bip39.generateMnemonic(256, null, bip39.wordlists.french);
            } else {
                throw new Error("Don't support this number");
            }
        case 'italian':
            if (number === 12) {
                return bip39.generateMnemonic(128, null, bip39.wordlists.italian);
            } else if (number === 15) {
                return bip39.generateMnemonic(160, null, bip39.wordlists.italian);
            } else if (number === 18) {
                return bip39.generateMnemonic(192, null, bip39.wordlists.italian);
            } else if (number === 21) {
                return bip39.generateMnemonic(224, null, bip39.wordlists.italian);
            } else if (number === 24) {
                return bip39.generateMnemonic(256, null, bip39.wordlists.italian);
            } else {
                throw new Error("Don't support this number");
            }
        case 'japanese':
            if (number === 12) {
                return bip39.generateMnemonic(128, null, bip39.wordlists.japanese);
            } else if (number === 15) {
                return bip39.generateMnemonic(160, null, bip39.wordlists.japanese);
            } else if (number === 18) {
                return bip39.generateMnemonic(192, null, bip39.wordlists.japanese);
            } else if (number === 21) {
                return bip39.generateMnemonic(224, null, bip39.wordlists.japanese);
            } else if (number === 24) {
                return bip39.generateMnemonic(256, null, bip39.wordlists.japanese);
            } else {
                throw new Error("Don't support this number");
            }
        case 'korean':
            if (number === 12) {
                return bip39.generateMnemonic(128, null, bip39.wordlists.korean);
            } else if (number === 15) {
                return bip39.generateMnemonic(160, null, bip39.wordlists.korean);
            } else if (number === 18) {
                return bip39.generateMnemonic(192, null, bip39.wordlists.korean);
            } else if (number === 21) {
                return bip39.generateMnemonic(224, null, bip39.wordlists.korean);
            } else if (number === 24) {
                return bip39.generateMnemonic(256, null, bip39.wordlists.korean);
            } else {
                throw new Error("Don't support this number");
            }
        case 'spanish':
            if (number === 12) {
                return bip39.generateMnemonic(128, null, bip39.wordlists.spanish);
            } else if (number === 15) {
                return bip39.generateMnemonic(160, null, bip39.wordlists.spanish);
            } else if (number === 18) {
                return bip39.generateMnemonic(192, null, bip39.wordlists.spanish);
            } else if (number === 21) {
                return bip39.generateMnemonic(224, null, bip39.wordlists.spanish);
            } else if (number === 24) {
                return bip39.generateMnemonic(256, null, bip39.wordlists.spanish);
            } else {
                throw new Error("Don't support this number");
            }
        default:
            throw new Error('Temporarily does not support the situation you want');
    }
}

export function encodeMnemonic (params) {
    const { mnemonic, language } = params;
    if (!mnemonic && !language) throw new Error('Must have mnemonic and language');
    switch (language) {
        case 'chinese_simplified':
            return bip39.mnemonicToEntropy(mnemonic, bip39.wordlists.chinese_simplified);
        case 'chinese_traditional':
            return bip39.mnemonicToEntropy(mnemonic, bip39.wordlists.chinese_traditional);
        case 'english':
            return bip39.mnemonicToEntropy(mnemonic, bip39.wordlists.english);
        case 'french':
            return bip39.mnemonicToEntropy(mnemonic, bip39.wordlists.french);
        case 'italian':
            return bip39.mnemonicToEntropy(mnemonic, bip39.wordlists.italian);
        case 'japanese':
            return bip39.mnemonicToEntropy(mnemonic, bip39.wordlists.japanese);
        case 'korean':
            return bip39.mnemonicToEntropy(mnemonic, bip39.wordlists.korean);
        case 'spanish':
            return bip39.mnemonicToEntropy(mnemonic, bip39.wordlists.spanish);
        default:
            throw new Error('Temporarily does not support the situation you want');
    }
}

export function decodeMnemonic (params) {
    const { encrytMnemonic, language } = params;
    if (!encrytMnemonic && !language) throw new Error('Must have mnemonic and language');
    switch (language) {
        case 'chinese_simplified':
            return bip39.entropyToMnemonic(encrytMnemonic, bip39.wordlists.chinese_simplified);
        case 'chinese_traditional':
            return bip39.entropyToMnemonic(encrytMnemonic, bip39.wordlists.chinese_traditional);
        case 'english':
            return bip39.entropyToMnemonic(encrytMnemonic, bip39.wordlists.english);
        case 'french':
            return bip39.entropyToMnemonic(encrytMnemonic, bip39.wordlists.french);
        case 'italian':
            return bip39.entropyToMnemonic(encrytMnemonic, bip39.wordlists.italian);
        case 'japanese':
            return bip39.entropyToMnemonic(encrytMnemonic, bip39.wordlists.japanese);
        case 'korean':
            return bip39.entropyToMnemonic(encrytMnemonic, bip39.wordlists.korean);
        case 'spanish':
            return bip39.entropyToMnemonic(encrytMnemonic, bip39.wordlists.spanish);
        default:
            throw new Error('Temporarily does not support the situation you want');
    }
}

export function mnemonicToSeed (params) {
    const { mnemonic, password } = params;
    if (!mnemonic) throw new Error('Must have mnemonic');
    return bip39.mnemonicToSeedSync(mnemonic, password);
}

export function mnemonicToEntropy (params) {
    const { mnemonic, password } = params;
    if (!mnemonic) throw new Error('Must have mnemonic');
    return bip39.mnemonicToEntropy(mnemonic, password);
}

export function validateMnemonic (params) {
    const { mnemonic, language } = params;
    if (!mnemonic && !language) throw new Error('Must have mnemonic and language');
    switch (language) {
        case 'chinese_simplified':
            return bip39.validateMnemonic(mnemonic, bip39.wordlists.chinese_simplified);
        case 'chinese_traditional':
            return bip39.validateMnemonic(mnemonic, bip39.wordlists.chinese_traditional);
        case 'english':
            return bip39.validateMnemonic(mnemonic, bip39.wordlists.english);
        case 'french':
            return bip39.validateMnemonic(mnemonic, bip39.wordlists.french);
        case 'italian':
            return bip39.validateMnemonic(mnemonic, bip39.wordlists.italian);
        case 'japanese':
            return bip39.validateMnemonic(mnemonic, bip39.wordlists.japanese);
        case 'korean':
            return bip39.validateMnemonic(mnemonic, bip39.wordlists.korean);
        case 'spanish':
            return bip39.validateMnemonic(mnemonic, bip39.wordlists.spanish);
        default:
            throw new Error('Temporarily does not support the situation you want');
    }
}


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