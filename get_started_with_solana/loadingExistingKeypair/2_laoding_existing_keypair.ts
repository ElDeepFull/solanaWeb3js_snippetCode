//Code to load securly keypair

import { Keypair, PublicKey } from "@solana/web3.js";
import "dotenv/config";
import { Connection, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

//Connect to the solana devnet
const connection = new Connection(clusterApiUrl("devnet"));

const key = process.env.SECRET_KEY; 

if (!process.env.SECRET_KEY) {
  console.error("Error : SECRET_KEY not define in env variable.");
  process.exit(1);
}

let secret_key;
try {
  secret_key = JSON.parse(process.env.SECRET_KEY);
} catch (error) {
  console.error("Error SECRET_KEY format:", error);
  process.exit(1); 
}

// Vérify key size
if (secret_key.length !== 64) {
  console.error("Error : Secret key must be in 64 octets.");
  process.exit(1);
}

const user = Keypair.fromSecretKey(new Uint8Array(secret_key));
const balance = await connection.getBalance(user.publicKey)

//Display public key adress and balance
console.log(`🔑 Loaded our keypair securely, using an env file! Our public key is: ${user.publicKey.toString()}`);
console.log(`🔑 Our public adress balance is: ${balance / LAMPORTS_PER_SOL} SOL`)
