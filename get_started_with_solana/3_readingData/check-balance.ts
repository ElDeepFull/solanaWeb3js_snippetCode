import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
//Adress to check : BSSsV9UZLdeMSftEXaWVUeiaa7jbM5AHikmiuSwJ6t5c
async function checkBalance() {
    const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}
 
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
console.log(`✅ Connected!`);
 
try{
    const publicKey = new PublicKey(suppliedPublicKey);

    // Verify the balance
    const balanceInLamports = await connection.getBalance(publicKey);
    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

    console.log(`💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL} SOL!`);
    console.log(`✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`);

}catch(error){
    if (error.message.includes('')){
        console.log("❌ Invalid public key");
    }else{
        console.log('Erreur to check balance', error);
    }
}
 
}

checkBalance()
 
 
 
