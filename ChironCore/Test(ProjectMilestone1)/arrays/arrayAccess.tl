array :x{5}

:i = 0

repeat 5 [
    :x{:i} = :i + 10
    :i = :i + 1
]

:i = 0
repeat 5 [
    printf(:x{:i})
    :i = :i + 1
]
