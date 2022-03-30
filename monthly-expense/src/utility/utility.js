import moment from 'moment';

export function todaysDate(){
    let date = new Date();
    return moment(date).format("YYYY-MM-DD");
}
export function getDate(date){
    return moment.utc(date).format("YYYY-MM-DD");
}
