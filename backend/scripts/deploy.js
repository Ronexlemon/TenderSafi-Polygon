const {ethers} = require("hardhat")

async function main(){
    //get the contract
    const TenderSafiPolygonContract = await ethers.getContractFactory("Bider");
    //deploy the contract
    const TenderSafiPolygonContractdeploy = await TenderSafiPolygonContract.deploy();
    //await deployment
    await TenderSafiPolygonContractdeploy.deployed();
    //consoloe the address
    console.log(TenderSafiPolygonContractdeploy.address);
}
//call main
main().then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})