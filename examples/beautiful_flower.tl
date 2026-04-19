function polygon(:sides, :length) [
    :angle = 360 / :sides
    
    repeat :sides [
        forward :length
        left :angle
    ]
]

function flower(:petals, :length) [
    :return = polygon(:petals, :length)
    :angle = 180 - 360 / :petals

    repeat :petals [
        right 180 - :angle / 2
        forward :length
        left :angle / 2
        forward 2 * :length
        left :angle
        forward 2 * :length
        left :angle / 2
        forward :length 
        right :angle / 2
    ]
]

printf("Sadly this works only with 6 as of now :(")
:temp = flower(6, 50)