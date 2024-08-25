//Generate solana keypair to create a wallet

import { Keypair, Connection, clusterApiUrl} from "@solana/web3.js";

async function create_wallet() {
    const connection = new Connection(clusterApiUrl("devnet"));

    const keypair = Keypair.generate();
    const balance = await connection.getBalance(keypair.publicKey);

    console.log(`The public key is: `, keypair.publicKey.toBase58());
    console.log(`The secret key is: `, keypair.secretKey);
    console.log(`Address balance is: ${balance} lamports`);
}

create_wallet();
