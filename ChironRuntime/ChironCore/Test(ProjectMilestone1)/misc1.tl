function makeSquare (:sidelength) [
    pendown
    repeat 4 [
        forward :sidelength
        left 90
    ]
    penup
]

array :x{5}

:i = 0

repeat 5 [
    :x{:i} = :i * 50 + 50
    printf(:x{:i})
    :i = :i + 1
]

:i = 0
repeat 5 [
    makeSquare (:x{:i})
    :i = :i + 1
]
