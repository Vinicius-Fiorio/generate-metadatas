const fileSystem = require('fs');

const PREFIX_URL = "https://bafybeic44zjls5w7hsx2mvz7bw2xlw2n4oyups2yyhlikn7zngrwrntzzm.ipfs.cf-ipfs.com/";
const BASE_PATH = __dirname;
const files = fileSystem.readdirSync(`${BASE_PATH}/output/erc721 metadata`);

try {
  files.map((filename) => {
    let metadata = JSON.parse(fileSystem.readFileSync(`${BASE_PATH}/output/erc721 metadata/${filename}`));
    delete metadata["generator"]
    delete metadata["uid"]
    delete metadata["dna"]
    metadata.image = metadata.image.replace("ipfs://BASE_PATH/", PREFIX_URL)

    fileSystem.writeFileSync(`${BASE_PATH}/output/erc721 metadata/${filename}`, JSON.stringify(metadata, null, 2), err => {
      if (err) throw err; 
    });    
  })
} catch (error) {
  console.log(error)
}
