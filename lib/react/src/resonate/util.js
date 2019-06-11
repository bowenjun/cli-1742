import {resonateAddress as address, decimals} from "../config";

let tronWeb = window.tronWeb;

let contract = null;

const interval = setInterval(async () => {
    tronWeb = window.tronWeb;
    if (!tronWeb) return;
    if (tronWeb) {
        clearInterval(interval);
        await getContract()
    }
}, 1000);

const getContract = async () => {
    if (contract) return;
    try {
        contract = await tronWeb.contract().at(address)
    } catch (err) {
        await getContract()
    }
};

const getAddress = () => {
    if (!tronWeb) tronWeb = window.tronWeb;

    if (tronWeb && tronWeb.defaultAddress) {
        return tronWeb.defaultAddress.base58
    } else {
        return ''
    }
};

const getTrxBalance = async () => {
    if (!tronWeb) tronWeb = window.tronWeb;

    if (tronWeb && tronWeb.defaultAddress) {
        const result = await tronWeb.trx.getBalance();

        return tronWeb.fromSun(result)
    } else {
        return 0
    }
};

const getSDXBalance = async () => {
    if (!contract) return 0;

    const balance = await contract.balanceOf(getAddress()).call();

    return parseInt(balance._hex, 16) / 10 ** decimals;
};

const getSDXFrozen = async () => {
    if (!contract) return 0;

    const balance = await contract.frozenOf(getAddress()).call();

    return parseInt(balance._hex, 16) / 10 ** decimals;
};

const getTotalFrozen = async () => {
    if (!contract) return 0;

    const balance = await contract.totalFrozen().call();

    return parseInt(balance._hex, 16) / 10 ** decimals;
};

const freezeSDX = async (amount) => {
    if (!contract) return false;

    await contract.freeze(Number(amount * (10 ** decimals))).send();

    return true;
};

const withdrawMine = async (amount) => {
    if (!contract) return false;

    await contract.withdraw(parseInt(Number(amount * (10 ** decimals)))).send();

    return true;
};

export default {
    getAddress,
    getTrxBalance,
    getSDXBalance,
    getSDXFrozen,
    freezeSDX,
    withdrawMine,
    getTotalFrozen,
}
