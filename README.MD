# Key conversion between ETH and EOS
NOTE: EOS to ETH TBD

# WHY?
Ethereum and EOS use the same ECC (cryptography) but are formatted differently. Being able to convert your keys easily allows you some flexibility for conversion or token migration strategies.

# Installation
1. Clone repository
2. `npm install -g`
3. Run with command `keyswitch`

# Usage
`keyswitch` will prompt you for your Ethereum Private Key. No need to hardcode it in the code and accidentally forget about it later.

Confirm that the Ethereum address generated from the CLI is the same as what you have on your records. An EOS private/public key pair will be generated from this.
