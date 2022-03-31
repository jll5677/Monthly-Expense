import moment from 'moment';

export function getDate(date){
    let tDay = date;
    if(date === undefined){
        let tDay = new Date();
        return moment(tDay).format("YYYY-MM-DD");
    }
    return moment.utc(tDay).format("YYYY-MM-DD");
}
export function getConvertedDate(date){
    return moment.utc(date).format("MM-DD-YYYY");
}
