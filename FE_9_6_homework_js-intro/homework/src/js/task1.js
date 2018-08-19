let price = prompt('Enter amount of money: ');
let discount = prompt('Enter Discount: ');
let output;
let space=4;
if (discount >= 0 && discount <= 100 && price > 0) {
    let PriceWithDiscount = price - price * discount / 100;
    let Saved = price - PriceWithDiscount;
    if (Math.round(PriceWithDiscount) !== PriceWithDiscount) {
        PriceWithDiscount = PriceWithDiscount.toFixed(2);
    } else {
        PriceWithDiscount = Math.round(PriceWithDiscount);
    }

    if (Math.round(Saved) !== Saved) {
        Saved = Saved.toFixed(2);
    } else {
        Saved = Math.round(Saved);
    }
    let object = {
        'Price without discount': price,
        'Discount ': discount + '%',
        'Price with discount': PriceWithDiscount,
        'Saved': Saved
    };
    output = JSON.stringify(object, null, space);


} else {
    output = 'Invalid data';
}

console.log(output);

