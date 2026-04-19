function scope(:x) [
    printf("Here :x is in local scope with value ", :x)

    return 0
]

function globalScope(:y) [
    printf("Here :x is again in global scope with value ", :x)
    return 0
]

:x = 100
:y = 50

printf("Here :x is in global scope with value ", :x)
scope(:y)
globalScope(:y)