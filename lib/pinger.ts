// File: lib/pinger.ts
//import axios from "axios";
//import cron from "node-cron"; // opzionale, puoi usare anche solo setInterval

const checkHealthUrl = process.env.PING_URL || "";

// cron.schedule("* * * * *", async () => {
//   try {
//     await axios.get(checkHealthUrl);
//     console.log("--Ping inviato con successo!");
//   } catch (error: any) {
//     console.error("--Errore durante il ping: ", error.message);
//   }
// });

// setInterval(async () => {
//     try {
//       await axios.get(checkHealthUrl);
//       console.log("--Ping inviato con successo!");
//     } catch (error: any) {
//       console.error("--Errore durante il ping: ", error.message);
//     }
//   }, 60 * 1000);

setInterval(async () => {
    try {
        const res = await fetch(checkHealthUrl);
        if (!res.ok) {
            throw new Error(`Status: ${res.status}`);
        }
        //console.log("--Ping inviato con successo!");
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("--Errore durante il ping: ", error.message);
        } else {
            console.error("--Errore durante il ping: ", error);
        }
    }
}, 60 * 1000);


//console.log("💡 Cron/Ping avviato...");