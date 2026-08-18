// Game Initialization
input.onButtonPressed(Button.A, function () {
    if (!(isJumping)) {
        isJumping = true
        // Jump animation sequence
        dinoY = 2
        basic.pause(350)
        dinoY = 3
        basic.pause(150)
        dinoY = 4
        isJumping = false
    }
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
})
let score = 0
let isJumping = false
let dinoY = 0
dinoY = 4
let obstacleX = 4
let obstacleSpeed = 400
// Placeholder Dino icon
basic.showIcon(IconNames.Giraffe)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    music.setVolume(255)
})
// Primary Gameplay Loop
basic.forever(function () {
    basic.clearScreen()
    // Draw the Dinosaur
    led.plot(0, dinoY)
    // Move and Draw Obstacle
    led.plot(obstacleX, 4)
    basic.pause(obstacleSpeed)
    obstacleX += -1
    // Reset obstacle position and update score
    if (obstacleX < 0) {
        obstacleX = 4
        score += 1
        // Gradually increase speed difficulty
        if (obstacleSpeed > 150) {
            obstacleSpeed += -25
        }
    }
    // Collision Detection
    if (obstacleX == 0 && dinoY == 4) {
        record.playAudio(record.BlockingState.Blocking)
        basic.showString("GAME OVER!")
        basic.showString("SCORE:")
        basic.showNumber(score)
        // Reset Game
        score = 0
        obstacleSpeed = 700
        obstacleX = 4
    }
})
