# Game Initialization

def on_button_pressed_a():
    global isJumping, dinoY
    if not (isJumping):
        isJumping = True
        # Jump animation sequence
        dinoY = 2
        basic.pause(350)
        dinoY = 3
        basic.pause(150)
        dinoY = 4
        isJumping = False
input.on_button_pressed(Button.A, on_button_pressed_a)

isJumping = False
dinoY = 0
# Main Setup Loop
score = 0
dinoY = 4
obstacleX = 4
obstacleSpeed = 400
# Placeholder Dino icon
basic.show_icon(IconNames.GIRAFFE)
basic.pause(1000)
basic.clear_screen()
# Primary Gameplay Loop

def on_forever():
    global obstacleX, score, obstacleSpeed
    basic.clear_screen()
    # Draw the Dinosaur
    led.plot(0, dinoY)
    # Move and Draw Obstacle
    led.plot(obstacleX, 4)
    basic.pause(obstacleSpeed)
    obstacleX += -1
    # Reset obstacle position and update score
    if obstacleX < 0:
        obstacleX = 4
        score += 1
        # Gradually increase speed difficulty
        if obstacleSpeed > 150:
            obstacleSpeed += -25
    # Collision Detection
    if obstacleX == 0 and dinoY == 4:
        music.play_melody("C5 B A G F E D C ", 120)
        basic.show_string("GAME OVER!")
        basic.show_string("SCORE:")
        basic.show_number(score)
        # Reset Game
        score = 0
        obstacleSpeed = 400
        obstacleX = 4
basic.forever(on_forever)
