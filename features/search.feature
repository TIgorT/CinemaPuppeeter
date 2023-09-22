Feature: Booking movie tickets- Tests

    Scenario:Successful booking of one seat
        Given user is on "/Идём в кино" page
        When user chooses day "7" of the week
        When user selects session time
        When user chooses row "10" and seat "10"
        When clicks on the book button
        Then the user sees the button "Получить код бронирования"

    Scenario: Successful booking of one VIP seat
        Given user is on "/Идём в кино" page
        When user chooses day "3" of the week
        When user selects session time VIP
        When user chooses row "1" and seat "8"
        When clicks on the book button
        Then the user sees the button "Получить код бронирования"
    Scenario: Unsuccessful seat reservation
        Given user is on "/Идём в кино" page
        When user chooses day "4" of the week
        When user selects session time Terminator
        When user trying to choose a reserved seat
        Then check the button 'Забронировать' not active



        