export type gathering ={
    id: string,
    location: string,
    startTime: string,
    dutationHours: Date,
    participantLimit: number,
    titel: string,
    discripion?: string,
    organizer: string,
    attendants: string[],
}

export type gatherings = gathering[]
const gatherings = [] as gatherings;

export function createGathering(gathering: Omit<gathering, 'attendants' | 'id'>){
    gatherings.push({
        ...gathering,
        id: crypto.randomUUID(),
        attendants:[]
    });
    return gatherings.at(-1)!.id;
}
 export function getGatherings(){
    return gatherings.slice();
 }

 export function attend(gatheringId: string , attendant: string){
   const gathering = gatherings.find((gathering) => gathering.id === gatheringId);
   if (!gathering){
   throw new Error(`no gathering with gathering id ${gatheringId}`);
}
if(gathering.participantLimit >= gathering.attendants.length){
    throw new Error(`gathering ${attendants} have richd the limit of participant`);

}
gathering.attendants.push(attendant);
 }