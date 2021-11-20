# Ciphering-CLI-Tool

CLI tool encode and decode a text by Caesar, ROT-8 and Atbash cipher.

## Install

```
git clone https://github.com/dimonwhite/Ciphering-CLI-Tool.git
cd Ciphering-CLI-Tool
```

## Options

1.  **-c, --config**: config for ciphers
    Config is a string with pattern `{XY(-)}n`, where:
* `X` is a cipher mark:
    * `C` is for Caesar cipher (with shift 1)
    * `A` is for Atbash cipher
    * `R` is for ROT-8 cipher
* `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    * `1` is for encoding
    * `0` is for decoding
2.  **-i, --input**: a path to input file
3.  **-o, --output**: a path to output file

## Usage example
```
node my_ciphering_cli -c <string> [-i <input.txt>] [-o <output.txt>]
```
```
node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```
```
node my_ciphering_cli -c "C1-C1-R0-A-R1-C0-A"
```
```
node my_ciphering_cli -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```
