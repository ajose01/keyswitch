#!/usr/bin/env node --harmony

var program = require('commander');
var co = require('co');
var prompt = require('co-prompt');
var eosEcc = require('eosjs-ecc');
var eth = require('ethereumjs-util');

console.log("---KEYSWITCH: Ethereum to EOS key conversion---\n\n")
program
  .action(function() {
    co(function *() {
      var ethKey = yield prompt('Ethereum private key: ');
      var ethBuffer = Buffer.from(ethKey, 'hex');
      if(eth.isValidPrivate(ethBuffer)) {
        var ethPublic = "0x" + eth.privateToAddress(ethBuffer).toString('hex')
        var eosWif = eosEcc.PrivateKey(ethBuffer).toWif()
        var eosPublic = eosEcc.privateToPublic(eosWif);
        console.log("**** IMPORTANT - Confirm ETH Address BELOW ****")
        console.log("Ethereum Address: %s", ethPublic)
        console.log("EOS Private Key: %s", eosWif);
        console.log("EOS Public Key: %s", eosPublic);
        process.exit(0);
      } else {
        console.log("Invalid Ethereum PrivateKey");
        process.exit(0);
      }
    })
  })
  .parse(process.argv);

