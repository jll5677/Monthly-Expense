import moment from 'moment';

export function getDate(date){
    return moment.utc(date).format("YYYY-MM-DD");
}
