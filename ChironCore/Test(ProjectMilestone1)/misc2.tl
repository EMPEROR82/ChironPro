function leaf (:length) [
    forward :length
    left 90 
    forward :length
    goto(0,0)
]

:i = 10
pendown

repeat 8 [
    leaf (:i * 2 + 50)
    :i = :i + 1
]

goto(0,-200)