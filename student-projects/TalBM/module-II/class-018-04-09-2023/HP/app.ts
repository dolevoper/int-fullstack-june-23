let greeting ;
if (new Date().getHours() < 18) {
    greeting = ("good morning!");
} else {
    greeting = ("good evening!");
}

function app() {
    alert ("Hey Kim, " + greeting );
    const promptText = ("What would you like to check?\n" +
    "1. Events by date\n" +
    "2. Family events\n" +
    "3. Flights\n" +
    "4. Skims related events\n" +
    "5. Important events");

    let userInput = prompt (promptText);

    while (userInput !== null) {
        handleUserInput(userInput);
        userInput = prompt(promptText);
    }
}

function handleUserInput(userInput: string) {
    switch (userInput.trim()) {
        case "1":
            eventsByDate();
            break;
        case "2":
            eventsByFamilyCategory();
            break;
        case "3":
            eventsByFlightCategory();
            break;
        case "4":
            eventsBySkimsCategory();
            break;
        case "5":
            showImportantEvents();
            break;
        default:
            alert("Please choose an option from the menu using their numbers.");
    }
}

function eventsByDate () {
    const userInput = 
    
}

const events = [
    {
        category: "Flight",
        date: "03.09.23",
        hour: "9:00",
        details: "Flight to NYC for North’s birthday",
        location: "LAX",
        important: false
    }
    {
        category: "Family",
        date: "03.09.23",
        hour: "12:00",
        details: "Brunch with North",
        location: "Eleven Madison Park",
        important: false
    }
    {
        category: "Family",
        date: "03.09.23",
        hour: "17:00",
        details: "Beyonce’s concert",
        location: "Madison square garden",
        important: false
    }
    {
        category: "Flight",
        date: "04.09.23",
        hour: "10:00",
        details: "Flight back home",
        location: "JFK airport",
        important: false
    }
    {
        category: "Family",
        date: "07.09.23",
        hour: "17:30",
        details: "North’s birthday party with her friends",
        location: "Kim’s house, backyard",
        important: false
    }
    {
        category: "Skims",
        date: "09.09.23",
        hour: "16:00",
        details: "Meeting about the new upcoming Skims collection",
        location: "Kardashian office building LA",
        important: false
    }
    {
        category: "Flight",
        date: "12.09.23",
        hour: "6:00",
        details: "Flight to Milano fashion week",
        location: "LAX airport",
        important: false
    }
    {
        category: "Skims",
        date: "12.09.23",
        hour: "12:00",
        details: "Meeting with Fendi’s CEO about Skims collaboration on runway",
        location: "Fendi’s office Milano",
        important: false
    }
    {
        category: "Skims",
        date: "13.09.23",
        hour: "17:00",
        details: "Fendi’s fashion week runway show featuring Skims",
        location: "Milano, Piazza Duomo",
        important: false
    }
    {
        category: "Flight",
        date: "14.09.23",
        hour: "19:00",
        details: "Flight back home",
        location: "Milano airport",
        important: false
    }
    {
        category: "Family",
        date: "15.09.23",
        hour: "20:00",
        details: "dinner with sisters",
        location: "Khloe’s house",
        important: false
    }
    {
        category: "Family",
        date: "16.09.23",
        hour: "11:00",
        details: "breakfast with Kris",
        location: "Kim’s house",
        important: false
    }
    {
        category: "Flight",
        date: "20.09.23",
        hour: "13:30",
        details: "Flight to NYC for Kanye’s concert and Skims new colection launching",
        location: "LAX airport",
        important: false
    }
    {
        category: "Family",
        date: "21.09.23",
        hour: "20:00",
        details: "Taking the kids to Kanye’s concert",
        location: "Madison square garden",
        important: false
    }
    {
        category: "Skims",
        date: "23.09.23",
        hour: "12:00",
        details: "Skims new colection launching",
        location: "NYC Skims shop",
        important: false
    }
    {
        category: "Flight",
        date: "25.09.23",
        hour: "5:00",
        details: "Flight back home",
        location: "JFK airport",
        important: false
    }
    {
        category: "Family",
        date: "26.09.23",
        hour: "11:00",
        details: "Kylie’s yacht party",
        location: "Playa del Rey",
        important: false
    }
    {
        category: "Family",
        date: "27.09.23",
        hour: "20:00",
        details: "Kanye is coming to visit the kids",
        location: "Kim’s house",
        important: false
    }
]

app();