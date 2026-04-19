function makeSquare (:sidelength) [
    pendown
    repeat 4 [
        forward :sidelength
        left 90
    ]
    penup
]

:x = 100

makeSquare(:x)