function polygon(:sides, :length) [
    :angle = 360 / :sides
    
    repeat :sides [
        forward :length
        left :angle
    ]
]


polygon(4, 50)
polygon(6, 50)

forward 25
right 90
forward 100