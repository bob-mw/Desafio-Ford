// EXEMPLE VIN USED IN CHALLENGE
const VIN = '1HGCM82633A004352';

// POSSIBLES CHARS
const chars = '1234567890abcdefghijklmnopqrstuvxywz';
const possibles_chars = chars.split('');


// DICTS TO ENCRIPTING
function encript_dict_one(vin) {
  const vin_char = vin.split('');
  possibles_chars.map((char) => {
        return vin_char[char] + 6;
    });
};

function encript_dict_two(vin) {
  const vin_char = vin.split('');
  possibles_chars.map((char) => {
        return vin_char[char] + 3;
    });
};

function encript_dict_three(vin) {
  const vin_char = vin.split('');
  possibles_chars.map((char) => {
        return vin_char[char] + 2;
    });
};


// FUNCTION TO ENCRIPTING

function encripting(vin) {
    vin = vin.toLowerCase();
    const vin_part_one = vin.substring(0, 3);
    const vin_part_two = vin.substring(3, 9);
    const vin_part_three = vin.substring(9, 17);

    // ENCRIPTING VIN PARTS
    const cripto_part_one = dictOne(vin_part_one);
    const cripto_part_two = dictTwo(vin_part_two);   
    const cripto_part_three = dictThree(vin_part_three);

    // VIN ENCRIPTED
    const vinEncripted = `${cripto_part_one},${cripto_part_two},${cripto_part_three}`;

    return vinEncripted;
};

