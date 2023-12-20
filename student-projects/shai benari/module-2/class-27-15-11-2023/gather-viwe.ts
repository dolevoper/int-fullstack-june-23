import * as Gatherings from "./garher-model.js";
// import * as GatheringListView from "./gatheringList.view.js";

const typescriptMeetupId = Gatherings.createGathering({
    durationInHours: 1,
    location: "Te-Aviv",
    organizer: "Omer",
    participantLimit: 10,
    startTime: new Date(),
    title: "Typescript Meetup"
});