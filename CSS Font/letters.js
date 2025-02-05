// all the letter grids

//let components = ['hydrangea-large.svg', 'hydrangea-med.svg', 'hydrangea-small.svg', 'leaf.svg', 'pink-large.svg', 'pink-med.svg', 'pink-small.svg']
let H = [
    [true, true, true, true, false, false, false, false, true, true, true, true],
    [true, true, true, true, false, false, false, false, true, true, true, true],
    [true, true, true, true, false, false, false, false, true, true, true, true],
    [true, true, true, true, false, false, false, false, true, true, true, true],
    [true, true, true, true, false, false, false, false, true, true, true, true],

    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true],

    [true, true, true, true, false, false, false, false, true, true, true, true],
    [true, true, true, true, false, false, false, false, true, true, true, true],
    [true, true, true, true, false, false, false, false, true, true, true, true],
    [true, true, true, true, false, false, false, false, true, true, true, true],
    [true, true, true, true, false, false, false, false, true, true, true, true],
]

// whitespace - 0 (prob 0), wide open - 1 prob(.5), touching other flower - 2 prob(.2), origin - 3 prob(0)
let HEnum = [
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],

    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
]