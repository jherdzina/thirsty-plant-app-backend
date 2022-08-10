import mongoose from "mongoose";
import Plant from './controllers/models/plants.js';
// import mongoose from './controllers/models';

Plant.create([{
    plantType: 'Fiddle Leaf Fig',
    roomLocated: 'Dining Room',
    waterSchedule: 'weekly'
}])

.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})