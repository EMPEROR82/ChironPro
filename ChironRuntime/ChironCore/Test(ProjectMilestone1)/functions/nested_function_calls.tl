function add(:p, :q) [
    return :p + :q
]

function multiply(:p, :q) [
    return :p * :q
]

:a = 2
:b = 3
:c = 4

:z = multiply(add(:a, :b), add(:b, :c) )
:y = add(multiply(:a, :b), multiply(:b, :c))

printf(:z)
printf(:y)