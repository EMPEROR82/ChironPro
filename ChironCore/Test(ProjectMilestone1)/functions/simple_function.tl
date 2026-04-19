function add(:a, :b) [
    return :a + :b
]

function multiply(:a, :b) [
    return :a * :b
]

:x = 5
:y = 10

:z = add(:x, :y)
:w = multiply(:x, :y)

printf("The sum of ",:x ," and ", :y , " is ", :z)
printf("The product of ",:x ," and ", :y , " is ", :w)