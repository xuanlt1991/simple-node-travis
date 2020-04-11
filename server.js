const ANIMAL = process.env.NAME;
  
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`I really like ${ANIMAL}`);
    await sleep(5000);
  }
}

main();
